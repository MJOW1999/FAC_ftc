# Project Spikes

## Node architecture

### Resources

- [The Node.js Event Loop](https://nodejs.dev/the-nodejs-event-loop/)
- [What are callbacks?](https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/)
- [What are the error conventions?](https://nodejs.org/en/knowledge/errors/what-are-the-error-conventions/)

### 1. What is the event loop?

### 2. Why should we prefer asynchronous code? What would happen if we had slow blocking code in our request handlers?

### How does Node use callbacks to manage asynchronous code?

Node uses callbacks to manage asynchronous code by the following steps:

- If there is an error in an asynchronous function it will return them as the first argument of the functions callback. Otherwise, pass null first, and then your return arguments.
- Inside the callback function, if the first parameter is non-null, then it will handle this error
