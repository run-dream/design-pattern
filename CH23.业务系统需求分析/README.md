### 积分系统需求分析

1. 基本功能

   - 赚取积分
     - 不同的渠道
     - 不同的兑换规则
   - 消费积分
     - 积分消费渠道
     - 积分兑换规则
   - 查询积分

2. 基本手段

   1. 借鉴已有产品
   2. 用例图
   3. 线框图

   

### 系统设计

1. 合理地将功能划分到不同模块 （高内聚、低耦合）

   - 如果一个功能的修改或添加，经常要跨团队、跨项目、跨系统才能完成，那说明模块划分的不够合理，职责不够清晰，耦合过于严重。
   - 为了避免业务知识的耦合，让下层系统更加通用，一般来讲，我们不希望下层系统（也就是被调用的系统）包含太多上层系统（也就是调用系统）的业务信息，但是，可以接受上层系统包含下层系统的业务信息。

2. 设计模块与模块之间的交互关系

   两种基本方式

   - 同步接口调用
   - 利用消息中间件异步调用

   上下层系统之间的调用倾向于通过同步接口，同层之间的调用倾向于异步消息调用

3. 设计模块的接口、数据库、业务模型















