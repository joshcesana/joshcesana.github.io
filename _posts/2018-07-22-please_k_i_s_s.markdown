---
layout:     post
title:      Please... K.I.S.S.
date:       2018-07-22 11:23:12 +0000
permalink:  please_k_i_s_s
author:     Josh Cesana
minutes:    4
tagLine:    Why Keeping Things Simple (Stupid!) always wins.
---

# Please... K.I.S.S.

No, I'm not talking about **smootching**!

![Smooching Minion](https://media.giphy.com/media/dMYVHzANYb9p6/giphy.gif)

I'm talking about the old saying...

### "Keep it simple, stupid!"

Turns out, the [U.S. Navy](https://en.wikipedia.org/wiki/KISS_principle) was on to something.

And oh, how I wish I meditated on these words before I started my Rails project.

Have you ever started a project, only to get held up because you seem to be over thinking every single step? That's exactly what happened to me, to the extreme!

I was excited to implement my [Rails Recipes](https://github.com/JCesana/rails-recipes) idea with all the bells and whistles.

Let's look at some of the requirements...

**I needed a basic login and authentication system.**

## What I Should of Done
I should of just coded a simple login system that I've done many times already. Simple!

## What I Actually Did

I looked at various gems that promised gold and glory, but can cause a beginner massive anxiety trying to figure it out!

The [Devise gem](https://github.com/plataformatec/devise) not only manages logins and authentication, you can hash and store passwords, configure with [Omniauth](https://github.com/omniauth), recover, register, remember, track, timeout, validate, lock... it's actually quite an amazing gem!

But for someone that has had zero experience implenting it, I ran into MANY problems trying to get it to work. The main issue I had was to configure it with [Omniauth](https://github.com/omniauth), because another requirement was that my project allow login to social media.

**I spent unecessary countless hours tweaking, researching, googling, but I finally was able to make it work.**


![At what cost?](https://media.giphy.com/media/65DMhLUJG5CW4/giphy.gif)

**I also needed to create a complex nested form to allow mulitple model creation simultaneously.**

## What I Should of Done

Code the form myself like I've done many times before! Simple!

## What I Actually Did

I looked at more gems!! Arrggg!!!

I found many gems that seemed very useful at the time, but in reality when I tried to implement them, and also get them to work well with the other gems I have going **(cough! Devise! Omniauth!)** I was running in to a world of hurt.

Again, I spent countless hours tweaking code that should of been very straight foward. I eventually got rid of any gems that helped me with my forms. I know how to code it correctly myself, so that's exactly what I did. Simple!

**I needed a basic plan on what to code, step by step.**

## What I Should of Done
Make a concise and clear list of items that I need to code. Simple!

## What I Actually Did
I basically winged it all the way through. I would get so distracted when something didn't look right over here, when in reality I should of been focusing hard on the task at hand.

I do extremely well with lists, which in development, could mean passing tests. Everything is very clear, and your objective is starting you in the face. I love that.

However, I was all over the place during this project. I would work on a show page one minute, then get distracted and drift over to flash messages the next minute.

## What I Learned
The Navy was right on with this K.I.S.S. slogan. When you keep things plain and simple, things get done. When you try to add the bells and whistles, especially just starting out, **you are in for a WORLD of hurt.**

Additionally, I learned that things go much smoother when you have a plan and you follow it! (go figure!) Taking the extra time in the beginning, or perhaps reevaluating somewhere in the middle to make a plan, really pays dividends in the future.

Going step by step allows you to move at a very efficient, yet comfortable pace.

**I'm very glad that I completed this project the way I did, because it allowed me to learn some valuable lessons.** But I would just like to pass that valuable lesson to whoever would like to hear.

## TL;DR

To sum things up: keep things simple and make a clear plan.

**Keep it simple, stupid!**

![Thumbs up!](https://media.giphy.com/media/111ebonMs90YLu/giphy.gif)
