import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Row, Col, Typography, Radio } from "antd";
const { Paragraph } = Typography;

const Tweet = ({ name, username, content }) => {
  const [value1, setValue1] = useState(null);
  const plainOptions = ["Robot 🤖", "Hooman 👨🏻"];

  const onChange1 = (value) => {
    setValue1(value.target.value);
  };

  return (
    <Row
      style={{ borderBottom: "1px solid #eee", padding: "20px", gap: "20px" }}
    >
      <Col>
        <Avatar size="large" icon={<UserOutlined />} />
      </Col>
      <Col>
        <Paragraph>
          {name} <span style={{ color: "#bbb" }}>@{username}</span>
        </Paragraph>
        <Paragraph>{content}</Paragraph>
        <Radio.Group
          options={plainOptions}
          onChange={onChange1}
          value={value1}
          optionType="button"
        />
      </Col>
    </Row>
  );
};

export default Tweet;
