import { ReactNode } from "react";
import Footer from "./components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      
      {children}
      <Footer />
    </div>
  );
}
