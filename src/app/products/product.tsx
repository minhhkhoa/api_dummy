"use client";
import { useState } from "react";
import CardProduct from "@/components/CardProduct/CardProduct";
import { Col, Row, Button } from "antd";
import { ProductType } from "../Redux/store/features/productSlice";
import { sendRequest } from "@/utils/api";

interface ProductIndexProps {
  data: ProductType[];
  totalPages: number;
}

export default function ProductIndex({ data, totalPages }: ProductIndexProps) {
  const [products, setProducts] = useState<ProductType[]>(data);
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 20;

  // Hàm chuyển trang
  const handlePageChange = async (page: number) => {
    const skip = page * limit;
    const res = await sendRequest<IBackendRes<ProductType>>({
      url: "https://dummyjson.com/products",
      method: "GET",
      queryParams: {
        limit: limit,
        skip: skip,
      },
    });

    setProducts(res.products || []);
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Danh sách sản phẩm */}
      <Row gutter={[20, 20]} className="py-5 flex justify-center">
        {products.map((item: ProductType) => (
          <Col key={item.id}>
            <CardProduct product={item} />
          </Col>
        ))}
      </Row>

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index}
              type={index === currentPage ? "primary" : "default"}
              onClick={() => handlePageChange(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
