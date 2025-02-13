import React, { HTMLAttributes } from "react";

type IContainerProps = HTMLAttributes<HTMLDivElement>;

export default function ContentContainer({
  children,
  className,
  ...rest
}: IContainerProps) {
  return (
    <div
      {...rest}
      className={`flex w-full h-full justify-start mx-auto px-2 xl:w-5/6 overflow-hidden container 3xl:scale-105 ${className}`}
    >
      {children}
    </div>
  );
}
