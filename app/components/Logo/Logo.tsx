"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Logo({
  _url,
  _className = "",
  _src,
  _width = 55,
  _height = 55,
  _alt,
}: {
  _url: string;
  _className: string;
  _src: string;
  _width?: number;
  _height?: number;
  _alt: string;
}) {
  const router = useRouter();

  return (
    <img
      onClick={() => router.push(_url)}
      className={_className}
      width={_width}
      height={_height}
      src={_src}
      alt=""
    />
  );
}

{
  /* <li className= {Style["logo"]}>
<img width={55} height={55} src="../img/Logo.svg" ></img>  
</li> */
}
