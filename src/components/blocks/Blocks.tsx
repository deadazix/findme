import React,{useState} from "react";
import Block from "./Block";
import classes from "./Blocks.module.css";
import { blocksActions } from "../../redux/slices/blocksSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { ToolType } from "../../models/types";

const Blocks = () => {
 
  const dispatch = useAppDispatch();
  const { rowsCount, columnsCount } = useAppSelector(
    (state) => state.ui.dimention
  );
  const blocks = [];
  for (let i = 1; i <= rowsCount * columnsCount; i++) {
    blocks.push(i);
  }
  const onClearHandler = (state: ToolType) => {};

  return (
    <section className={classes.blocks}>
      {blocks.map((id) => {
        dispatch(blocksActions.addBlockById(id));
        return <Block onClear={onClearHandler} key={id} id={id} />;
      })}
    </section>
  );
};

export default Blocks;
