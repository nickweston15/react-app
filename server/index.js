const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Example REST endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Example webhook endpoint
app.post('/api/webhook', (req, res) => {
  console.log('Webhook received:', req.body);
  res.status(200).send('Webhook received');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});