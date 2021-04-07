1. 如何理解单例模式的唯一性？

   - 进程唯一

   - 线程唯一

     ```java
     
     public class IdGenerator {
       private AtomicLong id = new AtomicLong(0);
     
       private static final ConcurrentHashMap<Long, IdGenerator> instances
               = new ConcurrentHashMap<>();
     
       private IdGenerator() {}
     
       public static IdGenerator getInstance() {
         Long currentThreadId = Thread.currentThread().getId();
         instances.putIfAbsent(currentThreadId, new IdGenerator());
         return instances.get(currentThreadId);
       }
     
       public long getId() {
         return id.incrementAndGet();
       }
     }
     ```

   - 集群唯一

     ```java
     
     public class IdGenerator {
       private AtomicLong id = new AtomicLong(0);
       private static IdGenerator instance;
       private static SharedObjectStorage storage = FileSharedObjectStorage(/*入参省略，比如文件地址*/);
       private static DistributedLock lock = new DistributedLock();
       
       private IdGenerator() {}
     
       public synchronized static IdGenerator getInstance() 
         if (instance == null) {
           lock.lock();
           instance = storage.load(IdGenerator.class);
         }
         return instance;
       }
       
       public synchroinzed void freeInstance() {
         storage.save(this, IdGeneator.class);
         instance = null; //释放对象
         lock.unlock();
       }
       
       public long getId() { 
         return id.incrementAndGet();
       }
     }
     
     // IdGenerator使用举例
     IdGenerator idGeneator = IdGenerator.getInstance();
     long id = idGenerator.getId();
     IdGenerator.freeInstance();
     ```

2. 多例模式

   “多例”指的就是，一个类可以创建多个对象，但是个数是有限制的。它跟工厂模式的不同之处是，多例模式创建的对象都是同一个类的对象，而工厂模式创建的是不同子类的对象。

   ```java
   
   public class Logger {
     private static final ConcurrentHashMap<String, Logger> instances
             = new ConcurrentHashMap<>();
   
     private Logger() {}
   
     public static Logger getInstance(String loggerName) {
       instances.putIfAbsent(loggerName, new Logger());
       return instances.get(loggerName);
     }
   
     public void log() {
       //...
     }
   }
   
   //l1==l2, l1!=l3
   Logger l1 = Logger.getInstance("User.class");
   Logger l2 = Logger.getInstance("User.class");
   Logger l3 = Logger.getInstance("Order.class");
   ```
