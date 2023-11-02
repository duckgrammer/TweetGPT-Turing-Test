import { Typography, Col, Row, Button } from "antd";
import { useNavigate } from "react-router-dom";
import Tweet from "../components/Tweet";
const { Paragraph } = Typography;

const Feed = () => {
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
  return (
    <div style={{ maxWidth: "500px" }}>
      <div
        style={{
          textAlign: "center",
          paddingInline: "20px",
          paddingBlock: "5px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Paragraph strong>
          Tap the profile picture to mark your answers
        </Paragraph>
        <Row>
          <Col span={12}>🤖 x0</Col>
          <Col span={12}>👨🏻 x0</Col>
        </Row>
      </div>
      <Tweet name="Elon Musk" username="ElonMusk" content="I like cats" />
      <Tweet name="Elon Musk" username="ElonMusk" content="I like dogs" />

      <div style={{ padding: "12px" }}>
        <Button type="primary" block size="large">
          Submit
        </Button>
      </div>
      <button id="submit" onClick={getTweet}>
        New Tweet
      </button>
    </div>
  );
};

export default Feed;
