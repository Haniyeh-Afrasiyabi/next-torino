import React from "react";
import Footer from "../modules/Footer";
import Header from "../modules/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
