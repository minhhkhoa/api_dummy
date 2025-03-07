"use client";

import { Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import SearchProduct from "../Search/Search";


export default function Header() {

  return (
    <header className="bg-gradient-to-r from-black-500 to-black-600 shadow-lg p-4">
      <Row className="h-16 items-center px-5 md:px-20" gutter={[8, 8]}>
        {/* header-left */}
        <Col xs={24} sm={12}>
          <div className="flex items-center gap-5 sm:gap-10">
            <h1 className="text-black text-2xl font-extrabold tracking-wide">
              <Link href={"/home"}>Nobody</Link>
            </h1>
            <SearchProduct/>
          </div>
        </Col>

        {/* header-right */}
        <Col xs={24} sm={12}>
          <div className="flex justify-end gap-5 sm:gap-7">
            {[
              { href: "/home", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/blog", label: "Blog" },
              { href: "/post", label: "Posts" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-lg font-medium transition duration-300 hover:text-yellow-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Col>
      </Row>
    </header>
  );
}
