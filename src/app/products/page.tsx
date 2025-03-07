"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store/store";
import { ProductType, setProducts } from "../Redux/store/features/productSlice";
import CardProduct from "@/components/CardProduct/CardProduct";
import { Col, Row } from "antd";

export default function ProductPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => dispatch(setProducts(result.products)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const products = useSelector((state: RootState) => state.products.items);
  return (
    <div className="">
      <Row gutter={[20, 20]} className="py-5 flex justify-center">
        {products.map((item: ProductType) => (
          <Col key={item.id}>
            <CardProduct product={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
