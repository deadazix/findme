import React from "react";
import Navigation from "../components/navigation/Navigation";
import Toolbar from "../components/toolbar/Toolbar";
const Layout = () => {
  return (
    <React.Fragment>
      <header>
        <Navigation />
      </header>
      <main>
        <Toolbar />
      </main>
      <footer></footer>
    </React.Fragment>
  );
};

export default Layout;
