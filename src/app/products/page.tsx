import ProductIndex from "./product";
import Pagination from "@/components/pagination/Pagination";
import { Suspense } from "react";
import CardProductSkeleton from "./CardProductSkeleton";
import { ProductType } from "../Redux/store/features/productSlice";
import { sendRequest } from "@/utils/api";

// Định nghĩa kiểu cho query
export interface IQueryParams {
  q?: string; // Từ khóa tìm kiếm (có thể không có)
  limit?: string; // Giới hạn sản phẩm mỗi trang (chuỗi vì lấy từ URL)
  skip?: string; // Vị trí bắt đầu (chuỗi vì lấy từ URL)
}

//-Các thành phần trang chấp nhận một thuộc tính có tên làsearchParams
export default async function ProductPage(props: {
  searchParams?: Promise<IQueryParams>;
}) {
  const searchParams = await props.searchParams;
  const query: IQueryParams = searchParams || {};

  //- lấy ra toàn bộ sản phẩm(lần đầu) với query
  const fetchProductsPages: IBackendRes<ProductType> = await sendRequest({
    url: "https://dummyjson.com/products",
    method: "GET",
    queryParams: {
      q: query,
    },
  });

  const totalPages: number = fetchProductsPages.total;

  return (
    <>
      <Suspense key={query?.q} fallback={<CardProductSkeleton />}>
        <ProductIndex query={query} />
      </Suspense>

      <Pagination totalPages={totalPages} />
    </>
  );
}
