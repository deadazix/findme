import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import classes from "./Tool.module.css";
import { uiActions } from "../../redux/slices/uiSLice";
import { ToolFace } from "../../models/interfaces";
import { GetToolSymbol as TYPE_TO_TOOL_SYMBOL  } from "../../utils/getToolSymbol";
import nonUpdateStateController from "../../stateController/stateController";


const Tool: React.FC<ToolFace> = (props) => {
  const curretTool = useAppSelector((state) => state.ui.ToolsState);
  const dispatch = useAppDispatch()
  // GET CLASS
  const toolClass = curretTool === props.type ? classes["tool--active"] : "";
  // HANDLERS
  const onClickHandler = ()=>{
    dispatch(uiActions.changeToolsState(props.type))
    nonUpdateStateController.toolState = props.type
  }

  return (
    <li onClick={onClickHandler} className={`${classes.tool} ${toolClass}`}>
      {props.type}
    </li>
  );
};

export default Tool;
