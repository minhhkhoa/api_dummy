
// import { useState } from "react";
import CardProduct from "@/components/CardProduct/CardProduct";
import { Col, Row } from "antd";
import { ProductType } from "../Redux/store/features/productSlice";
import { sendRequest } from "@/utils/api";
// import { sendRequest } from "@/utils/api";

interface ProductIndexProps {
  query: string;
  currentPage: number;
}

export default async function ProductIndex({ query, currentPage }: ProductIndexProps) {

  const datas: IBackendRes<ProductType> = await sendRequest({
    url: "https://dummyjson.com/products",
    method: "GET",
    queryParams: {
      q: query
    },
  });

  const isEmpty = datas?.products?.length == 0;

  if (isEmpty)
    return <p className="font-bold text-center text-6xl">No Result</p>;

  return (
    <div>
      {/* Danh sách sản phẩm */}
      <Row gutter={[30, 30]} className="py-5 flex justify-center">
        {datas?.products?.map((item: ProductType) => (
          <Col key={item.id}>
            <CardProduct product={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
