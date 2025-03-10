"use client"

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export default function SearchProduct() {
  const searchParams = useSearchParams(); //- hook clg ra thi biet no la cai gi
  const pathName = usePathname(); //- lay ra duong dan hien tai
  const { replace } = useRouter(); //-replacephương thức từ useRouter()

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams); //-URLSearchParamslà một Web API cung cấp các phương thức tiện ích để thao tác các tham số truy vấn URL
    if (value) {
      //- tao chuoi truy van
      params.set("q", value);
    } else {
      params.delete("q");
    }
    replace(`${pathName}?${params.toString()}`); //-cập nhật URL bằng dữ liệu tìm kiếm của người dùng
  };
  return (
    <>
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={"Search ..."}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("q")?.toString()}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
    </>
  );
}
