import ProductIndex from "./product";
import Pagination from "@/components/pagination/Pagination";
import { Suspense } from "react";
import CardProductSkeleton from "./CardProductSkeleton";

export default async function ProductPage(props: {
  searchParams?: Promise<{
    //-Các thành phần trang chấp nhận một thuộc tính có tên làsearchParams
    q?: string;
    page?: string;
  }>;
}) {
    const searchParams = await props.searchParams;
    const query: string = searchParams?.q || "";
    const currentPage: number = Number(searchParams?.page) || 1;

  return (
    <>
      <Suspense key={query + currentPage} fallback={<CardProductSkeleton />}>
        <ProductIndex query={query} currentPage={currentPage} />
      </Suspense>

      <Pagination />
    </>
  );
}
