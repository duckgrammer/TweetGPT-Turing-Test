import React, { useEffect, useState } from "react";
import { Avatar, Row, Col, Typography, Radio } from "antd";
import axios from "axios";
const { Paragraph } = Typography;

const Tweet = ({ name, username, content, real, changeTarget, uid, image }) => {
  const [value1, setValue1] = useState(null);
  const plainOptions = ["AI 🤖", "Real 👨🏻"];

  useEffect(() => {
    setValue1(null);
  }, [changeTarget]);

  const onChange1 = async (e) => {
    const ans = e.target.value;
    setValue1(ans);
    const data = {
      uid: uid,
      tweeter: name,
      content: content,
      answer_key: real ? "Real 👨🏻" : "AI 🤖",
      user_answer: ans,
      created: new Date(),
    };

    await axios
      .post(
        "https://sheet.best/api/sheets/2c2af8f5-7221-4a07-bb0e-045e2e227622",
        data
      )
      .then((response) => {
        console.log(response);
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
        <Avatar
          style={{ width: "110px", height: "110px", margin: "20px" }}
          src={image}
        />
      </Col>
      <Col flex="auto" style={{ paddingTop: "35px" }}>
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
          size={"large"}
        />
      </Col>
    </Row>
  );
};

export default Tweet;
