### 业务开发包括哪些工作

1. 接口设计

   改动接口，需要推动接口的使用者作相应的代码修改

2. 数据库设计

   改动数据库表结构，需要涉及数据的迁移和适配

3. 业务模型设计

   - What is MVC
     - Controller 层负责接口暴露
     - Repository 层负责数据读写
     - Service 层负责核心业务逻辑，也就是这里说的业务模型。

   - Why use MVC
     -  分层能起到代码复用的作用

     -  分层能起到隔离变化的作用

     - 分层能起到隔离关注点的作用

     - 分层能提高代码的可测试性

     - 分层能应对系统的复杂性

       水平方向基于业务来做拆分，就是模块化；

       垂直方向基于流程来做拆分，就是这里说的分层。

   - VO、BO、Entity

     从设计的角度来说，VO、BO、Entity 的设计思路并不违反 DRY 原则，为了分层清晰、减少耦合，多维护几个类的成本也并不是不能接受的。但是，如果你真的有代码洁癖，对于代码重复的问题，我们可以通过继承或者组合来解决。

     

