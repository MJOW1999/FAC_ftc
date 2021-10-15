# Accessibility is for everyone - Oli

### Permanent impairment

- Around 4.5% of people and 9% of men are colourblind in the UK
- 10 million UK residents are disabled, being around 17% of the population.

### Temporary impairment

- *High contrast* - For users with poor vision or people out in the sun
- Captioned videos - For people in environments where playing a video aloud isn't viable (crowded concerts, etc.)
- One-handed navigation - For when people one arm/hand available

---

## User personas

- **Colour-blind**: Do not rely just on colour
- **Low-vision**: Do not prevent zoom, scale UI based on font-size (don't use absolute units), users may need to use a screen-magnifier. Make sure to show things in context and have logical content flow.
- **Blind**: Will need to use a screenreader. Make sure information isn't solely visual and that there is a programmatic access to structured content.
- **Hard of Hearing/Deaf**: They may prefer signed content as sign language may be their first language. Ensure there is an option for non-phone communication
- **Motor-impairment**: Have to use a keyboard instead of a mouse. Imperative to not DISABLE FOCUS OUTLINES

---

## How do we design accessibility?

With **WCAG** or Web Content Accessibility Guidelines

To pass these you need to pass the following *POUR* criteria:

#### Percievable

Can users percieve your UI?
Things we can do to achieve this is having text with sufficient font-size, etc.

#### Operable

Can all the users operate the UI components and navigation?

#### Understandable

Can all your users understand the content and how to use the interface?
Things we can do to achieve this is using plain English, etc.

#### Robust

Can your content be understood by assistive tech?
Things we can do to achieve this is using semantic HTML etc.
---

### Recreate a checkbox example

```html
<input type = "checkbox" id="real" checked>
<label for="real">Real checkbox</label>
<br>

<span role="checkbox" aria-checked="true" TABINDEX="0">Fake checkbox</span>

```

```css
[role="checkbox"] {
    display: flex;
    gap: 1ch;
    align-items: center;
}
[role="checkbox"]::before{
    content: " ";
    display: block;
    place-content: center;
    width: 0.7rem;
    

}

[role="checkbox"][aria-checked="true"]::before {
    content: "";
    color: white;
    background-color: grey;
}

```

```javascript
const boxes = document.querySelectorAll("[role='checkbox']");

boxes.forEach(box => {
    box.addEventListener("click", toggle);
    box.addEventListener("keypress", (event) => {
        const SPACE = " ";
        if(event.key = SPACE) toggle(event)
    });
    
})

function toggle(event){
    const checked = box.getAttribute("aria-checked") === "true";
    box.setAttribute("aria-checked", !checked);
    event.currentTarget.setAttribute("aria-checked", !checked);
}

```