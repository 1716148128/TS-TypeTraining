// 递归增加数组元素，判断数组长度跟L想不想等就行了
type ConstructTuple<L extends number,Z extends unknown[] = []> = Z['length'] extends L ? [...Z] : ConstructTuple<L,[...Z,unknown]>