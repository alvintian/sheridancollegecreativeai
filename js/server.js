const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const articles = [
    {
        title: "Exploring Toronto's Hidden Gems",
        description: "A guide to discovering the city's lesser-known attractions.",
        image: "images/toronto.jpg",
    },
    {
        title: "The Future of AI in Design",
        description: "How AI is transforming creative industries.",
        image: "images/ai-design.jpg",
    },
];

// Endpoint to get articles
app.get('/articles', (req, res) => {
    res.json(articles);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
