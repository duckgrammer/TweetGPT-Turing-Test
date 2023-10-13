import { Typography, Menu } from "antd";
import { useEffect, useState } from "react";
import Tweet from "./components/Tweet";

// Tweet Data Set
import FakeElon from "./Tweets/fakeElon.json";
import RealElon from "./Tweets/realElon.json";
import FakeTrump from "./Tweets/fakeDonald.json";
import RealTrump from "./Tweets/realDonald.json";
import FakeTaylor from "./Tweets/fakeTaylor.json";
import RealTaylor from "./Tweets/realTaylor.json";

// Imagew
import Elon from "./images/elon.jpg";
import Taylor from "./images/taylor.jpg";
import Trump from "./images/trump.jpg";

import "./index.css";

const { Title } = Typography;

const App = () => {
  /*
  const getTweet = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "give me one tweet in the style of elon musk",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await fetch("http://localhost:8000/TweetGPT", options);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
*/
  const [tweetList, setTweetList] = useState([]);
  const [current, setCurrent] = useState("elon");
  const [changeTarget, setChangeTarget] = useState(0);
  const [uid, setUid] = useState(0);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    setUid(Math.floor(Math.random() * 1000000));
  }, []);

  useEffect(() => {
    let tweets = [];
    if (current === "elon") {
      for (let i = 0; i < 5; i++) {
        let j = Math.floor(Math.random() * (FakeElon.length - 1));
        tweets.push({ tweet: FakeElon[j].tweet, real: false });
      }
      for (let i = 0; i < 5; i++) {
        let tweetLen = 0;
        let tweet = "";
        while (
          tweetLen <= 30 ||
          tweet.includes("http") ||
          (tweetLen > 0 &&
            tweet.charAt(0).toLocaleLowerCase() ===
              tweet.charAt(0).toLocaleUpperCase())
        ) {
          let j = Math.floor(Math.random() * (RealElon.length - 1));
          tweet = RealElon[j].tweet.replace(/@\w+/g, "");
          tweetLen = tweet.length;
        }
        tweets.push({
          tweet: tweet,
          real: true,
        });
      }
    } else if (current === "trump") {
      for (let i = 0; i < 5; i++) {
        let j = Math.floor(Math.random() * (FakeTrump.length - 1));
        tweets.push({ tweet: FakeTrump[j].text, real: false });
      }
      for (let i = 0; i < 5; i++) {
        let tweetLen = 0;
        let tweet = "";
        while (
          tweetLen <= 30 ||
          tweet.includes("http") ||
          (tweetLen > 0 &&
            tweet.charAt(0).toLocaleLowerCase() ===
              tweet.charAt(0).toLocaleUpperCase())
        ) {
          let j = Math.floor(Math.random() * (RealTrump.length - 1));
          tweet = RealTrump[j].content.replace(/@\s\w+/g, "");
          tweet = tweet.replace(/@\w+/g, "");
          tweetLen = tweet.length;
        }
        tweets.push({
          tweet: tweet,
          real: true,
        });
      }
    } else {
      for (let i = 0; i < 5; i++) {
        let j = Math.floor(Math.random() * (FakeTaylor.length - 1));
        tweets.push({ tweet: FakeTaylor[j].tweet, real: false });
      }
      for (let i = 0; i < 5; i++) {
        let tweetLen = 0;
        let tweet = "";
        while (
          tweetLen <= 30 ||
          tweet.includes("http") ||
          tweet.includes("@") ||
          (tweetLen > 0 &&
            tweet.charAt(0).toLocaleLowerCase() ===
              tweet.charAt(0).toLocaleUpperCase())
        ) {
          let j = Math.floor(Math.random() * (RealTaylor.length - 1));
          tweet = RealTaylor[j].content;
          tweetLen = tweet.length;
        }
        tweets.push({
          tweet: tweet,
          real: true,
        });
      }
    }
    shuffleArray(tweets);
    setTweetList(tweets);
  }, [current]);

  const onClick = (e) => {
    setCurrent(e.key);
    setChangeTarget(changeTarget + 1);
  };

  const items = [
    {
      label: "Elon Musk",
      key: "elon",
    },
    {
      label: "Donald Trump",
      key: "trump",
    },
    {
      label: "Taylor Swift",
      key: "taylor",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        margin: "auto",
      }}
    >
      <div
        style={{
          position: "fixed",
          width: "100%",
          background: "#eee",
          zIndex: 10,
          maxWidth: "1200px",
        }}
      >
        <Title style={{ paddingLeft: "30px", fontSize: "70px" }}>
          Turing Twest
        </Title>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{ background: "#eee" }}
        />
      </div>
      <div style={{ paddingTop: "220px", width: "100%" }}>
        {tweetList.map((tweet, index) => (
          <Tweet
            key={index}
            name={
              current === "elon"
                ? "Elon Musk"
                : current === "trump"
                ? "Donald Trump"
                : "Taylor Swift"
            }
            username={current}
            content={tweet.tweet}
            real={tweet.real}
            changeTarget={changeTarget}
            uid={uid}
            image={
              current === "elon" ? Elon : current === "trump" ? Trump : Taylor
            }
          />
        ))}
      </div>
    </div>
  );
};

export default App;
