const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/keys', (req, res) => {
  res.json({
    ocr: process.env.OCR_KEY,
    openai: process.env.OPENAI_API_KEY
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
