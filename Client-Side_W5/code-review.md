# React week code review

## Timers

- Struggling with implementing timers and setTimeout with useEffect
- Clean up setTimeout manually

The below works fine but can be optimised

```javascript
import{ useState, useEffect } from "React"

function App(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(id);
    });
    return <div>{count}</div>
}

export default App;
```

We need to rerun the effect everytime count is changed
Use oldCount to make it dynamic, making it more efficient

```javascript
import{ useState, useEffect } from "React"

function App(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id setInterval(() => {
            setCount((oldCount) => oldCount + 1);
        }, 1000);
        return () => {
            // Cleaning up effect
            clearInterval(id)};
    }, []);
    return <div>{count}</div>
}

export default App;

```

Conceptiual explanation

```javascript
function setCount(newValue) {
  const value = typeof newValue === "function" ? newValue(oldState) : newValue;
  updateState(value);
  reRenderComponent();
}
```

[SetInterval Article](https://overreacted.io/making-setInterval-declarative-with-react-hooks/)
[useEffect Article](https://overreacted.io/a-complete-guide-to-useeffect)

---
