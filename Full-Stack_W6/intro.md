# Full-stack apps

> [Slides](https://fac-slides.netlify.app/slides/full-stack-app/) > [Next Tutorial](https://nextjs.org/learn/)

- Web pages are generally made of _"data"_ + _"markup"_. E.g. a personal landing page: data is info about you and the markup is the HTML that contains that info.
- With **static data**, you can get away with writing the HTML in advance. Your server (or Netlify's) just responds with the static `.html` file.
- With **dynamic data** (_changes on each request_), you need to generate each page on demand. This can happen on the server or client.
- Generating pages on the server is simpler and safer. Doing it on the client allows for more dynamic interaction

## Next.js

- Next is a framework for building websites with React
- React doesn't provide many of the things websites need - e.g. routing, server-rendering, data fetching.
- Next creates **"isomorphic"** JavaScript apps. They render on the server **and** the client.
- The initial page is server-rendered HTML, then (once JS loads) it all runs client-side.
- This is a compromise between initial performance (show HTML fast) and interactivity on the client.

---

### How it works

- You create React components in a `pages/` directory.

```javascript
// pages/Index.js

function Index() {
  return <h1>Hello world</h1>;
}

export default Index;
```

- Next's Node server creates a route for this. It renders your app once on the server to get HTML.

```javascript
// Under the hood
server.get("/", (req, res) => {
  const component = ReactServer.renderToString(<Index />);
  const html = `
    <div id="root">${component}</div>
    <script src="client-bundle.js"></script>
  `;
```

- It renders your app again on the client to “hydrate”. This tells React to connect to existing DOM nodes.

```javascript
// client-bundle.js

ReactDOM.hydrate(<Index />, document.querySelector("#root"));
```

- Before this “hydration” happens the user can still see the HTML. Once hydration finishes you have a client-side app.

---

### Backend stuff

- Next also supoorts "API routes".
- You create files inside `pages/api/`. These will be used as handlers for the matching route.

```javascript
// pages/api/user.js

function user(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export default user;
```

- This lets you build an API route to fetch JSON form. Simpler than having to create and deploy a whhole separate server

---

### Different page types

- Next supports both server-rendered pages and static
- Page components have two options for getting data: 1. export a `getStaticProps` function, or 2. export a `getServerSideProps` function. This is where you e.g. query your database.
- `getStaticProps` marks the page as static. Next will build this to an .html file when you deploy your site. Your server avoids making a dynamic route for this page
- `getServerSideProps` marks the page as dynamic. Next will re-create the page on every request. This way the data will always be up-to-date.

```javascript
export async function getServerSideProps(context) {
  const products = await db.query("SELECT * FROM products");
  return {
    props: { products },
  };
}
```

- The returned props are passed to the component:

```javascript
function Index({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  );
}
```

- This makes data-fetching simpler and safer. Code used in here will only run on the server. So it's safe to use secrets, etc.
- **Warning**: `getStaticProps` is _not_ a good default. Consider this an optimisation—always start with `getServerSideProps` until you’re sure this page’s data never changes.
- E.g. if you use `getStaticProps` for a DB query. When the DB is updated while the app is running you’ll see old data until the app is re-deployed.
- Next has a ton of other features. It’s mostly just a nice way to build “proper” websites.
