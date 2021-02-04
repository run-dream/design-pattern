### 贫血模型 充血模型
只包含数据，不包含业务逻辑的类，就叫作贫血模型（Anemic Domain Model）。

数据和对应的业务逻辑被封装到同一个类中，叫做充血模型（Rich Domain Model）。



### 领域驱动设计

领域驱动设计，即 DDD，主要是用来指导如何解耦业务系统，划分业务模块，定义业务领域模型及其交互。

基于充血模型的 DDD 开发模式实现的代码，也是按照 MVC 三层架构分层的。Controller 层还是负责暴露接口，Repository 层还是负责数据存取，Service 层负责核心业务逻辑。它跟基于贫血模型的传统开发模式的区别主要在 Service 层。

|                  | service构成     | 侧重点              |
| ---------------- | --------------- | ------------------- |
| 贫血模型传统开发 | Service，BO     | 重service而轻BO     |
| DDD开发          | Service，Domain | 重Domain而轻Service |



### 为什么基于贫血模型的传统开发模式如此受欢迎？

- 系统业务简单
- 充血模型设计和开发难度比贫血高
- 思维固化



### 什么项目应该考虑使用基于充血模型的 DDD 开发模式

基于贫血模型的传统的开发模式，比较适合业务比较简单的系统开发。相对应的，基于充血模型的 DDD 开发模式，更适合业务复杂的系统开发。