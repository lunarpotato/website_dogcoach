"use client";

import { useRouter } from "next/navigation";
import React from "react";

/**
 * Renders the Logo component.
 *
 * @param _url  The URL to navigate to on click.
 * @param _className  Additional class names.
 * @param _src  Source path for the image.
 * @param _width  Width of the logo (optional).
 * @param _height  Height of the logo (optional).
 * @param _alt  Alternative text for the image.
 * @returns Returns an img-html tag
 */
export default function Logo({
  _url,
  _className = "",
  _src,
  _width = 50,
  _height = 50,
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
