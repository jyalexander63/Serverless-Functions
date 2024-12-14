require('dotenv').config();
const fetch = require('node-fetch');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    const { name, phone, email, subject, message } = JSON.parse(event.body);

    const emailContent = `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}

        Message:
        ${message}
    `;

    const mailgunDomain = process.env.MAILGUN_DOMAIN;
    const mailgunApiKey = process.env.MAILGUN_API_KEY;

    const formData = new URLSearchParams();
    formData.append('from', process.env.MAILGUN_FROM_EMAIL);
    formData.append('to', 'your.name+alias@dc-uoit.ca, adam.kunz+inft@durhamcollege.ca');
    formData.append('subject', `[Automated] ${subject}`);
    formData.append('text', emailContent);

    try {
        const response = await fetch(`https://api.mailgun.net/v3/${mailgunDomain}/messages`, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${Buffer.from(`api:${mailgunApiKey}`).toString('base64')}`,
            },
            body: formData,
        });

        if (response.ok) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Email sent successfully' }),
            };
        } else {
            const errorData = await response.json();
            console.error('Mailgun API Error:', errorData);
            return {
                statusCode: 500,
                body: JSON.stringify({ message: 'Failed to send email', error: errorData }),
            };
        }
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email', error }),
        };
    }
};
