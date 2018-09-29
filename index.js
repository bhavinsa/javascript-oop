function Circle(redius) {
  let data = "This is simple abstration data";
  let abstrationFn = function() {
    console.log(data);
  };
  (this.redius = redius),
    (this.draw = function() {
      console.log("draw called");
      abstrationFn();
    });
}

const circle = new Circle(10);
console.log(circle.draw());

for (let key in circle) {
  console.log(key, typeof circle[key]);
}

/**
 * OOP concept stopwatch, open the console and call methods like
 * st.start()
 * st.stop()
 * st.duration()
 */
function stopwatch() {
  /**
   * Here startTime, stopTime is local variable that hides the complexity of code. example of abstraction.
   */
  let startTime = 0;
  let stopTime = 0;
  (this.start = function() {
    if (startTime == 0) {
      startTime = new Date();
    } else {
      throw new Error("You have already called start() earlier.");
    }
  }),
    (this.stop = function() {
      if (startTime != 0) {
        stopTime = new Date();
      } else {
        throw new Error("You must have to call first start() method.");
      }
    }),
    (this.duration = function() {
      if (startTime != 0 && stopTime != 0) {
        let seconds = stopTime.getSeconds() - startTime.getSeconds();
        let minutes = stopTime.getMinutes() - startTime.getMinutes();
        console.log(minutes + ":" + seconds);
        startTime = 0;
        stopTime = 0;
      } else {
        throw new Error("First call start() and stop(), then call duration().");
      }
    }),
    (this.reset = function() {
      (startTime = 0), (stopTime = 0);
    });
}

const st = new stopwatch();

/** Reference type(obeject) - pass value reference 
-Number
-String
-Boolean
-Symbol
-undefined
-null
**/
let x = 10;
let y = x;
x++;
console.log(x);
console.log(y);
/** Value type(primiive) - cpoied their value
-object
-array
-function
**/
let xx = { value: 10 };
let yy = xx;
xx.value++;
console.log(xx);
console.log(yy);
