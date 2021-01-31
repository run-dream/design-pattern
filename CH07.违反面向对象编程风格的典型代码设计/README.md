### 滥用 getter,setter方法

- 除非真的需要，否则不要给属性定义setter方法
- getter如果返回的是集合容器，要防止集合内部的数据被篡改



### Constants类、Utils类的设计问题

1. 要注意职责单一
2. 最好划分归并到业务类中



### 贫血模型

- MVC模式

  - model

  - view

  - controller  前后端分离后

    - controller  ViewObject

    - service      BusinessObject

    - Repository Entity

      