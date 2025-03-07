import React from 'react'
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearch } from "@/app/Redux/store/features/productSlice";

const Search = Input.Search;


export default function SearchProduct() {
    const dispatch = useDispatch();
    const onSearch = (value: string) => {
      dispatch(setSearch(value));
    };
  return (
    <>
      <Search
        placeholder="Search for something..."
        onSearch={onSearch}
        className="rounded-lg overflow-hidden hidden sm:block"
        style={{ width: 350 }}
      />
    </>
  );
}
