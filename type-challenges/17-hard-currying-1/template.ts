type CurringOptionFn<T, RE = T extends (...args: any) => infer R ? R : never> = T extends (...args: infer P) => RE ? P['length'] extends 1 ? (arg: P[0]) => RE : P extends [infer F, ...infer L] ? (arg: F) => CurringOptionFn<(...args: L) => RE, RE> : () => RE : RE;

declare function Currying<T>(fn: T): CurringOptionFn<T>