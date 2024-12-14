---
layout: layouts/default.hbs
title: Lab 1 solution
permalink: 1_lab_solution/solution.html
---
# Static Site Generation Experience

**Author:** Jy Alexander
**Date:** September 15th, 2024

## Introduction

This lab focuses on using SSG tools and templating engines to build a simple site. I explored different template engines and worked with the 11ty static site generator.


## Template Engines Comparison

During this lab, I researched three template engines that work with SSG tools:

1. **Nunjucks**
    - **Pros**:
        - Simple syntax thats easy for beginners.
        - Support for custom filters and tags.

    - **Cons**:
        - Limited features in comparison to other feature-rich templating engines.
        - Not as fast as other templating engines.

2. **Pug**
    - **Pros**:
        - Supports partials and Layouts.
        - Clean syntax that reduces HTML boilerplate.

    - **Cons**:
        - There is some performance overhead
        - Hard for beginners to debug because of its syntaxx

3. **Handlebars**
    - **Pros**:
        - Highly Readable syntax
        - Large community with lots of open-source resources.

    - **Cons**:
        - Learning curve for beginners
        - Limited built-in features

### Choice of Template Engine

For this lab, I chose **Nunjucks** mainly because it was the most recent templating engine shown in class.

## SSG Applications Comparison

While 11ty is the focus of this lab, SSG tools i found that are popular in the development community are:

1. **Hugo**
    - **Pros**:
        - straight forward layout
        - Faster than other static site generator applications.

    - **Cons**:
        - Big learning curve for beginners

3. **Jekyll**
    - **Pros**:
        - faster website loading time because there is no need for database access.
        - Greater stability and Security since the web server only has to deliver text files instead of several different components interacting with each other.

    - **Cons**:
        - No server-side scripting.
        - No graphical user interface (GUI) by default.

## 11ty Configuration

I explored the [11ty configuration documentation](https://www.11ty.dev/docs/config/). Key settings include:

1. **Directory Structure**:
   - 11ty uses a default directory structure, which places content in a `_site` folder.
   
2. **Passthrough File Copy**:
   - This feature allows static assets (like images or CSS) to be copied directly to the output folder without processing. I used this so my assets were transferred without modification.
   
3. **Markdown Parsing**:
   - I configured 11ty to parse Markdown files using its default markdown-it parser, because it offers flexibility in rendering Markdown content.

### Additional Settings to Explore

- **Template Formats**: 11ty supports multiple formats like Markdown, Liquid, and Pug. Exploring multiple formats could be useful for larger projects more complex projects.
- **Collections**: This feature allows grouping of content, which could be useful for organizing blogs or posts on a website.

## Front Matter

**Front Matter** is metadata placed at the top of content files (such as Markdown files), between `---` delimiters. It defines properties like title, layout, or date for the page. For example:

```yaml
---
title: "My First Post"
layout: "default.njk"
date: "2024-09-15"
---
```

## References

<li><a href="/1_lab_references/references.html">References</a></li>