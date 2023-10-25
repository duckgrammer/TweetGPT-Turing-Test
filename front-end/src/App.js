import { Typography, Button, Menu } from "antd";
import { useEffect, useState } from "react";
import Tweet from "./components/Tweet";
import FakeElon from "./Tweets/fakeElon.json";
import RealElon from "./Tweets/realElon.json";
import FakeTrump from "./Tweets/fakeDonald.json";
import RealTrump from "./Tweets/realDonald.json";
import FakeTaylor from "./Tweets/fakeTaylor.json";
import RealTaylor from "./Tweets/realTaylor.json";
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

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    let tweets = [];
    if (current === "elon") {
      for (let i = 0; i < 5; i++) {
        let j = Math.floor(Math.random() * (FakeElon.length - 1));
        tweets.push({ tweet: FakeElon[j].tweet, real: false });
      }
      for (let i = 0; i < 5; i++) {
        let j = Math.floor(Math.random() * (RealElon.length - 1));
        tweets.push({ tweet: RealElon[j].tweet, real: true });
      }
    } else if (current === "trump") {
      for (let i = 0; i < 5; i++) {
        let j = Math.floor(Math.random() * (FakeTrump.length - 1));
        tweets.push({ tweet: FakeTrump[j].text, real: false });
      }
      for (let i = 0; i < 5; i++) {
        let j = Math.floor(Math.random() * (RealTrump.length - 1));
        tweets.push({ tweet: RealTrump[j].content, real: true });
      }
    } else {
      for (let i = 0; i < 5; i++) {
        let j = Math.floor(Math.random() * (FakeTaylor.length - 1));
        tweets.push({ tweet: FakeTaylor[j].tweet, real: false });
      }
      for (let i = 0; i < 5; i++) {
        let j = Math.floor(Math.random() * (RealTaylor.length - 1));
        tweets.push({ tweet: RealTaylor[j].content, real: true });
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
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <div
        style={{
          maxWidth: "500px",
          position: "fixed",
          width: "100%",
          background: "#eee",
          zIndex: 10,
        }}
      >
        <Title level={2} style={{ paddingLeft: "15px" }}>
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
      <div style={{ paddingTop: "130px" }}>
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
          />
        ))}
      </div>
    </div>
  );
};

export default App;
