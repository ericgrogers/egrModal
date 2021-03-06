egrModal
========

Simple jQuery Modal window plugin. See a simple demo @ https://ericgrogers.github.io/egrModal/example/

I created this plugin to have a fast and clean way to create a blank Modal window that can be styled any way I see fit.
The modal window is currently styled to be responsive, and automatically recenters itself on window resize. The modal can be closed in 3 different ways: Clicking the close (X) button on the top right, clicking on the overlay, or simply hitting the ESC key.

******************************************************

To use egrModal simply install the files that are located in the 'dist' folder, into their respective directories.

You will also need to include jQuery BEFORE including the jquery.egrModal.js file in your html.

Then, simply call the plugin with jQuery on whatever element you want to use to populate the modal. Add a button or link with a class name of 'modal-open' to open the modal and you're all set!

********************************************************
```html
For example, to create a modal window that contains everything within a <div> you can do something like this:

<div class="modal"> // you can use any id or class name that you want. You can also traverse the DOM to get the <div> if you don't want to use an id or class.

  <h3>I'm a modal panel!</h3>
  <p>Some interesting content.</p>
  <p>Even more interesting content.</p>
</div> //end of the modal window

<button class="modal-open">Click here to open the Modal</button> // use the modal-open class on a button or link. Make sure you don't place your button or link inside of the element you are using for the modal or it will not display properly.

```
*********************************************************

Now, inside of your main.js (or whatever it is that you call your main javascript file) simply call the plugin on the element you want to use for the modal's content.

e.g.
```javascript
(function($){

  $('.modal').egrModal();

}(jQuery));

```
**********************************************************

Lastly, make any changes you desire to the CSS and you now have a simple, easy to use modal window.

