import * as React from "react";
import Image, { type ImageProps } from "next/image";

type LogoProps = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  size?: number;
  width?: number;
  height?: number;
};

export const Logo: React.FC<LogoProps> = ({
  size = 30,
  width,
  height,
  ...props
}) => (
  <Image
    src="/icon.png"
    alt="Logo"
    height={size || height}
    width={size || width}
    {...props}
  />
);