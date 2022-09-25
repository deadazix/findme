import { store } from "./store";
import { blocksActions } from "./slices/blocksSlice";
import { getNextForOneIndex } from "../utils/getNextForOneIndex";
import { DistanceType } from "./slices/uiSLice";
import { getNextLayer } from "../utils/getNextLayer";
import { uiActions } from "./slices/uiSLice";
import nonUpdateStateController from "../stateController/stateController";

const promise = (s: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, s * 1000);
  });
const find = async () => {
  let dist:DistanceType = 0
  const startIndex = nonUpdateStateController.startIndex;
  const homeIndex = nonUpdateStateController.homeIndex;
  const columnCount = store.getState().ui.dimention.columnsCount;
  const rowCount = store.getState().ui.dimention.rowsCount;
  console.log(startIndex);
  console.log(homeIndex);
  // CHECK HOME AND START INDEX ARE SPECIFIED
  if (!startIndex || !homeIndex) return;
  let currentLayerIndex: Set<number> = new Set([startIndex]);

  while (true) {
    
    let NextIsAllowed = true;
    let nextLayerIndexFilteredEdge = getNextLayer(
      currentLayerIndex,
      columnCount,
      rowCount,
      getNextForOneIndex
    );

    const nextLayerIndexFilteredEdgeArr:number[] = []
    nextLayerIndexFilteredEdge.forEach(index => nextLayerIndexFilteredEdgeArr.push(index))
    nextLayerIndexFilteredEdge.forEach(async (index) => {
      if (
        !(store.getState().blocks[index].blockState === "non-active") &&
        !(store.getState().blocks[index].blockState === "home")
      ) {
        nextLayerIndexFilteredEdge.delete(index);
        return;
      }
      if (nextLayerIndexFilteredEdgeArr.includes(homeIndex)) {
        console.log("found");
        NextIsAllowed = false;
        return
      }

      store.dispatch(
        blocksActions.changeBlockStateById({ id: index, newState: 'active' })
      );
    });

    dist++
    currentLayerIndex = nextLayerIndexFilteredEdge;
    if (!NextIsAllowed) {
      store.dispatch(
        blocksActions.changeBlockStateById({ id: homeIndex, newState: 'start'})
      );
      store.dispatch(
        uiActions.setDistance(dist)

      )

        break
    }
    await promise(1);
  }
};

export default find;
