import { ToolType } from "../models/types";
class NonUpdateStateController {
  public toolState: ToolType;
  public startIndex:undefined | number
  public homeIndex: undefined | number
  public obstacleIndexes : number[]= []

  private static instance: NonUpdateStateController;
  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new NonUpdateStateController('start');
      return this.instance;
    }
  }
  private constructor(initToolState: ToolType) {
    this.toolState = initToolState;
  }
}
const nonUpdateStateController =  NonUpdateStateController.getInstance();
export default  nonUpdateStateController
