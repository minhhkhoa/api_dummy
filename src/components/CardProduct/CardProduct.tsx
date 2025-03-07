"use client"

import React from "react";
import { Card, Typography, Button } from "antd";
import { StarFilled } from "@ant-design/icons";
import { ProductType } from "../../app/Redux/store/features/productSlice";
import Image from "next/image";

const { Title, Text } = Typography;

interface CardProductProps {
  product: ProductType;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  return (
    <Card
      hoverable
      cover={
        <Image
          alt={product.title}
          src={product.thumbnail}
          width={300}
          height={300} 
          style={{ objectFit: "cover" }}
        />
      }
      style={{ width: 300, borderRadius: 12, overflow: "hidden" }}
    >
      <Title level={4} style={{ marginBottom: 8 }}>
        {product.title}
      </Title>

      <Text type="secondary" ellipsis={{ tooltip: product.description }}>
        {product.description}
      </Text>

      <div style={{ margin: "12px 0", display: "flex", alignItems: "center" }}>
        <Text strong style={{ fontSize: "18px", color: "#fa541c" }}>
          ${product.price.toFixed(2)}
        </Text>
        {product.discountPercentage > 0 && (
          <Text delete style={{ marginLeft: 8, color: "#8c8c8c" }}>
            $
            {(
              (product.price * 100) /
              (100 - product.discountPercentage)
            ).toFixed(2)}
          </Text>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>
          <StarFilled style={{ color: "#faad14" }} />{" "}
          {product.rating.toFixed(1)}
        </Text>

        <Button type="primary" shape="round" size="middle">
          Buy Now
        </Button>
      </div>
    </Card>
  );
};

export default CardProduct;
