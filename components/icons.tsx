import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 30,
  width,
  height,
  ...props
}) => (
  <img
    src="/icon.png"
    alt="Logo"
    height={size || height}
    width={size || width}
    {...(props as any)}
  />
);