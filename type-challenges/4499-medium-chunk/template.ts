
// ChunkItem 用于递归时保存一组的数组
// Result 是一个大数组，包裹
type Chunk<
  T extends any[],
  ChunkSize extends number,
  ChunkItem extends any[] = [],
  Result extends any[] = []
> = 
  T extends [infer F, ...infer R] 
  ?
    // 长度是否等于传进来的长度，等于就找到了一组
    ChunkItem['length'] extends ChunkSize 
    ?
    // 如果等于，递归继续查找，并把这一组存在 Result 中再传进去
    Chunk<R, ChunkSize, [F], [...Result, ChunkItem]> 
    :
    // 如果不等于，把数组首个元素存进 ChunkItem 里面继续递归
    Chunk<R, ChunkSize, [...ChunkItem, F], Result>
  : 
    // 如果数组元素查找完，ChunkItem 还有值，就说明我们还要保存多一组
    ChunkItem['length'] extends 0 
    ?
    Result 
    :
    [...Result, ChunkItem];