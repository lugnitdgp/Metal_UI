---
title: 'Buttons'
date: 2020-01-31T00:14:57-04:00
tags: ['poetry', 'life']
draft: false
---

### The Metal_UI presents to you the Metallic Hue Button which can be used for actions in dialogs, forms and more. They can also be customized as per the color, texture, size and more.
---

Basic Buttons
---------------------------------------
*Metal_UI contains three types of buttons with predefined style.*

***Button Contained***
```html

<button class="btn-contained">Click</button>

```
***Button Outlined***
```html

<button class="btn-Outlined">Click</button>

```
***Button Text***
```html

<button class="btn-text">Click</button>

```



Colored Button
---------------------------------------
### Using color to add meaning only provides a visual indication.
---

```html

<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-primary">Click</button>
<button class="btn btn-secondary">Click</button>

```

Button-Tags
---------------------------------------

### The .btn classes are designed to be used with the <button> element. However, you can also use these classes on <a> or <input> elements .When using button classes on <a> elements that are used to trigger in-page functionality rather than linking to new pages or sections within the current page, these links should be given a role="button" to appropriately convey their purpose to assistive technologies such as screen readers.
---

```html

<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>

```



Disabled state
---------------------------------------
### Make buttons look inactive by adding the disabled boolean attribute to any <button> element.
---
```html

<button class="btn-contained" disabled>Click</button>
<button class="btn-text" disabled>Click</button>
<button class="btn btn-outlined " disabled>Click</button>

```
