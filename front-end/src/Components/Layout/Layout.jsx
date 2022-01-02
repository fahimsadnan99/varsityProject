import React, { useEffect } from "react";

const Layout = ({ title = "title", className, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};

export default Layout;
