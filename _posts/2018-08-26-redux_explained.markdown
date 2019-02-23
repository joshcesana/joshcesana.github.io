---
layout:     post
title:      "Redux Explained"
date:       2018-08-26 02:19:09 +0000
permalink:  redux-explained
author:     Josh Cesana
minutes:    5
tagLine:    Redux explained from a high level.
---

As I'm learning more and more about React and Redux, I wanted to take the time to explain Redux very simply and from a high level.

## What does Redux do?

Let's abstract this concept to real world things.

In real life, we sometimes have many, many different things to do...
* feed the dog
* go get groceries
* get a haircut
* watch Game of Thrones again

Sometimes it gets hard to remember all of the things we have to do. Wouldn't it be nice to have something that could help us keep track of all the things we have to do, so we never forget?

How about a notebook!

When a new task comes along, we simply write it in our notebook. Now, everything is recorded, and we will no longer forget the never ending list of tasks we need to complete.

The same goes for web applications. Web apps can do many different things...
* reserve movie tickets
* book a hotel room
* order supplies
* have a strawberry shake delivered to you while you watch Game of Thrones again

To manage all of these functionalities, a web application can use Redux to keep track of important data.

Simple, right?

Well, not quite.

To stay with our example with keeping track of our tasks in a notebook, there's something between initiating an action and actually writing something on to the notebook... or Redux. Let's go over our thinking process before actually writing a note, and see how that relates to Redux.

Let's imagine we are doing laundry in a public laundry room.

![](https://media.giphy.com/media/l4pTfgcD0h5G6VYgo/giphy.gif)

We need to get back on time before the laundry finishes!

There are 3 steps we need to do before we write something down in our notebook:

1. Put in the clothes and push the start button
2. Read how much time is needed to finish the job
3. Add the current time to the washing machine wait time

Only then can we write down the time that the laundry will be completed.

Let's review these steps and translate it in to Redux!

## Translated to Redux

**Step 1: Starting the washing machine**

This step is simply triggering Redux to start running.

In code, this could be attaching a code for dispatch (more on that in a second) to an event on a button.

**Step 2: Get the time needed**

Redux uses something called **dispatch**. In English, dispatch means to send, or to convey. Dispatch conveys information from real life in to our reducer for calculation. That information is called an action, which we will talk about later.

In code, this could be attaching a hard coded object with a type and value, to be sent via the dispatch function to the reducer (which is coming up next).

**Step 3: Do the math**

Redux uses a **reducer** to handle the calculation to get the end time.

In code, the reducer will have ways to alter the state (coming up next) for every different action that is sent to it. Basically, the initial state is changed (based on the action), and the resulting state is sent back to Redux, ready to be presented back to the user.

**Then... write down the time!**

Redux uses **state**, which is important and dynamic data. In real life, we call it a note. In Redux, we call it a state. Whenever we need to look at the recorded time, we ask for the state, just as we were to ask for the notebook.

The altered/updated state is the final product being delivered to us from Redux, finally being delivered to the user.

While this explanation is very simple and high level, it's important to grasp the overall flow and cycle of how Redux works.

Redux can sound tricky and daunting at first, but if broken down and related to real world concepts, it can be quite manageable, understandable, and eventually, quite useful.
