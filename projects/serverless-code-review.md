---
title: Serverless Code Review Assistant on AWS
description: Automated code review bot powered by AWS Serverless architecture and Bedrock.
role: Cloud Engineer
timeline: Jan 2024 - Present
stack: [AWS Lambda, API Gateway, DynamoDB, Bedrock]
category: Personal Project
image: /img/docusaurus.png
hide_table_of_contents: true
---

{/* truncate */}


## Overview
The **Serverless Code Review Assistant** is an automated tool designed to streamline the code review process. By leveraging **AWS Serverless** services and **Generative AI** (Amazon Bedrock), it automatically analyzes Pull Requests, detects potential bugs, and suggests refactoring improvements directly in GitHub comments.

## Architecture
- **Trigger**: GitHub Webhook triggers an event on PR creation/update.
- **Compute**: **AWS Lambda** processes the payload and fetches code diffs.
- **AI Model**: **Amazon Bedrock** (Claude 3) analyzes the code context.
- **Storage**: **Amazon DynamoDB** stores review logs and user feedback.

## Key Features
- **Automated Feedback**: Instant review comments on new PRs.
- **Smart Suggestions**: Context-aware code improvements.
- **Serverless**: Fully event-driven and cost-effective architecture.
