import React from "react";
import classes from "./Block.module.css";
import { blocksActions } from "../../redux/slices/blocksSlice";
import useGetToolState from "../../hooks/useGetToolState";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { clear } from "console";
import { ToolType } from "../../models/types";

const Block: React.FC<{ id: number,onClear:(state:ToolType)=>void }> = (props) => {
  const toolState = useAppSelector((state) => state.ui.ToolsState);
  console.log(props.id);
  const blockState = useAppSelector(
    (state) => state.blocks[props.id].blockState
  );



  const dispatch = useAppDispatch();
  const onClickHandler = () => {
      console.log(blockState)
    dispatch(
      blocksActions.changeBlockStateById({ id: props.id, newState: toolState })
    );
  };

  return (
    <span
      onClick={onClickHandler}
      className={`${classes.block} ${classes[blockState]}`}
    ></span>
  );
};

export default React.memo(Block);
