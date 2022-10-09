// 递归用 | 符号变成联合类型就行了
type StringToUnion<T extends string> = T extends '' ? never :  T extends `${infer F}${infer R}` ? F | StringToUnion<R> :  T

// 方法2：递归取值放数组里，最后  xxx[number] 遍历出来得到联合类型 
// type StringToTuple<T extends string> = T extends `${infer F}${infer R}` ? [F, ...StringToTuple<R>] : [];
// type StringToUnion<T extends string> = StringToTuple<T>[number];
