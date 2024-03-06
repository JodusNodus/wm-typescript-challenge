import { Outlet, useOutlet } from "react-router-dom";
import { Navbar } from "../components";

type MainLayoutProps = {
  children?: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const outlet = useOutlet();

  return (
    <div
      className="flex min-h-full flex-col bg-pampas dark:bg-gray-900"
      data-testid="main"
    >
      <Navbar />
      <div className="flex flex-1 flex-col px-8 py-6 sm:px-4">
        <div className="container mx-auto flex h-full flex-1 flex-col">
          {outlet ? <Outlet /> : children}
        </div>
      </div>
    </div>
  );
};
