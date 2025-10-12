import { ReactNode } from "react";
import { Nav } from "./components/Nav";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
