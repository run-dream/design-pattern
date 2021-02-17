``` java
// 不使用IOC框架
public class UserServiceTest {
    public static boolean doTest() {
      // ... 
      return true;
    }
    
    public static void main(String[] args) {//这部分逻辑可以放到框架中
      if (doTest()) {
        System.out.println("Test succeed.");
      } else {
        System.out.println("Test failed.");
      }
    }
  }
```