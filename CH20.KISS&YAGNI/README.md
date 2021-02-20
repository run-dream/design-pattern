### 什么是KISS原则

Keep It Simple and Stupid

代码实现要简单易懂

### 如何做到KISS原则

- 不要使用同事可能不懂的技术来实现代码
- 不要重复造轮子，要善于使用已经有的工具类库
- 不要过度优化。

### 什么是YAGNI原则

You Aren't Gonna Need It 你不会需要它

如无必要 勿需实体

不要过度设计

### 如何做到YAGNI原则 

- 不为暂时不需要的功能提前编码，但是可以预留扩展点
- 不要提前引入不需要依赖的开发包

### 关于造轮子

1. 想学习轮子原理(有轮子但是不意味着你不要了解其原理)
2. 现有轮子不满足性能需求(轮子一般会考虑大而全的容错处理和前置判断，这些对性能都有损耗)
3. 小而简的场景(比如设计一个sdk,最好不宜过大，里面轮子太多不易三方集成)
4. 定制化需求
