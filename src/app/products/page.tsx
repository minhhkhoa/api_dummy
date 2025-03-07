"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductType,
  setInfoPage,
  setProducts,
} from "../Redux/store/features/productSlice";
import CardProduct from "@/components/CardProduct/CardProduct";
import { Col, Row, Button } from "antd";
import {
  getInfoPage,
  productsRemainingSelector,
} from "../Redux/store/selector";

export default function ProductPage() {
  const dispatch = useDispatch();
  const products = useSelector(productsRemainingSelector);
  const page = useSelector(getInfoPage);

  useEffect(() => {
    fetchProducts(0); // Lấy trang đầu tiên
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hàm fetch dữ liệu theo trang
  const fetchProducts = (skip: number) => {
    fetch(`https://dummyjson.com/products?limit=20&skip=${skip}`)
      .then((res) => res.json())
      .then((result) => {
        const page = {
          total: result.total,
          skip: result.skip,
          limit: result.limit,
        };
        dispatch(setInfoPage(page));
        dispatch(setProducts(result.products));
      });
  };

  // Tính tổng số trang
  const totalPages =  Math.ceil(page.total / page.limit);

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
      {totalPages && (
        <div className="flex justify-center gap-4 mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index}
              type={index === page.skip / page.limit ? "primary" : "default"}
              onClick={() => fetchProducts(index * page.limit)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
