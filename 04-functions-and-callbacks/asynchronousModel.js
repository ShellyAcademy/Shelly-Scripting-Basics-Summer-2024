function f1() {
    console.log("Hello.");
  }
  
  function f2() {
    console.log("Hello again.");
  }
  
  // f3 executes asynchronous task
  function f3() {
    Timer.set(2000, false, function() {
      console.log("Goodbye");
    });
  }
  
  f1();
  f3();
  f2();