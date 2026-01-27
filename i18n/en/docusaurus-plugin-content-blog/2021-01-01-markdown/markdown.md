---
authors: teddygood
date: '2021-01-01'
description: "Organizing Markdown for Getting Used to Documentation  \n\n(Note: The
  original Korean text is quite brief, so the translation reflects the core meaning
  while ensuring natural English flow. If you'd like to expand this into a full guide
  or have additional content to include, I'd be happy to refine it further!)  \n\n**Alternative
  (more literal):**  \n*Organizing Markdown to Become Familiar with Documentation*
  \ \n\nLet me know if you'd like a more detailed version or specific sections added!"
draft: false
keywords:
- Markdown
- Blog
slug: /markdown
tags:
- Blog
title: "⌨️Markdown Summary  \n\nMarkdown is a lightweight markup language designed
  for easy readability and writing. It allows users to format text using simple syntax,
  which can then be converted to HTML or other formats. Below is a concise guide to
  common Markdown elements:  \n\n### **Basic Syntax**  \n- **Headings**: `#` to `######`
  (e.g., `# Heading 1`)  \n- **Bold**: `**text**` or `__text__`  \n- *Italic*: `*text*`
  or `_text_`  \n- **Lists**:  \n  - Unordered: `-`, `+`, or `*` followed by a space
  \ \n  - Ordered: Numbers + `.` (e.g., `1. Item`)  \n- **Links**: `[text](URL)`  \n-
  **Images**: `![alt text](image.jpg)`  \n- **Blockquotes**: `> quoted text`  \n-
  **Code**:  \n  - Inline: `` `code` ``  \n  - Blocks: Triple backticks (```) with
  optional language (e.g., ```python)  \n\n### **Advanced Features**  \n- **Tables**:
  \ \n  ```markdown\n  | Column 1 | Column 2 |\n  |----------|----------|\n  | Cell
  1   | Cell 2   |\n  ```  \n- **Horizontal Rule**: `---` or `***`  \n- **Task Lists**:
  \ \n  ```markdown\n  - [x] Completed task\n  - [ ] Pending task\n  ```  \n- **Footnotes**:
  \ \n  ```markdown\n  Here's a footnote reference[^1].\n\n  [^1]: Footnote definition.\n
  \ ```  \n\n### **Notes**  \n- Most platforms (GitHub, Notion, etc.) support extended
  Markdown with additional features.  \n- Consistency in formatting improves readability.
  \ \n\nFor deeper use, refer to platform-specific extensions or tools like [CommonMark](https://commonmark.org/)."
---

Restarting my blog after a long time, I realized I’ve gotten rusty with Markdown, so I’m documenting and practicing it.

<!--truncate-->

## What is Markdown?

Markdown is a syntax for editing the formatting of plain text documents. It’s used in GitHub README files, online documentation, or when editing documents with plain text editors. Documents written in Markdown can be easily converted into other formats like HTML. In short, it’s a language that helps developers document things easily.

## When You Want to Show the Syntax Itself

If you add a backslash (`\`) before Markdown syntax, it will display the syntax as-is.

```
\### Hello
```

\### Hello

## Code Blocks

```
\`\`\`language name  
code  
\`\`\`
```

```c
#include <stdio.h>

int main(void)
{
    printf("Hello World!");
}
```

## Text Formatting

```
*Italic (slanted)*
_Italic (slanted)_
**Bold**
__Bold__
~~Strikethrough~~
```

*Italic*  
_Italic_  
**Bold**  
__Bold__  
~~Strikethrough~~  

For underlines or text colors, use HTML and CSS.

## Headers

You can indicate heading sizes from `h1` to `h6` using `#` to `######`.

```
# This is a h1
## This is a h2
### This is a h3
#### This is a h4
##### This is a h5
###### This is a h6
```

# This is a h1  
## This is a h2  
### This is a h3  
#### This is a h4  
##### This is a h5  
###### This is a h6  

######## This is a h7 → Not supported.  

You might notice a horizontal line under `h2`—this is defined in the SCSS of the minimal-mistakes theme. I’m still deciding whether to keep or modify this.

## Lists

### Ordered Lists

1. 1st  
2. 2nd  
3. 3rd  

```
1. 1st  
1. 2nd  
1. 3rd  
```
You can write them as usual with `1.`, but even if you repeat the same number like in the code block above, it will still display as a numbered list in descending order.

### Unordered Lists (Bullets: `*`, `+`, `-`)

```
- I  
  + want  
  * to eat  
    + raw fish  
    + chicken
```

- I  
  + want  
  * to eat  
    + raw fish  
    + chicken  

You can use a single character for bullets, or mix them as shown in the example.

## Line Breaks

In HTML, you use `<br>`, but in Markdown, press the **Space bar twice** and then **Enter** to create a line break.

```
I'm hungry  
I want to eat
```

I'm hungry  
I want to eat  

## Horizontal Lines

This is equivalent to `<hr>` in HTML. It’s often used to separate sections—like a page break. It can be written as `---`, `***`, etc., and some irregular syntax seems to be accepted too.

```
* * *  
***  
******  
- - -  
---  
___  
```

---
***

## Blockquotes

Use `>` to denote blockquotes. For line breaks in nested quotes, use the same line break method as above.

```
> Quote  
>> Quote inside a quote  
Second quote inside  
>>> Quote inside a quote inside a quote
```

> Quote  
>> Quote inside a quote  
Second quote inside  
>>> Quote inside a quote inside a quote  

## Links

Here are ways to add links to documents. There may be other methods too.

```
Link showing URL: <https://www.google.com/>  

Link with URL in description: [Google](https://www.google.com/)  

Link to header in the same file: [Blockquotes](#blockquotes)  
```

[https://www.google.com/](https://www.google.com/)  
[Google](https://www.google.com/)  
[Blockquotes](#blockquotes)  

### How to Create a Link to a Header

1. Copy the heading text (excluding the `#` symbols).  
2. Remove special characters.  
3. Replace spaces with `-`.  
4. Convert uppercase letters to lowercase.  
5. Add a `#` at the beginning of the string.  

e.g., "## When You Forget or Want to Apply Markdown" → "#when-you-forget-or-want-to-apply-markdown"

## Images

```
![Profile](profile.jpg)

<img src="profile.jpg" width="300" height="200">

[![Profile](profile.jpg)](https://teddygood.github.io/)
```

![Pencil](profile.jpg)

[![Pencil](profile.jpg)](https://teddygood.github.io/)

This image is a photo of the moon I took at my university.

## Tables

You can create tables using a combination of `|` and `-`.

- Alignment:
  * Left-aligned |:—|  
  * Right-aligned |—:|  
  * Center-aligned |:—:|  

| Food | Price | Review |  
|:---:|---:|---|  
| Chicken + Cheese Balls | 25000 | Delicious |  
| Rice Noodles | 7000 | Not tasty |

## When You Forget or Want to Apply Markdown

In such cases, you can mix Markdown with HTML/CSS. For example, if line breaks aren’t working, you can use the `<br>` tag. If you want to change text color or add underlines, use HTML and CSS.

## References

- [Markdown](https://daringfireball.net/projects/markdown/)  
- [Wikipedia Markdown](https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4)  
- [Complete Markdown Syntax Guide](https://ansohxxn.github.io/blog/markdown/#%EA%B8%80%EC%94%A8-%EC%83%89)  
- [How to Use Markdown with Examples](https://theorydb.github.io/envops/2019/05/22/envops-blog-how-to-use-md/#markdown%EC%9D%B4%EB%9E%80)  
- [Markdown Writing Guide](https://gist.github.com/ihoneymon/652be052a0727ad59601)