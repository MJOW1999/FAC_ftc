# Code review

## Server side validation

Without server side validation, a user can open dev tools and remove our form validation.
A user can also disable JavaScript on their end and  then our current validation wouldn't work
This will cause inputs we don't want and problems when we try to access fields that were supposed to be required but now are not.
We need to check `POST` functions and put at least an `if` statement there to check if our required variables are there

---


## Async/await

```
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getUser() {
  return wait(1000).then(() => ({ id: 1, name: "oli" }));
}

function verify(user) {
  return wait(1000).then(() => {
    throw new Error("Uh oh");
  });
}

async function run() {
  try {
    const user = await getUser();
    const match = await verify(user).catch();
  } catch (error) {

  }
  console.log(match);
  return match;
}

function run1() {
  return getUser().then(user => verify(user))
}

run().then(console.log).catch(console.error);
```