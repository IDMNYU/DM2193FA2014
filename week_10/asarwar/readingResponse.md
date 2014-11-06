How To Get Started in Web Design
---
This is going to cost a little money, just like learning to play the guitar requires buying a guitar and some accessories. It's about getting you to a place where you're doing web design for real and you can't help but learn! 
I'm going to mention specific company names without linking to them, just to be clear this article isn't an affiliate marketing thing. 
I think it's preferable to separate your domain buying company and your hosting company. 

Point the nameservers of your new domain to your new hosting.
We need to change the nameservers for our domain over on Hover so that the domain properly points over to Media Temple.
We're going to use it to transfer files from your computer to the web hosting server computer.
When we bought the hosting, we told them we had our own domain.
This will certainly vary from hosting company to hosting company.
Html file there, that's what shows when you go to your domain in a web browser.
Kinda like how it's more fun learning an instrument by playing a song you like rather than learning scales.

Without any further training at all, you are smart enough to find words that you want to change and change them in HTML and see the results.
That's how the vast majority of web designers started out.

Now, everything else you learn you can learn in context of a actual site you're working on.
You can imagine how the things you learn might apply to your real website.

- Learning some jQuery to add advanced functionality and interaction.

- Learn about running a web design business effectively.

The hosting company is disincentive to help you with your domain if you try to switch.

The Specificity Graph
--

CSS, OOCSS, front-end architecture, performance and more, by Harry Roberts
As we all probably know by now, specificity is is one of CSS' most troublesome features, and is an area that soon becomes hard to manage on projects of any reasonable size.

Specificity is a trait best avoided, which is why we don't use IDs in CSS, and we don't nest selectors unless absolutely necessary. 
We can't avoid specificity completely: there are types of selector that we have to use on projects that are inherently more or less specific than others.
The Specificity Graph is something I have only been speaking about recently, and is a cornerstone of my currently unpublished architecture.
Its aim is to give a very broad and general overview of the specificity of selectors across an entire project.

One thing I would be keen to do is speak to Katie about putting the Specificity Graph into Parker one day.
The Specificity Graph works by taking a look at your entire project's CSS, and plotting the specificity of all of its selectors on a simple line graph.
On the x axis we plot Location in Stylesheet and on the y axis we plot the specificity of that selector.

You can very roughly plot your own Specificity Graph by taking a look at your codebase at a very high level.
A peak represents a selector of a relatively high specificity, and occurs before a selector of a lower specificity.
A graph with a lot of peaks and troughs is a bad Specificity Graph: it is telling us that our CSS is full of-or prone to-specificity issues because of weighty selectors being defined before lighter ones.

We have a codebase that is likely to prove problematic because we have erratic and poorly managed specificity-and-source-order: we are more likely to spend time undoing or negating the effects of high specificity CSS that was defined too early in the project.
It's all well and good knowing what our Specificity Graph currently looks like, but what should it look like? Well, if we know we want to avoid peaks and troughs, we could presume that we want a flat graph: a flat graph means no specificity wars because there are no valleys to leave or mountains to overcome.

The issue there is that it's impossible to have a perfectly flat line because there will always be some selectors that are of a lower or higher specificity than others.
In general we do want to keep specificity low at all costs, but any unavoidable specificity we introduce needs taking care of appropriately.
An upward trending Specificity Graph represents CSS that is, essentially, written in specificity order.

We start with low specificity selectors at the beginning of the project, followed up by type selectors, followed up by class-based component selectors and finally ending with our overrides and helper classes.
Including these types of rule early on in a project produces a huge spike in the Specificity Graph right near the beginning, setting the bar very high for subsequent work.
Move all utility and helper classes to the very end of your CSS in order to introduce a spike right at the end, meaning you're far less likely to have to undo or override high specificity selectors in your subsequent work.

Always try to maintain an upward trending Specificity Graph across your projects.

Fun with Named Functions in JavaScript
--

A named function is a function declaration if it appears as a statement.

The function rank is defined in the function declaration function rank.
Declaring a named function binds the function to the name in its surrounding environment.
That's why we can use the function rank within the function officer.

Is function an expression or a declaration? Is function surname an expression or a declaration?
The answers are 1: function is always an expression, but 2: function surname can be an expression or a declaration, depending on how you use it.

We've used function family as an expression here, and bound the value to the name surname just as we did with an anonymous function.
When we declare a function, its name is bound in the enclosing environment, but when we use the function as an expression, its name is not bound in the enclosing environment.

Here's a named function expression: function even.
We're making a "Constructor" function, old-school style, and we're using properties of the constructor function as the rough equivalent of "Class variables" in other languages.

Named functions can be either declared in a statement or used in an expression.