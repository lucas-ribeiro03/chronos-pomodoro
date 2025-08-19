import type { ComponentProps } from "react";
import { Link } from "react-router";

type RouterLinkProps = {
  href: string;
  children: React.ReactNode;
} & ComponentProps<"a">;

export const RouterLink = ({ href, children, ...a }: RouterLinkProps) => {
  return (
    <Link to={href} {...a}>
      {children}
    </Link>
  );
};
