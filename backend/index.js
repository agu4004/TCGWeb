const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Placeholder backend running');
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
