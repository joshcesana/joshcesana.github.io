---
layout:     post
title:      "CSS3 Media Queries in 5 Minutes"
date:       2019-02-26 01:44:12 +0000
permalink:  css3_media_queries_quick_guide_in_5_minutes
author:     Josh Cesana
minutes:    5
tagLine:    CSS3 Media Queries explained in 5 minutes.
---

Responsive websites are prevalent today. Websites are created to look good not only on your desktop, but also your table and your phone (which is the majority of what website visitors are using today). For example, see [BMW's website](https://www.bmw.com) below in both **desktop** and **mobile** dimensions.

![BMW desktop](https://i.imgur.com/Toi7L9l.png)

![BMW mobile](https://i.imgur.com/jTLefE6.png)

Notice the hamburger menu in the top left only in the mobile version, and the top gray bar located only in the desktop version.

This *responsive* website (it renders well on a variety of devices and window/screen sizes) seems to transform when the browser dimensions decrease. The change can be seen before your eyes if you take your desktop browser and shrink the window's width. Decrease the window size slowly and you can see some interesting changes take place right before your eyes.

This is all the same website using the same code. How can this be achieved?

Thanks to [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3), this can easily be achieved through [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).

Assuming that you have a basic understanding of CSS, (if not, watch [this quick CSS tutorial](https://www.youtube.com/watch?v=0afZj1G0BIE)) lets jump right in to how media queries work.

## Media Queries in a Nutshell

**Media queries...**

* are an expression that evaluates to either true or false.
* syntax allows for creation of rules.
* consists of tests, followed by any and as many CSS rules as we like (if evaluated to true).
* can check specific conditions such as width and height of the device or window, orientation, or resolution.
* allow for subtle or drastic changes in the website's appearance controlled entirely by the site's CSS.
* will overwrite previous CSS rules, if placed last in our CSS and they resolve to true.

## Media Query examples

Let's say your standard font size is ```1rem```, but you want the font size to increase as the browser gets bigger. In this case, when the browser gets to 600px or higher. This is how a media query would accomplish that:

```
@media (min-width: 600px) {
  p {
    font-size: 1.25rem;
  }
}
```

This rule states that when the browser window (most likely a tablet in this case) is 600px or higher in width, the font-size for all ```<p>``` elements will increase to ```1.25rem``` (we assumed a previous size of ```1rem```) Don't forget: in CSS, the last rule always wins. This media query would be placed last in your CSS so that it overwrites any previously written rules.

But why stop there? Let's make it so when the browser window gets larger than 800px, the font-size increases yet again to ```1.5rem```, and we make the line-height ```1.5```.

Stop and think how you might do this. Spoiler alert, answer below:

```
@media (min-width: 800px) {
  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
}
```

This rule states that when the window is 800px or larger (thanks to the 'min' in ```min-width```) the ```<p>``` elements will have a font-size of ```1.5rem``` and a line-height of ```1.5```.

Media queries written in this **'min-width'** fashion tend to be suitable for developers building in the *'mobile-first'* mindset. For those who are building with the *'desktop-first'* frame of mind, use **'max-width'** instead in your media queries and work your way down. They work exactly the same way. See [this article](https://www.brainleaf.com/blog/brainleaf-news/mobile-first-vs-desktop-first-how-to-choose-a-responsive-strategy/) for a good explanation of *'mobile-first'* vs *'desktop-first'*.

Another useful strategy to use media-queries is to focus on orientation of the screen. You can write media queries as follows:

```
@media (orientation: landscape) {

}

@media (orientation: portrait) {

}
```

Also, you can focus on your screen, or simply when someone is printing off your page:

```
@media screen and ( ... ) {

}

@media print and ( ... ) {

}
```

It's easy to say that once you understand media query syntax, that a website can transform quite a bit as the browser window size changes. This is how developers can change the look and feel of a website from desktop to tablet to mobile.

With a little practice, your website become *fully responsive* and prepared to render in whatever devices your visitors use.

Happy coding!

Sources used to to write this article:

[CSS Media Queries Tutorial video](https://www.youtube.com/watch?v=2KL-z9A56SQ)

[CSS Media Queries for Beginners](https://www.crimsondesigns.com/blog/css3-media-queries-for-beginners/)
