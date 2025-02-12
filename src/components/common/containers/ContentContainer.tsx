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
      className={`flex w-full h-full justify-start mx-auto p-0 xl:w-4/5 overflow-hidden container 3xl:scale-105 ${className}`}
    >
      {children}
    </div>
  );
}
