import React from "react";

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>header</h1>
      </header>
      <div>{children}</div>
      <footer>
        <h1>footer</h1>
      </footer>
    </>
  );
}

export default Layout;
