# My Promise Assignment

### What I did:
I made a function using `=>` (arrow function) that handles division. 
Instead of just returning a number, it returns a **Promise**. 

### What I learned about Promises:
Promises are like a "placeholder" for a value you don't have yet. 
- If the division works, I use `resolve`.
- If someone tries to divide by zero, I use `reject` to send an error.
- Using `.then()` and `.catch()` is how we actually get the result out of the promise.

### Difficulties:
It was a bit confusing at first to remember that `resolve` and `reject` are functions themselves that you have to call. I also had to make sure my `if` statement checked the second number, not the first!

### How to run:
Just open the `index.html` file in Chrome or any browser. Check the page and the Console (F12) to see the 5 test cases.
