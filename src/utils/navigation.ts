import React from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToTopOnPageChange() {
  const { key } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [key]);
}
