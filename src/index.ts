import express from "express"

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World !!");
})

app.get("/product", (req, res) => {
  res.send("This is Product Page");
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
