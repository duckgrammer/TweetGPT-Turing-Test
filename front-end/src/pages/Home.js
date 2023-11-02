import { Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const Home = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/feed`;
    navigate(path);
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      <Title>Turing Twest</Title>
      <Button block size="large" onClick={routeChange}>
        Elon Musk 🚀
      </Button>
      <Button block size="large" onClick={routeChange}>
        Kanye West 🎤
      </Button>
      <Button block size="large" onClick={routeChange}>
        Donald Trump ✈️
      </Button>
      <Button type="primary" block size="large" onClick={routeChange}>
        FRENZY 🔥🔥🔥
      </Button>
    </div>
  );
};

export default Home;
