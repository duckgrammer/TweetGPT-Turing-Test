import React, { useEffect, useState } from "react";
import { Avatar, Row, Col, Typography, Radio } from "antd";
const { Paragraph } = Typography;

const Tweet = ({ name, username, content, real, changeTarget, uid, image }) => {
  const [value1, setValue1] = useState(null);
  const plainOptions = ["AI 🤖", "Real 👨🏻"];

  useEffect(() => {
    setValue1(null);
  }, [changeTarget]);

  const onChange1 = (value) => {
    const ans = value.target.value;
    setValue1(ans);
    console.log({
      uid: uid,
      tweeter: name,
      real: real,
      correct: (real && ans === "Real 👨🏻") || (!real && ans === "AI 🤖"),
    });
  };

  return (
    <Row
      wrap={false}
      style={{
        borderBottom: "1px solid #eee",
        padding: "20px",
        gap: "20px",
        background:
          value1 === null
            ? "#fff"
            : (real && value1 === "Real 👨🏻") || (!real && value1 === "AI 🤖")
            ? "#ccffcc"
            : "#ffcccc",
      }}
    >
      <Col flex="none">
        <Avatar size="large" src={image} />
      </Col>
      <Col flex="auto">
        <Paragraph>
          {name} <span style={{ color: "#bbb" }}>@{username}</span>
        </Paragraph>
        <Paragraph>{content}</Paragraph>
        <Radio.Group
          options={plainOptions}
          onChange={onChange1}
          value={value1}
          optionType="button"
          disabled={value1 !== null}
        />
      </Col>
    </Row>
  );
};

export default Tweet;
