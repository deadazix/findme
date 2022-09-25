import React from "react";
import Navigation from "../components/navigation/Navigation";
import Toolbar from "../components/toolbar/Toolbar";
import classes from './Layout.module.css'
import BottonStart from "../components/btns/BottonStart";
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
      <BottonStart type="button" className={classes['button--start']} >start</BottonStart>
      </main>
      <footer></footer>
    </React.Fragment>
  );
};

export default Layout;
