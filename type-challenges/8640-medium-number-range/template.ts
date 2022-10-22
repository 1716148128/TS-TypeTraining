// Z 保存联合类型的值
// F 是否开始保存
// 如果不符合 L、H、Z 就说明还没到开始索引，不需要保存到数组里面
// 如果符合 L 就说明到开始索引了,可以开始保存了，把 F 设为 true 一直递归到结束索引返回为止
type NumberRange<L, H,Z extends unknown[] = [],F extends Boolean = false> = Z['length'] extends L ? NumberRange<L,H,[...Z,Z['length']],true> : Z['length'] extends H ? [...Z,Z['length']][number] : F extends true ? NumberRange<L,H,[...Z,Z['length']],true> : NumberRange<L,H,[...Z,never]>

// 知识点
// 取数组联合类型直接遍历就行