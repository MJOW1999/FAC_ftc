## Project architecture

- First time FAC aren't telling us what to use
- Important to make deliberate choices
- Try to consider alternative approaches. What are the pros and cons of each?
  - _'We already know this technology'_ is a valid pro!
- Technical choices should help fulfil the project requirements
- Within the scope of the last two projects the maximum level of a new thing to learn/use is maybe new libraries

### Specific questions to consider

- Where does the data come from? Individual user (note taking app), all users (social network), or you (news site)?
- Do you need to sync data across devices?
  - Keeping everything on-device can be simpler
- Will app run on the client or server (or both)? This depends on the data requirements
- Do you need a full database? Could you use localStorage?
- Do you need a relational database?
  - Would a simple object be easier?
- Do you need full control of the data and database?
  - Could you use a simple hosted service like Airtable and Google Sheets?
- Can you build "frontend first" to validate the MVP? Setting up a database can take up a lot of time at the start.
- Do you need help managing styling?
- Do you need a frontend framework? Or is your app mostly static?
- Will you use a platform-as-a-service (like Heroku or Vercel)?
- Or do you need more control over the hosting environment?

- **You don't have to pick th eexact right tool for the job** but you should be able to justify your choice.
