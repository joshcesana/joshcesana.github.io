---
layout:     post
title:      How I Created My First Gem
date:       2018-06-16 12:09:05 +0000
permalink:  how_i_created_my_first_gem
author:     Josh Cesana
minutes:    4
tagLine:    How I was able to create my first Ruby gem.
---

Approaching the point in the curriculum at [Flatiron](https://flatironschool.com/) where students are required to create a Ruby "[Gem](https://en.wikipedia.org/wiki/RubyGems)" seemed intimidating at first.

**How am I possibly going to create a gem?**

**How will I get all the moving pieces to work?**

**What is my program going to create that is super useful and a game changer to users?**

![https://media1.tenor.com/images/1f8c7736a46059a800df67a2779b3a86/tenor.gif](https://media1.tenor.com/images/1f8c7736a46059a800df67a2779b3a86/tenor.gif)

That last question is absolutely silly.

These programs are actually quite basic [CLI](https://en.wikipedia.org/wiki/Command-line_interface) programs, but they can actually be pretty useful and interesting since they '[scrape](https://en.wikipedia.org/wiki/Data_scraping)'  data from the internet and pull them into your program. The information is then presented to the user, hopefully in a useful and maybe interesting way.


# My Interests
I had to think, what are my interests that I could bring to the table when I create this gem? One of the requirements for the project was that you had to have a general list view in addition to a more detail view. For example, I thought perhaps I could do a list of current movies, with the detail list being the length, rating, cast, etc. However, there were numerous examples of this already being done, so I didn't want to do something so similar (although it most likely would not have mattered).

Another interest I have, besides movies, is being active. Maybe I could so something with this?

I thought to myself, when active people travel or are out of town, **they want to be able to locate a gym nearby**.

![https://media1.tenor.com/images/a59cf32c012d2b5f510f1c77cbd41c60/tenor.gif](https://media1.tenor.com/images/a59cf32c012d2b5f510f1c77cbd41c60/tenor.gif)


# Scraping
Scraping, in a nutshell, is giving my program the capability to retrieve information from the internet and bring it in to my program for the user. After spending more useless worried minutes worrying about how I am going to get all these moving pieces to work, I simply reviewed previous courses I completed in Flatiron, and my worries were gone.

[Avi](https://www.pbs.org/newshour/nation/the-kid-who-was-coding-before-it-was-cool), an instructor at [Flatiron](https://flatironschool.com/) (also a co-founder and dean), provides a very useful [video](https://www.youtube.com/watch?v=oXwdOdBUyCI) on scraping, which I watched repeatedly.

The technique is actually quite simple, simply requiring a couple useful things: [nokogiri](http://www.nokogiri.org/ and [open-uri](https://ruby-doc.org/stdlib-2.3.1/libdoc/open-uri/rdoc/OpenURI.html). With this gem and module, any website out there can be used to pull useful information.

I was on my way!


# Filling In The Pieces
Instead of feeling the pressure of creating a massive (or what may *seem* massive at the time), Avi once again comes to the rescue to guide you in the right direction. This amazing and informative [video](https://www.youtube.com/watch?v=_lDExWIhYKI) shows Avi walking you through creating a CLI app from scratch. He makes it look easy, but as he says in the video, it looks "deceivingly simple".  I assure you it's not impossible, but it's not nearly as simple as he makes it look.

A very useful suggestion he gives is to use 'fake data' right off the bat to test your program as you go. Instead of always relying on scraping info from the internet, simply type in fake data in to your properties to get things moving.

He also says a great work flow for creating a CLI app (or perhaps any app or program for that matter) is repeatedly **break and fix your code, over and over again**. Progress is key.

# My Final Gem

To make a long story short, after many tweaks, minor headaches, and coffees, I was able to successfully get my Gyms gem to work.

I utilized info from the website [http://www.gymsandfitnessclubs.com](http://www.gymsandfitnessclubs.com) to first allow the user to input a zip code, and to then get nearby gyms in that area. Then, when the user selects a gym (by number) more details of the gym appear to the user (name, address, phone number).

A simple demo video of my gem can be viewed **[here](https://drive.google.com/open?id=1t7Y3hJSSsmfO1G6uh6SXOPPEd3-5Li6s)**:

Is this gem a game changer? Absolutely not, but it taught me how to create something from scratch. I was able to think of an idea, work using trial and error, and manifest that idea in to something tangible.

I published the gem on RubyGems.org [here](https://rubygems.org/gems/gyms).

I can't wait to see what I will learn next! Thanks for reading!
