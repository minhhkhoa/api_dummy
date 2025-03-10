"use client";

import React from "react";
import { Card, Skeleton, Button, Row, Col } from "antd";
import { StarFilled } from "@ant-design/icons";

const CardProductSkeleton: React.FC = () => {
  return (
    <Row gutter={[30, 30]} className="py-5 flex justify-center">
      {[1, 2, 3, 4, 5].map((item) => (
        <Col key={item}>
          <Card
            hoverable
            cover={<Skeleton.Image style={{ width: 300, height: 300 }} />}
            style={{ width: 300, borderRadius: 12, overflow: "hidden" }}
          >
            {/* Skeleton cho Title */}
            <Skeleton
              active
              paragraph={{ rows: 0 }} // Không cần paragraph ở đây
              title={{ width: "80%" }} // Title ngắn hơn một chút
              style={{ marginBottom: 8 }}
            />

            {/* Skeleton cho Description */}
            <Skeleton
              active
              paragraph={{ rows: 1, width: "90%" }}
              title={false} // Không cần title ở đây
            />

            {/* Skeleton cho Price section */}
            <div
              style={{
                margin: "12px 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Skeleton
                active
                paragraph={{ rows: 0 }}
                title={{ width: 60 }}
                style={{ marginRight: 8 }}
              />
              <Skeleton active paragraph={{ rows: 0 }} title={{ width: 50 }} />
            </div>

            {/* Skeleton cho Rating và Button */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <StarFilled style={{ color: "#faad14" }} />
                <Skeleton
                  active
                  paragraph={{ rows: 0 }}
                  title={{ width: 30 }}
                  style={{ marginLeft: 4 }}
                />
              </div>
              <Button type="primary" shape="round" size="middle" loading>
                Buy Now
              </Button>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardProductSkeleton;
