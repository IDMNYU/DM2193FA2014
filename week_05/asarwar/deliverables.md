Reading Assignment: [Classical Inheritance in JavaScript](http://javascript.crockford.com/inheritance.html)
----

Why use Inheritance?

	- Convenience 
	- Code-reuse

A Parenizor class with set and get methods for its values. The method takes a method name and a function, adding them to the class as a public method.
Another class inherits from Parenizor, which is the same except that its toString method will produce "-0-" if the value is zero or empty.

By manipulating a function's prototype object, we can implement **multiple inheritance**, allowing us to make a class built from the methods of multiple classes. Promiscuous multiple inheritance can be difficult to implement and can potentially suffer from method name collisions.

Suppose there is a NumberValue class that has a setValue method that checks that the value is a number in a certain range, throwing an exception if necessary. Parenizor only needs its setValue and setRange methods. Instead of adding public methods, the constructor adds privileged methods. JavaScript's dynamism allows us to add or replace methods of an existing class.We can call the method at any time, and all present and future instances of the class will have that method.

In JavaScript, you can add methods to individual objects without the need for additional classes. If the value is a function, then it becomes a method.
We added a toString method to our myParenizor instance without using any form of inheritance.

Steps to make inheritance work:

- First, a method which adds an instance method to a class. When the method doesn't need to return a value, I usually have it return this.

- Next comes the inherits method, which indicates that one class inherits from another. We also correct the constructor field, and we add the uber method to the prototype as well. The uber method looks for the named method in its own prototype.

The return statement uses the function's apply method to invoke the function, explicitly setting this and passing an array of parameters.
The arguments array is not a true array, so we have to use apply again to invoke the array slice method.

# Show & Tell: [Pencil Project][penproj-link]
-----
# Likes:  #
- Useful tool for Web-design
- Open source
- Simplistic UI
- Easy-to-find 'Download' link
- Clear demonstration of the software with a well-positioned image
- Non-intrusive ad placement
- Simple homepage with links to complex features

# Dislikes: #
- Borders on the side of the page (depends on viewing resolution)
- Lack of links leading to tutorials on homepage
- No 'Support Us' link

# My Take-Away #
 If I had to modify this site, I would definitely set some media queries in order to extend the background depending on DOM size. Or, at least have the background image be a similar shade with the default background color, that way the lack of media queries wouldn't be as jarring.


[penproj-link]: http://pencil.evolus.vn/