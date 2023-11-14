const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = "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";

app.post("/TweetGPT", async (req, res) => {
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
          content: "can you give me 10 made up tweets by elon musk",
        },
      ],
      max_tokens: 100,
    }),
  };
  try {
    const response = await fetch(
      "\n" + "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log("Your server is runnign on port " + PORT));
