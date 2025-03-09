import { sendRequest } from "@/utils/api";
import ProductIndex from "./product";
import { ProductType } from "../Redux/store/features/productSlice";

export default async function ProductPage() {
  const limit = 20;

  // Gọi API lấy dữ liệu trang đầu tiên
  const res = await sendRequest<IBackendRes<ProductType>>({
    url: "https://dummyjson.com/products",
    method: "GET",
    queryParams: {
      limit: limit,
      skip: 0,
    },
  });

  // Tính tổng số trang
  const totalPages = Math.ceil(res.total / limit);
  const listProducts = res.products || [];

  return <ProductIndex data={listProducts} totalPages={totalPages} />;
}
