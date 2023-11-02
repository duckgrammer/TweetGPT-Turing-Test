import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Row, Col, Typography } from "antd";
const { Paragraph } = Typography;

const Tweet = ({ name, username, content }) => {
  return (
    <Row
      style={{ borderBottom: "1px solid #ccc", padding: "20px", gap: "20px" }}
    >
      <Col>
        <Avatar size="large" icon={<UserOutlined />} />
      </Col>
      <Col>
        <Paragraph>
          {name} <span style={{ color: "#bbb" }}>@{username}</span>
        </Paragraph>
        <Paragraph>{content}</Paragraph>
      </Col>
    </Row>
  );
};

export default Tweet;
