import { ToolType } from "../models/types";
export const validateClickedChangeState = (
  toolState: ToolType,
  startIndex: number | undefined,
  homeIndex: number | undefined,
  obstaclesIndex: number[],
  newIndex: number
) => {
    
  if (toolState === "start" && newIndex === homeIndex) return false;
  if (
    toolState === "start" &&
    obstaclesIndex.find((index) => index === newIndex)
  )
    return false;
  if (toolState === "home" && newIndex === startIndex) return false;
  if (
    toolState === "home" &&
    obstaclesIndex.find((index) => index === newIndex)
  )
    return false;
  if (toolState === "obstacle" && newIndex === homeIndex) return false;

  if (toolState === "obstacle" && newIndex === startIndex) return false;
  return true
};
