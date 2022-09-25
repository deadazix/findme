import React from "react";
import classes from "./Block.module.css";
import { blocksActions } from "../../redux/slices/blocksSlice";
import useGetToolState from "../../hooks/useGetToolState";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { ToolType } from "../../models/types";
import { MatrixStatusFace } from "./Blocks";
import nonUpdateStateController from "../../stateController/stateController";
const Block: React.FC<{
  id: number;
  onGetMatrixStatus: () => MatrixStatusFace;
}> = (props) => {
  // const getToolState = useGetToolState()
  console.log(props.id);
  const matrixStatus = props.onGetMatrixStatus();
  const blockState = useAppSelector(
    (state) => state.blocks[props.id].blockState
  );

  const dispatch = useAppDispatch();
  const onClickHandler = () => {
    dispatch(
      blocksActions.changeBlockStateById({
        id: props.id,
        newState: nonUpdateStateController.toolState,
      })
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
