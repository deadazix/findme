import { ToolType } from "../models/types";
export const GetToolSymbol = (toolType: ToolType) => {
  const symbolsObj = {
    start: "S",
    obstacle: "O",
    home: "H",
  } as const;
  return symbolsObj[toolType];
};