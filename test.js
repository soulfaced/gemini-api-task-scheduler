const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI('AIzaSyAD84t6GOrLlyVJaU7roJC7jMj9UCOLKqw');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const prompt = 'Write a story about a magic backpack.';

async function generateContent() {
    try {
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    } catch (error) {
        console.error('Error generating content:', error);
    }
}

generateContent();
