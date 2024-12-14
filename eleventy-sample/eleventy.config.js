require('dotenv').config();
const fs = require("fs-extra");
const handlebars = require("@11ty/eleventy-plugin-handlebars");
const fetch = require("node-fetch");
const marked = require('marked');

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

// Helper function to process Strapi content structure
function processContent(content) {
  if (!content) return '';
  if (Array.isArray(content)) {
    // Convert the structured content to Markdown first
    const markdownContent = content.map(block => {
      if (block.type === 'paragraph') {
        return block.children
          .map(child => child.text)
          .join('') + '\n\n';  // Add double newline for paragraphs
      }
      return '';
    }).join('');

    // Then convert Markdown to HTML
    return marked.parse(markdownContent);
  }
  return content;
}


module.exports = function(eleventyConfig) {
  // Add Handlebars plugin
  eleventyConfig.addPlugin(handlebars);

  eleventyConfig.addHandlebarsHelper("processContent", function(content) {
    return processContent(content);
  });

  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy({"public/images": "images"});
  eleventyConfig.addPassthroughCopy({"public/css": "css"});
  eleventyConfig.addPassthroughCopy({"public/videos": "videos"});
  eleventyConfig.addPassthroughCopy({"public/js": "js"});

  // Add collection for Strapi posts with pagination data
  eleventyConfig.addCollection("strapiPosts", async function() {
    try {
      const response = await fetch(`${STRAPI_URL}/api/posts?populate=*`, {
        headers: {
          'Authorization': `Bearer ${STRAPI_TOKEN}`
        }
      });
      const data = await response.json();

      // Map posts
      const posts = data.data.map(post => ({
        id: post.id,
        url: `/blog/${post.Slug || post.id.toString()}/`,
        title: post.Title || '',
        content: processContent(post.Content),
        excerpt: post.Excerpt || '',
        date: new Date(post.publishedAt || ''),
        slug: post.Slug || post.id.toString(),
        category: post.Category || '',
        featuredImage: post.FeaturedImage ? `${STRAPI_URL}${post.FeaturedImage.url}` : null
      }));

      // Sort posts by date in descending order
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Add next and previous posts
      return posts.map((post, index, array) => {
        return {
          ...post,
          nextPost: array[index - 1] || null,
          previousPost: array[index + 1] || null
        };
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  });

// Add collection for Dream Cars
eleventyConfig.addCollection("strapiDreamCars", async function() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/dream-cars?populate=*`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`
      }
    });
    const data = await response.json();

    // Map dream cars with basic data
    const dreamCars = data.data.map((car, index) => ({
      id: car.id,
      url: `/cars/${car.id.toString()}/`,
      pageNumber: index + 1,  // Add page number
      totalPages: data.data.length,  // Add total pages
      make: car.Make || '',
      model: car.Model || '',
      year: car.Year || '',
      price: car.Price || '',
      description: car.Description || '',
      image: car.Image?.[0]?.url ? `${STRAPI_URL}${car.Image[0].url}` : null
    }));

    // Add next and previous cars
    return dreamCars.map((car, index, array) => {
      return {
        ...car,
        nextCar: array[index - 1] || null,
        previousCar: array[index + 1] || null
      };
    });

  } catch (error) {
    console.error("Error fetching dream cars:", error);
    return [];
  }
});

  eleventyConfig.addWatchTarget("public/css");

  eleventyConfig.on("eleventy.before", async () => {
    try {
      console.log("Deleting 'dist' folder...");
      await fs.remove("dist");
      console.log("'dist' folder deleted successfully!");
    } catch (err) {
      console.error("Error deleting 'dist' folder:", err);
    }
  });

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        const content_404 = fs.readFileSync('dist/404.html');

        bs.addMiddleware("*", (req, res) => {
          res.write(content_404);
          res.end();
        });
      }
    }
  });
  
  return {
    dir: {
      input: "src",
      output: "dist"
    },
    templateFormats: ["hbs", "md"],
    htmlTemplateEngine: "hbs",
    markdownTemplateEngine: "hbs"
  };
};