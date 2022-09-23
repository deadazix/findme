import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import classes from "./Tool.module.css";
import { uiActions } from "../../redux/slices/uiSLice";
import { ToolType } from "../../models/types";

const TYPE_TO_TOOL_SYMBOL = (toolType: ToolType) => {
  const symbolsObj = {
    start: "S",
    obstacle: "O",
    home: "H",
  } as const;
  return symbolsObj[toolType];
};

interface ToolFace {
  type: ToolType;
}
const Tool: React.FC<ToolFace> = (props) => {
  const curretTool = useAppSelector((state) => state.ui.ToolsState);
  const toolClass = curretTool === props.type ? classes["tool--active"] : "";
  const dispatch = useAppDispatch()
  const onClickHandler = ()=>{
    dispatch(uiActions.changeToolsState(props.type))

  }

  return (
    <li onClick={onClickHandler} className={`${classes.tool} ${toolClass}`}>
      {TYPE_TO_TOOL_SYMBOL(props.type)}
    </li>
  );
};

export default Tool;
