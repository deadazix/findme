import React from "react";
import classes from "./BottonStart.module.css";
import nonUpdateStateController from "../../stateController/stateController";
import { blocksActions } from "../../redux/slices/blocksSlice";
import find from "../../redux/find";
import {store}  from '../../redux/store'

interface ButtonStartFace {
  children: React.ReactNode;
  type: "button" | "submit";
  className: string;
}
const BottonStart: React.FC<ButtonStartFace> = (props) => {
  const startHandler = () => {
    find()
    // console.log(store.dispatch(blocksActions.changeBlockStateById({id:1,newState:'obstacle'})))
  };
  //   RETURN
  return (
    <button
      onClick={startHandler}
      type={props.type}
      
      className={`${classes["button--start"]} ${props.className}`}
    >
      {props.children}
      
    </button>
  );
};

export default BottonStart;
