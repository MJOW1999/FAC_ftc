# Cookies Intro

- HTTP is stateless
- "Cookies" are a way to maintain state between requests
- **Cookies** are just HTTP headers.
- If a response contains `set-cookie` header the browser stores it. The browser will send this info on all future requests to that domain.
- If the user visits another page, the browser automatically adds a `cookie` header.

## Cookie atrributes

- A **session** cookie is when cookies last until the user closes the page
- The server can make the cookie last longer by setting the `Max-Age` attribute. E.g. if `Max-Age=60` it lasts for 60 seconds.

### Security

- The `HttpOnly` attribute prevents JS from accessing the value. This is important to avoid malicious scripts stealing cookie data (**XSS attacks**)
- The `Same-Site` option prevents cookies from being sent on requests from other domains. This is important to avoid other sites impersonating your users (**CSRF attacks**). We should use `Same-Site=Lax`
- The `Secure` option stops the cookie being set on un-encrypted connections. This is important to stop hackers intercepting requests and stealing cookies (**MITM attacks**). We cannot use `Secure` on local host.

---

## Authentication methods

How do we track whether the user is logged in?

### Stateless authentication

- Stateless is when we don't keep anything on the server
- You cannot trust cookies as they are just HTTP header, you can even change them in dev tools!

### Signed cookies

- A **hash function** takes a value and a secret, and returns a "hash"
- Hashing is a one-way process
- Hashing the same value always gives the same result
- The only way to recreate a hash value is to know the secret
- We can use this to **sign** our cookies

### Downside to stateless authentication

- Cookies have a 4kb size limit. You'll often want more user info than that.
- The server cannot control who is logged in. If a user presents a non-expired cookie they are authenticated.

### Session-based authentcation

- Opposite of stateless auth. Store a single **session ID** in the cookie, then use the ID to look it up in the server.

### Session security

- Session IDs should be long random strings
- They should still be signed with a hash, so you can trust them.

---

## Web Security

### Security

- It's important to treat security very seriously.
- The average user re-uses the same password for most sites. It has wider repercussions if you get hacked.
- If you don't have the time to do it properly use a trusted 3rd party service.
