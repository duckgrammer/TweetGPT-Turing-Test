const PORT = 8000;
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

require("dotenv").config();
const API_KEY = process.env.API_KEY;

app.post("/TweetGPT/:author", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo-0301",
      messages: [
        {
          role: "user",
          content: `give me ten made up tweets in the style of ${req.params.author}`,
        },
      ],
      max_tokens: 100,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log("Your server is runnign on port " + PORT));
