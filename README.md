###### fileify-files is a simple and easy way to read files

###### * Note: All Methods for getting are higher order functions, not return objects.

## Initializing and declaring your object
 ```javascript
 const FileiFyle = require('fileify-files')
 const files = document.querySelector('input[type="file"]').files
 window.onload = ()=> {
   const file = new FileiFyle(files[0])
 }
 ```
 The FileiFyle constructor supports an agrument of the Blob type. In this case what is used is the input from an
 ```html
 <input type="file" />
```
##### You can give it an id like here:
```html
<input type="file" id="fileInput" />
```
##### Javascript:
```javascript
  const fileInput = document.getElementById('fileInput')
```
##### Or you can use a class:
```html
<input type="file" class="fileInput" />
```
##### Javascript
```javascript
const fileInput = document.getElementsByClassName('fileInput')
```
##### Or finally you can use the query selector like I do here and did in the origional example:
```html
<input type="file">
```
##### Javascript:
```javascript
const fileInput = document.querySelector('input[type="file"]')
```
## Getting As A DOM Element
When getting the file as a DOM element, you can use the following method:
```javascript
file.getDomAs('img', img=> {
  /* Do stuff with the DOM element */
})
```
###### Note: When getting as an image, it returns an object of the `Image()` type, therefore you can't use functions like `img.setAttribute(...)`

##### The `getDomAs(...)` method supports the following types:
* `'img'`
* `'a'`
* `'textNode'`
* `'video'`

## Getting As Other Types

The `file.getAsDataURL(...)` retruns a base-64 encoded string of the file.
```javascript
  file.getAsDataURL(url/* This is a base-64 encoded string */=> {
    /* Do stuff with url */
  })
```
There are also the methods:
* `getAsBinary(...)`
* `getAsArrayBuffer(...)`
* `getAsText(...)`
