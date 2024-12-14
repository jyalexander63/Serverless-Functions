---
layout: layouts/default.hbs
title: README
permalink: README/readme.html
---

# Eleventy Static Site Generator

**Author:** Jy Alexander

**Date:** September 2024

This project is a static site built usin Eleventy Static Site Generator (11ty). It includes pages generated from Markdown and Nunjucks templates with custom CSS styling.

## Install Dependencies
Install the required dependencies to your device
Ensure you have an IDE that is compatible, **Visual Studio Code** is recommended.
## Run the Application

There are two main commands you can use to build and serve the project.

**Build the Project**
To build the static files, open the terminal and run the command: **"npm run build"** without the quotation marks.
This will generate the site into the dist folder where you can then open the HTML files in your browser.

**Serve the Project Locally**
This will start a local server at **http://localhost:8080** and automatically rebuild the project, including whenever you make changes.

Open a browser and enter "**http://localhost:8080**" into the search bar, press enter. The home page should be displayed and from there you can navigate through the contents of the website.

## Additional Information

- The **public** folder contains static assets such as images and CSS files. These are automatically copied to the dist folder when the project is built.

- Pages are enerated from Markdown files (e.g., src/1_lab_solution.md) and Nunjucks templates (e.g., src/index.njk).

## License 
**Public**
