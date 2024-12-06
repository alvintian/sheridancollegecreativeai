document.addEventListener('DOMContentLoaded', async () => {
    const articles = document.getElementById('articles');

    const sampleArticles = [
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


    const fetchArticles = async () => {
        const res = await fetch('http://localhost:5000/articles');
        const data = await res.json();
        return data;
    };

    const loadArticles = async () => {
        const articleData = await fetchArticles();
        articles.innerHTML = articleData.map(article => `
            <div class="article-card">
                <img src="${article.image}" alt="${article.title}">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
            </div>
        `).join('');
    };

    loadArticles();
});
