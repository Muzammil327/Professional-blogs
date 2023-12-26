"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown, FaAngleUp, FaBars, FaXmark } from "react-icons/fa6";
import Container from "@/src/components/elements/container/page";
import Image from "next/image";

export default function Header() {
  const [dropdown, setDropdown] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const handleDropdownToggle = (index: number) => {
    setDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="header">
      <Container>
        <div className="inner">
          <div className="left">
            <span
              className={`toggle ${open ? "right-2 top-3" : " right-8"}`}
              onClick={() => setOpen(!open)}
            >
              {open ? <FaXmark /> : <FaBars />}
            </span>
            <div className="logo">
              <Link href="/">
                <Image
                  alt="Bindz"
                  src="/logo/logo.png"
                  title="Bindz"
                  height="80"
                  width="267"
                />
              </Link>
            </div>
            <div className="menu">
              <div
                className={` ${open ? "block" : "md:block hidden relative "}`}
              >
                <ul
                  className={`transition-one ${
                    open
                      ? "flex flex-col absolute top-0 ml-4 right-0 h-full w-6/12 pt-5 bg-gray-100 z-30"
                      : "flex gap-5 relative"
                  }`}
                >
                  {data.map((data: any, index) => (
                    <li key={data.id} className="relative">
                      {data.children ? (
                        <>
                          <span
                            className={`${
                              open
                                ? "py-2 flex items-start justify-start"
                                : "t1 font-bold hover:t2 c gap-1 cursor-pointer"
                            }`}
                            onClick={() => handleDropdownToggle(index)}
                          >
                            {data.title}{" "}
                            <span>
                              {dropdown === index ? (
                                <FaAngleUp />
                              ) : (
                                <FaAngleDown />
                              )}
                            </span>
                          </span>
                          {dropdown === index ? (
                            <>
                              <ul className="absolute top-10 w-48 py-3 bg-slate-100 z-20 flex gap-3 flex-col">
                                {data.children.map((data: any) => (
                                  <li className="has-sub" key={data.id}>
                                    <a href="#" className="py-5">
                                      {data.title}{" "}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : null}
                        </>
                      ) : (
                        <>
                          <a
                            href={`{data.link}`}
                            className={`${
                              open
                                ? "p-3 flex items-start justify-start border-b-2 border-solid border-gray-300 transition-all hover:border-gray-200"
                                : "t1 font-bold hover:t2 c gap-1 cursor-pointer"
                            }`}
                          >
                            {data.title}
                          </a>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

const data = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Catgeory",
    link: "/catgeory",
  },
  {
    id: 3,
    title: "About Us",
    link: "/documentation",
  },
  {
    id: 3,
    title: "Contact Us",
    link: "/documentation",
  },
  {
    id: 5,
    title: "Documentation",
    link: "/contact-us",
    // children: [
    //   {
    //     id: 1,
    //     title: "Menu 1",
    //     link: "/menu-1",
    //   },
    // ],
  },
];
