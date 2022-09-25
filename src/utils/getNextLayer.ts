
export const getNextLayer = (
  currentLayerIndex: Set<number>,
  columnCount: number,
  rowCount: number,
  getNextForOneIndexFn: Function
) => {
  const nextLayerIndex: number[] = [];
  currentLayerIndex.forEach((index) => {
    nextLayerIndex.push(...getNextForOneIndexFn(index, columnCount, rowCount));
  });
  return new Set(nextLayerIndex);
};
