// T 传进来的数组，Depth 展平的最大深度，Count 当前展平的深度
type FlattenDepth<T extends unknown[], Depth extends number = 1, Count extends unknown[] = []> =
  // 如果数组 T 没有元素了
  T extends [infer First, ...infer Rest]
    // 如果数组第一个元素是数组
    ? First extends unknown[] 
      // 如果当前已经达到最大深度
      ? Count['length'] extends Depth 
        // 达到最大深度返回自身
        ? T
        // 再取数组里面的第一个元素
        : T extends [infer F, ...infer R]
          // 再判断数组里面的第一个元素是不是数组
          ? F extends unknown[]
            // 展开第一个元素，后面的元素递归展开,展开深度不传默认为 1
            ? FlattenDepth<[...F, ...FlattenDepth<R>], Depth, [...Count, 1]>
            // 后面的元素递归展开
            : FlattenDepth<[F, ...FlattenDepth<R>], Depth, [...Count, 1]>
          // 返回自身或一个空数组
          : T
      // 第一个元素不是数组，递归后面的元素
      : [First, ...FlattenDepth<Rest, Depth, Count>]
    // 这里返回 T 或者 空数组都是一样的，因为 T 数组没有元素了
    : T

