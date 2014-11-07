### DM2193

# Intro to Web Development

![NYU](http://j-hnnybens-n.com/capture/imami.png)

    Johnny Benson • Fall 2014
    Tuesday & Thursday • 7:30-9:20PM
    Rm 813 • 3 credit hrs
    Office hours by appointment or directly after class
    Email <johnny.benson@nyu.edu>
    Class Website <https://github.com/IDMNYU/DM2193FA2014>

---

## Week 10


### Reading Assignments
* [How to Get Started in Web Design](http://css-tricks.com/get-started-web-design)
This article was a great detailed overview of making your own website. The author, Chris Coyier, gives step by step instructions on hosting your site on the web. It's informative and includes noob friendly images that ease the web making process so easy anyone can do it.

* [CSS Specificity Graph](http://csswizardry.com/2014/10/the-specificity-graph)
This article brought to light the issue of specifity in web design. It uses graphs to show where specifity issues occur in css code. The graph has its x-axis representing the line location of the selectors while the y-axis represents the specifity of the selector. The graph is not 100% accurate but it gives you a good idea of where the trends in specifity are in your document. A bad graph will have peaks and troughs sparsed throughout, showing that the specifity of your css is in random locations. This can cause errors in your code as the higher specifity can be overriden by lower specifity if its placed too early in the code. An ideal css specificity graph will be left-skewed with the least amount specifity selectors located at the beginning of the document and the most specific selectors located towards the end. Once you notice any errors in your code based on the trend of the specifity graph and fixed them you should continue writing your code and make sure that new selectors are placed in the correct position based on their specifity.

* [Fun with Named Functions](http://raganwald.com/2014/10/24/fun-with-named-functions.html)
This was written as an introduction to functions for people who are not familiar with them. It's written from the perspective of javascript. He shows that you can name a function anywhere in code and call it from anywhere as well. He also shows encapsulating a function within another function. A function that is encapsulated in another function can be called by it. You can bind a function to a variable to express it or have the function called on right after you define it. You cannot have a function called on before it is defined. There is scope within javascript. You can only have functions expressed if they were defined within the same environment.
