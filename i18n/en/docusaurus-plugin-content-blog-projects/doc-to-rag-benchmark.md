---
title: "Doc-to-RAG Benchmark"
description: From Doc-to-Text to evaluable RAG data | Retrospective on a PDF-based Doc-to-RAG Benchmark project from the Meta Llama Academy workshop
role: AI Engineer
timeline: Sep 2025 - Oct 2025
stack: [LangGraph, Upstage API, Solar Pro 2, Llama 3.2, PDF Parsing, QLoRA]
category: Team Project
image: /img/projects/doc-to-rag-benchmark/experience/experience-01-expanded.png
hide_table_of_contents: false
---

{/* truncate */}

# Doc-to-RAG Benchmark

## Why We Started This Project

Early in the workshop, the biggest problem became obvious. To compare RAG performance, we first needed "comparable data." But for PDF documents, each parser produced different outputs, so even the same question had unstable evaluation baselines.

Within the team, we aligned on one direction: not "showing off a model," but "fixing the evaluation baseline." We believed the pipeline had to connect document extraction, QA generation, judge validation, and dataset storage end-to-end to make experiments reproducible.

## Team Structure and Roles

The team was organized as follows:

1. Project lead: direction, priorities, and schedule management
2. Frontend + backend: demo and service integration
3. Multi-agent implementation: parsing/refinement graph design
4. Data/evaluation pipeline: extraction-text benchmark + LLM Judge + Hugging Face upload
5. Me: QLoRA-based fine-tuning experiment design and operation

My biggest focus was role #5. I concentrated on whether fine-tuning produced meaningful gains for the overall project and how to keep those results in an operationally usable form.

## Detailed Role Breakdown (Beyond My Own Role)

As emphasized in our initial draft, this project was not completed by one person's model experiments. It worked because multiple axes were integrated. So it is important to summarize non-my-role contributions from an implementation point of view too.

### 1) Project Lead: Fixing Direction and Decision Framework

The project lead did more than schedule management. They fixed what "success" meant.

1. Defined the goal as "building a reproducible Doc-to-RAG pipeline," not "finding the highest-score model"
2. Set priorities by bottleneck order (extraction -> validation -> refinement -> evaluation), not feature listing
3. Unified demo messaging around operational viability (balance of cost/speed/quality), not just benchmark numbers

Because of this alignment, even though each member built different modules, final outputs converged toward one direction.

### 2) Frontend + Backend: Connecting the Demo into a Real Execution Flow

The frontend/backend owner tied each pipeline stage into one visible flow.

1. Visualized each stage from input document to extraction output, validation status, refinement result, and final selection result
2. Delivered backend artifacts (JSON/logs) in reusable formats for frontend rendering
3. Built the demo so failure and success cases could be compared in the same scenario flow

As a result, our presentation could show not "this model is good," but "how the system makes decisions."

### 3) Multi-Agent Implementation: Making the Parsing/Refinement Graph Operable

The multi-agent owner split the system into two LangGraph-based axes:

1. OCR/parsing strategy-selection graph: base extraction -> validation -> judge -> final selection
2. Refine graph: determine if refinement is needed -> refine only necessary pages -> re-validate

Key implementation points were page-level fallback and early stop.

1. Apply post-processing only to failed pages, not to the entire document
2. Stop early if there is no improvement
3. Use a composite score that includes both quality and throughput for final selection

Without this design, accuracy might improve, but costs and latency would rise sharply.

### 4) Data/Evaluation Pipeline: Turning Benchmarking into a Reusable Asset

The data/evaluation owner converted extraction outputs from "one-off results" into "reusable experimental assets."

1. Built a QA generation pipeline on top of extracted text
2. Separated LLM Judge usage between validation and evaluation stages to reduce role confusion
3. Stored outputs in CSV/JSON/dataset formats for direct reuse in future experiments
4. Connected to Hugging Face upload so others could reproduce with the same format

Because of this axis, even fine-tuning results could be compared on a fixed baseline instead of being one-shot outcomes.

## Project Design: How We Structured the End-to-End Flow

At first we thought, "Picking one good parser is enough," but in practice it was more complex.  
When extraction quality fluctuates, QA generation fluctuates. When QA quality fluctuates, LLM Judge outcomes also fluctuate.  
So we designed this project by pipeline units, not by isolated features.

### 1) Why We Split the Codebase into Three Repositories

To balance experiment speed and operational stability, we separated repositories by role:

1. `llamacpp`: experimentation axis for rapid fine-tuning/inference/evaluation loops
2. `Doc-to-RAG-Benchmark`: product-facing flow, demo narrative, and evaluation standard axis
3. `Doc-to-text_Parsing_Agent`: implementation axis for OCR/parsing strategy selection + refine processing

This separation reduced conflicts between model experiments and service/agent code. Likewise, parser logic changes could be validated independently without breaking the fine-tuning loop.

### 2) Key Design Points in Parsing/Refinement

The core was to avoid expensive full-document processing.

1. Run multiple parsers in parallel at base extraction to produce candidates
2. Determine pass/fail in validation
3. Apply fallback/refinement only to failed pages
4. Re-validate and stop if no improvement is observed

This approach improved quality while controlling API cost and processing time.

### 3) Why Evaluation Was Not Just One Score

In this project, evaluation was not just for leaderboard ranking. It was for defining a baseline for the next experiment.

1. Quality: extraction accuracy, answer consistency, preservation of noise/table/sentence structure
2. Speed: per-document processing time and bottleneck zones
3. Cost: external LLM call frequency and per-page cost

In other words, the criterion was not "did this run look good," but "is this reproducible next time."

For production evaluation, we fixed LLM Judge weights as follows:

1. `S_read` 25%
2. `S_sent` 25%
3. `S_noise` 15%
4. `S_table` 25%
5. `S_fig` 10%

In final selection, we used 80% quality score + 20% processing speed for decision-making.

## My Core Contribution: Fine-Tuning Experiment Design and Operation

### 1) I Fixed the Training Loop First

The first thing I built was not a one-shot script, but a repeatable experiment loop.

1. Base model: `meta-llama/Llama-3.2-1B-Instruct`
2. Comparison model: `meta-llama/Llama-3.2-3B-Instruct`
2. Data: KorQuAD v1 normalization + validation sampling
3. Method: QLoRA (4bit NF4)
4. Comparison: side-by-side inference between base and fine-tuned model
5. Evaluation: fixed on EM/F1
6. Deployment validation: merged LoRA -> GGUF conversion -> `llama.cpp` inference

During the project, I ran both 1B and 3B tracks in parallel.  
1B was useful for quick iteration and parameter exploration, while 3B was used as a comparison axis to check quality ceilings and improvement gaps.  
In the final phase, we decided configurations not only by quality but also by processing time and resource cost.

### 2) I Prioritized "Sustainable Experiments" Over "One Good Run"

Performance numbers alone often collapse in the next iteration, so I kept operational metrics together.

1. Controlled training-time ceiling with `TimeBudgetCallback`
2. Logged step-level wall time/CUDA time/memory usage as CSV
3. Automated LoRA merge at training completion in one script

This made it possible to verify not only "performance improved," but also "why it improved" in later runs.

### 3) I Kept the Fine-Tuning Target Narrow

The goal was not generic conversational quality. It was to improve answer consistency and evidence retrieval in document-grounded QA.  
So we kept data format, prompt template, and evaluation routine stable.

## How Fine-Tuning Connected to the Full Pipeline

My key takeaway was simple: in RAG, improving one component alone does not guarantee end-to-end improvement.

1. If parsing quality is low, retrieval becomes unstable.
2. If retrieval is unstable, hallucinations increase even with a stronger generator.
3. So fine-tuning should be treated as a final-stage stabilizer and operated together with upstream quality standards.

In short, fine-tuning was not a standalone solution. It served to stabilize final response quality once parsing/evaluation baselines were already organized.

## Service Flow (Based on README)

### Overall Architecture

<img
  src="/img/projects/doc-to-rag-benchmark/doc1-left.png"
  alt="Doc-to-RAG Overview (1)"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "0 auto" }}
/>

<img
  src="/img/projects/doc-to-rag-benchmark/doc1-right.png"
  alt="Doc-to-RAG Overview (2)"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "16px auto 0" }}
/>

Using this diagram, we first fixed role boundaries within the team. The goal was to treat document parsing optimization and benchmark automation as one pipeline, not disconnected tasks.

### Problem Definition and Approach

![Problem Definition](/img/projects/doc-to-rag-benchmark/doc2.png)

The key issue was that each document had different structure, which caused large extraction-quality variance even for the same question.  
So instead of fixing one parser, we designed a strategy-selection architecture based on document characteristics.

### OCR/Parsing Strategy Selection System

![OCR/Parsing Strategy Selection](/img/projects/doc-to-rag-benchmark/doc3.png)

The critical operational principle here was page-level fallback. We corrected quality by applying post-processing only to failed pages and avoided heavy processing across all pages.

### Document Refinement (Refine) System

![Document Refinement (Refine)](/img/projects/doc-to-rag-benchmark/doc4.png)

We controlled costs with the same principle in refinement. We first judged on-device, then sent only `Need Refine` cases to Solar.

### End-to-End Pipeline

<img
  src="/img/projects/doc-to-rag-benchmark/doc5.png"
  alt="End-to-End Pipeline"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "0 auto" }}
/>

We accumulated extraction and evaluation outputs on the same baseline, so results became reusable assets for future experiments, not one-time outputs.

### Evaluation Perspectives and Result Summary

<img
  src="/img/projects/doc-to-rag-benchmark/doc6.png"
  alt="Evaluation Perspective 1"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "0 auto" }}
/>

<img
  src="/img/projects/doc-to-rag-benchmark/doc7.png"
  alt="Evaluation Perspective 2"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "16px auto 0" }}
/>

Instead of concluding from one score, we looked at quality, speed, and cost together. Fixing this criterion helped the team align quickly when interpreting fine-tuning outcomes.

## Demo Screens

<img
  src="/img/projects/doc-to-rag-benchmark/domo1.png"
  alt="Demo Screen 1"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "0 auto" }}
/>

<img
  src="/img/projects/doc-to-rag-benchmark/domo2.png"
  alt="Demo Screen 2"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "16px auto 0" }}
/>

<img
  src="/img/projects/doc-to-rag-benchmark/domo3.png"
  alt="Demo Screen 3"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "16px auto 0" }}
/>

<img
  src="/img/projects/doc-to-rag-benchmark/domo4.png"
  alt="Demo Screen 4"
  style={{ width: "100%", maxWidth: "1100px", height: "auto", display: "block", margin: "16px auto 0" }}
/>

![Demo Screen 5](/img/projects/doc-to-rag-benchmark/domo5.png)

The demo section was designed to show how "selection -> validation -> refinement -> evaluation" actually appears in operation.  
In presentation, it was useful for explaining reproducible operational flow, not only model performance numbers.

### The Experience

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "12px",
    alignItems: "start",
  }}
>
  <img
    src="/img/projects/doc-to-rag-benchmark/experience/experience-01.jpeg"
    alt="The experience 1"
    style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
  />
  <img
    src="/img/projects/doc-to-rag-benchmark/experience/experience-02.jpeg"
    alt="The experience 2"
    style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
  />
  <img
    src="/img/projects/doc-to-rag-benchmark/experience/experience-03.jpeg"
    alt="The experience 3"
    style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
  />
  <img
    src="/img/projects/doc-to-rag-benchmark/experience/experience-04.jpeg"
    alt="The experience 4"
    style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
  />
  <img
    src="/img/projects/doc-to-rag-benchmark/experience/experience-05.jpeg"
    alt="The experience 5"
    style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
  />
  <img
    src="/img/projects/doc-to-rag-benchmark/experience/experience-06.jpeg"
    alt="The experience 6"
    style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
  />
</div>

## What We Confirmed Through This Project

The clearest takeaway was this: in RAG systems, "good evaluation data and selection criteria" improves stability more reliably than "one strong model."

From my role's perspective, fixing the experiment loop and preserving reproducible outputs mattered more for long-term iteration speed than raw fine-tuning gains alone.

## What I Want to Improve Next

1. Automatic selection of domain-specific judge prompts
2. Consistent benchmark output in Hugging Face-compatible format
3. Continuous regression tests for parsing failures and refinement side effects
