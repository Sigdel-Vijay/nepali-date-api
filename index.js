const express = require('express');
const NepaliDate = require('nepali-date');
const app = express();
const PORT = 3000;

app.get('/nepali-date', (req, res) => {
  const nepaliDate = new NepaliDate();
  const formattedDate = nepaliDate.format('DD MMMM YYYY'); // e.g. "9 Ashadh 2082"
  res.json({ date: formattedDate });
});

app.listen(PORT, () => {
  console.log(`Nepali date API running on http://localhost:${PORT}`);
});
