// U 用于最后返回的数组
// Flag 用于是否开始替换
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  U extends any[] = [],
  Flag extends boolean = false
> = 
    Start extends End
    // 如果替换的开始位置和结束位置相等，说明没有位置替换（不用替换）
    ? T
    : T extends [infer A, ...infer L]
      // 如果 U 的 length 为 Start,说明找到开始的替换的索引了
      ? U['length'] extends Start
        // 开始替换就把 N push 到 U 里面，并把状态设置为 true,代表开始替换
        ? Fill<L, N, Start, End, [...U, N], true>
        // 如果 U 的 length 为 End，说明找到结束替换的索引
        : U['length'] extends End
          // 结束替换就把 A push 到 U 里面，并把状态设置为 false,代表不需要替换 
          ? Fill<L, N, Start, End, [...U, A], false>
          : 
            Flag extends true
            // Flag 为 true 开始替换，其实也就是往数组里增加 N,也就是需要替换的值
            ? Fill<L, N, Start, End, [...U, N], true>
            // Flag 为 false 结束替换，往数组里增加当前循环的这个元素 A
            : Fill<L, N, Start, End, [...U, A], false>
      // 数组遍历完成，就把 U 返回出去
      : U