const express = require('express');
const cors = require('cors');
const marked = require('marked'); // Markdown to HTML converter

const app = express();
const port = 5001;

app.use(cors()); // Enable CORS to allow requests from the React frontend

// Endpoint to convert markdown to HTML
app.post('/convert', express.text(), (req, res) => {
  const markdownText = req.body;
  const html = marked(markdownText);
  res.json({ html });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
