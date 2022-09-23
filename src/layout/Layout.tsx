import React from "react";
import Navigation from "../components/navigation/Navigation";
import Toolbar from "../components/toolbar/Toolbar";
import Blocks from "../components/blocks/Blocks";
const Layout = () => {
  return (
    <React.Fragment>
      <header>
        <Navigation />
      </header>
      <main>
        <Toolbar />
        <Blocks/>
      </main>
      <footer></footer>
    </React.Fragment>
  );
};

export default Layout;
