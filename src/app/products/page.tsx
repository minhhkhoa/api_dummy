'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../Redux/store/store';
import { setProducts } from "../Redux/store/features/productSlice";

export default function ProductPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => dispatch(setProducts(result.products)));
  }, []);
  const products = useSelector((state: RootState) => state.products.items);
  console.log("products: ", products[0]?.thumbnail)
  return (
    <div>ProductPage</div>
  )
}
