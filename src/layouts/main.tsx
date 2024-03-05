import { Outlet, useOutlet } from "react-router-dom";
import { Navbar } from "../components";

type MainLayoutProps = {
  children?: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const outlet = useOutlet();

  return (
    <div
      className="flex h-full flex-col bg-pampas dark:bg-gray-900"
      data-testid="main"
    >
      <Navbar />
      <div className="flex-1 px-8 py-6 sm:px-4">
        <div className="container mx-auto h-full">
          {outlet ? <Outlet /> : children}
        </div>
      </div>
    </div>
  );
};
