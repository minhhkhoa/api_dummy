"use client";

import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Button } from "antd";

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const limit = 20;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter(); //-Thêm useRouter() để thay đổi URL
  const currentPage =
    Math.ceil(Number(searchParams.get("skip") ?? "0") / limit) || 1;

  // Hàm tạo URL mới với pageNumber
  const createPageURL = (pageNumber: number) => {
    return `${pathname}?limit=${limit}&skip=${limit * pageNumber}`;
  };

  // Xử lý khi nhấn vào nút phân trang
  const handlePageChange = (pageNumber: number) => {
    const newURL = createPageURL(pageNumber);
    router.push(newURL); // 👉 Cập nhật URL
  };

  return (
    <>
      {totalPages > 0 && (
        <div className="flex justify-center gap-4 mt-8">
          {[...Array(Math.ceil(totalPages / limit))].map((_, index) => (
            <Button
              key={index}
              type={(index + 1) === currentPage ? "primary" : "default"}
              onClick={() => handlePageChange(index + 1)}
            >
              {(index + 1)}
            </Button>
          ))}
        </div>
      )}
    </>
  );
};

export default Pagination;
