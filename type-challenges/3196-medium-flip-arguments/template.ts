// 通过解构接收参数数组，然后用数组递归反转
type Reverses<T extends any[]> = T extends [infer First, ...infer Rest] ? [...Reverse<Rest>, First] : T;
type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer P) => infer R ? (...args: Reverses<P>) => R : T;

