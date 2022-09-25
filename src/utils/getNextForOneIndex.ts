export const getNextForOneIndex = (
  index: number,
  columnCount: number,
  rowCount: number
) => {
  const isInToptEdge: boolean = index <= columnCount;
  const isInBottomtEdge: boolean = index >= columnCount * rowCount - 10;
  const isInLeftEdge: boolean = index % 10 === 1;
  const isInRightEdge: boolean = index % 10 === 0;
  const inValidIndexes: Array<Array<number>> = [];
  const finalListIndexes: number[] = [];
  const topIndexes = [
    index - columnCount - 1,
    index - columnCount,
    index - rowCount + 1,
  ];
  const bottomIndexes = [
    index + columnCount - 1,
    index + columnCount,
    index + rowCount + 1,
  ];
  const leftIndexes = [
    index - 1,
    index + columnCount - 1,
    index - columnCount - 1,
  ];
  const rightIndexes = [
    index + 1,
    index + columnCount + 1,
    index - columnCount + 1,
  ];
  const nextLayerRound = new Set([
    ...topIndexes,
    ...leftIndexes,
    ...bottomIndexes,
    ...rightIndexes,
  ]);

  isInToptEdge && inValidIndexes.push(topIndexes);
  isInBottomtEdge && inValidIndexes.push(bottomIndexes);
  isInLeftEdge && inValidIndexes.push(leftIndexes);
  isInRightEdge && inValidIndexes.push(rightIndexes);

  const inValidIndexesSet = new Set(inValidIndexes.flat());

  inValidIndexesSet.forEach((index) => nextLayerRound.delete(index));
  nextLayerRound.forEach((index) => finalListIndexes.push(index));
  return finalListIndexes;
};
