"use client";

import { Button, Col, Row, Typography } from "antd";
import React from "react";
import Link from "next/link";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <section className="py-16 px-20">
        <Row justify="center" align="middle" className="text-center">
          <Col span={24}>
            {/* Hero Section */}
            <Title
              level={1}
              className="text-4xl font-extrabold text-gray-800 mb-4"
            >
              Welcome to Nobody
            </Title>
            <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover a world of unique products, insightful blogs, and
              engaging posts. Nobody is here to bring you the best experience
              tailored just for you.
            </Paragraph>
            <div className="flex justify-center gap-4">
              <Link href="/products">
                <Button
                  type="primary"
                  size="large"
                  className="bg-black-500 hover:bg-black-600 transition duration-300"
                >
                  Explore Products
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  size="large"
                  className="border-black-500 text-black-500 hover:text-black-600 hover:border-black-600 transition duration-300"
                >
                  Read Our Blog
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

        {/* Features Section */}
        <Row gutter={[32, 32]} className="mt-16">
          {[
            {
              title: "Premium Products",
              description:
                "Explore our curated selection of high-quality products.",
            },
            {
              title: "Insightful Blogs",
              description:
                "Stay informed with our latest articles and insights.",
            },
            {
              title: "Community Posts",
              description:
                "Join the conversation with posts from our community.",
            },
          ].map((feature, index) => (
            <Col span={8} key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <Title
                  level={3}
                  className="text-xl font-semibold text-gray-800 mb-2"
                >
                  {feature.title}
                </Title>
                <Paragraph className="text-gray-600">
                  {feature.description}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}
