import CardProduct from "@/components/CardProduct/CardProduct";
import { Col, Row } from "antd";
import { ProductType } from "../Redux/store/features/productSlice";
import { sendRequest } from "@/utils/api";
import { IQueryParams } from "./page";
import { skip } from "node:test";
// import { sendRequest } from "@/utils/api";

export default async function ProductIndex({ query }: { query: IQueryParams }) {
  console.log("query: ", query);

  const datas: IBackendRes<ProductType> = await sendRequest({
    url: "https://dummyjson.com/products",
    method: "GET",
    queryParams: {
      q: query.q,
      limit: query.limit,
      skip: query.skip
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
