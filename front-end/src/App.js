import { Typography, Col, Row, Button, Menu } from "antd";
import { useState } from "react";
import Tweet from "./components/Tweet";
const { Paragraph } = Typography;

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

  const [current, setCurrent] = useState("elon");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
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
          textAlign: "center",
          paddingInline: "20px",
          paddingBlock: "5px",
        }}
      >
        <Paragraph strong>
          Tap the profile picture to mark your answers
        </Paragraph>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
      <Tweet name="Elon Musk" username={current} content="I like cats" />
      <Tweet name="Elon Musk" username={current} content="I like dogs" />

      <div style={{ padding: "12px" }}>
        <Button type="primary" block size="large">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default App;
