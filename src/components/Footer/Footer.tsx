"use client";

import { Col, Row, Divider } from "antd";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black-500 to-black-600 text-black py-8">
      <Row className="px-20">
        {/* Footer Left - Brand & Description */}
        <Col span={8}>
          <h2 className="text-lg font-semibold mb-4">Nobody</h2>
          <p className="text-black-300 text-sm leading-relaxed">
            Nobody là nơi cung cấp những sản phẩm và thông tin chất lượng cao,
            giúp bạn khám phá thế giới theo cách riêng của mình.
          </p>
        </Col>

        {/* Footer Center - Quick Links */}
        <Col span={8}>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col">
            <a>FaceBeek</a>
            <a>Zola</a>
            <a>Instagram</a>
          </div>
        </Col>

        {/* Footer Right - Contact Info */}
        <Col span={8}>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="text-black-300 text-sm flex flex-col gap-2">
            <p>Email: support@nobody.com</p>
            <p>Phone: +84 123 456 789</p>
            <p>Address: 123 Street, Hanoi, Vietnam</p>
          </div>
        </Col>
      </Row>

      {/* Divider */}
      <Divider className="bg-gray-600 my-6" />

      {/* Copyright */}
      <Row className="px-20">
        <Col span={24} className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nobody. All rights reserved.
          </p>
        </Col>
      </Row>
    </footer>
  );
}
