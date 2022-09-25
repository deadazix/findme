import React from "react";
import classes from "./Block.module.css";
import { blocksActions } from "../../redux/slices/blocksSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import nonUpdateStateController from "../../stateController/stateController";
import { BlockFace } from "../../models/interfaces";
import { validateClickedChangeState } from "../../validation/validateBlockChangeState";
import { never_used } from "immer/dist/internal";

const Block: React.FC<BlockFace> = (props) => {
  const dispatch = useAppDispatch();
  const blockState = useAppSelector(
    (state) => state.blocks[props.id].blockState
  );

  // Handlers
  const onClickHandler = () => {
    const toolState = nonUpdateStateController.toolState;
    const startIndex = nonUpdateStateController.startIndex;
    const homeIndex = nonUpdateStateController.homeIndex;
    const obstaclesIndex = nonUpdateStateController.obstacleIndexes;
    const newIndex = props.id;
    // STOP FROM OVERLAPPING
    const changeStateIsValid = validateClickedChangeState(
      toolState,
      startIndex,
      homeIndex,
      obstaclesIndex,
      newIndex
    );
    if (!changeStateIsValid) return;

    // CLEAR START OR HOME INDEX
    if (startIndex && toolState === "start") {
      dispatch(
        blocksActions.changeBlockStateById({
          id: startIndex,
          newState: "non-active",
        })
      );
    }
    if (homeIndex && toolState === "home") {
      dispatch(
        blocksActions.changeBlockStateById({
          id: homeIndex,
          newState: "non-active",
        })
      );
    }
    // ADDING NEW STATE
    if (toolState === "home") nonUpdateStateController.homeIndex = newIndex;
    if (toolState === "start") nonUpdateStateController.startIndex = newIndex;
    if (
      toolState === "obstacle" &&
      !obstaclesIndex.find((index) => index === newIndex)
    ) {
      nonUpdateStateController.obstacleIndexes.push(newIndex);
    }

    // CHANGE BLOCK STATE
    dispatch(
      blocksActions.changeBlockStateById({
        id: props.id,
        newState: toolState,
      })
    );
  };
  // RETURNED COMPONENT
  return (
    <span
      onClick={onClickHandler}
      className={`${classes.block} ${classes[blockState]}`}
    ></span>
  );
};

export default React.memo(Block);
