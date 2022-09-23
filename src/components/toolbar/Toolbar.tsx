import React, { useState } from "react";
import classes from "./Toolbar.module.css";
import Tool from "./Tool";
import { ToolType } from "../../models/types";
const Toolbar = () => {
  return (
    <menu className={classes.menu}>
      <ul className={classes["tools-list"]}>
        <Tool
          type='start'
        />
        <Tool
          
          type='obstacle'
          
        />
        <Tool
          type='home'
        />
      </ul>
    </menu>
  );
};

export default Toolbar;
