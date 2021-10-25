## Server-side review


### Error-handling

- Make sure there is server-side validation
- Make sure your catches return something
- Error handling is not neccessarily needed for model.js, instead put them in routes

### Perfomance/ Asset loading

- *Waterfalls* in loading - we can end up not loading things until other things have downloaded
- CSS can be described as a render blocking resource
- It's generally inefficient to import google fonts within style.css
- It's optimal to front load stuff e.g. use a `<link>` tag to import google fonts

