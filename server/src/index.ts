import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World 1234");
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
