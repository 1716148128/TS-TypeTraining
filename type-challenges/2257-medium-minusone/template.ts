// 递归 push 数组，用数组 length + 1 跟 T 比对，找到返回数组的length,但是因为 TS 认为 如果一直找不到相等，就要一直递归，所以我们要向下面那样加个终止条件，终止条件不能和 T 相关
// type MinusOne<T extends number, U extends unknown[] = []> = [...U, unknown]['length'] extends T
//   ? U['length']
//   : MinusOne<T, [...U, unknown]>


type MinusOne<T extends number, ARR extends unknown[] = []> = 0 extends 1 ? never : [...ARR, 1]['length'] extends T
  ? ARR['length']
  : MinusOne<T, [...ARR, 1]>