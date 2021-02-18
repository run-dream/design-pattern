``` java
// 框架提供了一个可扩展的代码骨架，用来组装对象、管理整个执行流程。
// 程序员利用框架进行开发的时候，只需要往预留的扩展点上，添加跟自己业务相关的代码，就可以利用框架来驱动整个程序流程的执行。
public abstract class TestCase {
    public void run() {
      if (doTest()) {
        System.out.println("Test succeed.");
      } else {
        System.out.println("Test failed.");
      }
    }
    
    public abstract boolean doTest();
}
  
public class JunitApplication {
    private static final List<TestCase> testCases = new ArrayList<>();
    
    public static void register(TestCase testCase) {
      testCases.add(testCase);
    }
    
    public static final void main(String[] args) {
      for (TestCase testCase: testCases) {
        testCase.run();
      }
    }
}


public class UserServiceTest extends TestCase {
    @Override
    public boolean doTest() {
      // ... 
      return true;
    }
}

  
  // 注册操作还可以通过配置的方式来实现，不需要程序员显示调用register()
JunitApplication.register(new UserServiceTest());
```

    