---
layout: layouts/default.hbs
title: Lab 3 solution
permalink: lab3/lab3.html
---

# Serverless Function Providers Comparison

## Overview

Serverless functions allow developers to run code without managing infrastructure. They are event-driven, meaning they only execute in response to events and scale automatically. Below is a comparison of several popular serverless function providers, detailing their key features, pricing models, and use cases.

### AWS Lambda

**Key Features:**
- **Languages Supported:** Node.js, Python, Java, C#, Go, Ruby, and custom runtimes.
- **Integration:** Deep integration with the AWS ecosystem (e.g., S3, DynamoDB, API Gateway, CloudWatch).
- **Scalability:** Automatic and highly flexible scaling.
- **Deployment:** Can be managed via AWS CLI, SDKs, or infrastructure-as-code tools like AWS CloudFormation and Terraform.

**Pricing:**
- **Free Tier:** 1 million free requests per month and up to 3.2 million seconds of compute time per month.
- **Beyond Free Tier:** Charged based on number of requests and compute time.

**Ideal Use Cases:**
- Already invested in the AWS ecosystem.
- High control and extensive tooling options.
- Need for a large variety of services and integrations.

### Google Cloud Functions

**Key Features:**
- **Languages Supported:** Node.js, Python, Go, Java, .NET, Ruby, PHP.
- **Integration:** Tight integration with Google Cloud services (e.g., Cloud Pub/Sub, Firestore).
- **Event Triggering:** Can trigger from various GCP services or HTTPS requests.

**Pricing:**
- **Free Tier:** 2 million function invocations per month with some free compute time.
- **Beyond Free Tier:** Pay for compute time and requests.

**Ideal Use Cases:**
- Organizations already using Google Cloud.
- Integrations with GCP services like BigQuery, Cloud Storage.

### Microsoft Azure Functions

**Key Features:**
- **Languages Supported:** C#, Java, JavaScript (Node.js), Python, PowerShell, TypeScript, Go (via custom handlers).
- **Integration:** Seamless integration with Azure ecosystem (e.g., Blob Storage, Event Hubs, Service Bus).
- **Development Tools:** Visual Studio, Visual Studio Code, and Azure CLI support.

**Pricing:**
- **Free Tier:** 1 million requests and 400,000 GB-seconds of resource consumption per month.
- **Beyond Free Tier:** Pay as you go, based on consumption.

**Ideal Use Cases:**
- Existing Microsoft/Azure environment.
- Strong preference for .NET ecosystem and related tooling.

### Netlify Functions

**Key Features:**
- **Languages Supported:** Primarily Node.js (using AWS Lambda under the hood).
- **Integration:** Smoothly integrated with Netlify’s static site hosting and builds.
- **Simplicity:** Straightforward deployment from Git repositories.

**Pricing:**
- **Free Tier:** Generous free tier of function execution minutes.
- **Beyond Free Tier:** Pay for additional usage.
  
**Ideal Use Cases:**
- JAMstack sites deployed on Netlify.
- Quick and easy setup without needing to manage separate cloud accounts.
- Smaller projects or prototypes where ease of integration with static hosting is key.

### Comparison Summary

| Provider | Integration Ecosystem | Language Support | Tooling & Ecosystem Maturity | Free Tier Generosity | Complexity |
|----------|-----------------------|------------------|-----------------------------|---------------------|------------|
| AWS Lambda | AWS Services | Broad | Very Mature | Generous | Moderate |
| GCF (Google) | GCP Services | Broad | Mature | Generous | Moderate |
| Azure Functions | Azure Services | Broad, strong .NET support | Mature | Generous | Moderate |
| Netlify Functions | Netlify’s JAMstack | Primarily Node.js | Simpler, less complex | Generous | Very Simple |

---

**My Choice for Hosting the New Function:**  
I will choose **Netlify Functions**. The reason is that it provides a very straightforward developer experience, especially if I’m already hosting a website on Netlify. For a small project or a new function that might integrate with a JAMstack site, this is simple and cost-effective. The free tier is generous enough to get started without worrying about initial costs or complexity.

---

# E-mail Sending Services Comparison

## Overview

Many web applications need to send transactional or marketing emails. Several third-party providers offer APIs and tools to handle delivery, ensuring better reliability and deliverability than sending directly via SMTP. Below is a comparison of popular services.

### SendGrid

**Key Features:**
- **Focus:** Transactional and marketing emails.
- **Integration:** RESTful API, SMTP relay.
- **Analytics & Deliverability Tools:** Comprehensive dashboards, event tracking, A/B testing.
- **Pricing:** Has a free tier (up to 100 emails/day), then scales as you need more volume.

### Mailgun

**Key Features:**
- **Focus:** Transactional emails, developer-friendly API.
- **Integration:** RESTful API, SMTP, good documentation.
- **Deliverability Tools:** Email validation, reputation metrics, detailed logs.
- **Pricing:** Offers a free trial (first 5,000 emails free for three months), then pay-per-use.

### Mailchimp Transactional (Mandrill)

**Key Features:**
- **Focus:** Primarily marketing campaigns and newsletters, with a separate service (Mandrill) for transactional emails.
- **Integration:** Powerful marketing automation suite, segmentation tools.
- **Deliverability Tools:** Built-in templates, analytics.
- **Pricing:** Generally paid; Mandrill credits cost extra and requires a Mailchimp plan.

**Key Differences:**

| Provider   | Focus                | Pricing Model                 | Free Tier Availability     | Notable Strengths                       |
|------------|----------------------|-------------------------------|---------------------------|------------------------------------------|
| SendGrid   | Both transactional & marketing | Free tier (100 emails/day), then pay as you grow | Yes, with daily limit | Robust API, strong analytics, easy integration |
| Mailgun    | Primarily transactional | Free trial (limited time), then pay-per-use | Limited trial | Developer-friendly, good for pure transactional |
| Mailchimp  | Primarily marketing campaigns & newsletters (Mandrill for transactional) | Requires a paid plan + credits for Mandrill | No permanent free tier (some free mailing for small lists) | Great for marketing automation, segmentation, and design tools |

---

**My Choice for E-mail Sending Service:**
I will choose **SendGrid**. It provides a straightforward free tier, allowing me to send up to 100 emails per day, which is usually enough to start for development or small-scale deployments. It’s easy to integrate and scale when needed, plus it offers a good balance of transactional and marketing capabilities.

---

# Summary

- **Serverless Provider:** **Netlify Functions** for ease of integration with a frontend on Netlify and a generous free tier.
- **Email Sending Service:** **SendGrid** due to its free tier, easy integration, and robust tooling.

