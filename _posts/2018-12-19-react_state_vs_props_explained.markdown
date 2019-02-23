---
layout:     post
title:      "React: State vs Props Explained"
date:       2018-12-19 01:53:05 +0000
permalink:  react_state_vs_props_explained
author:     Josh Cesana
minutes:    4
tagLine:    A beginner's guide to understanding React state vs props.
---

# React: State vs Props Explained

As I study React more and more, I discover the importance of props and state, and more importantly, how to use them correctly and effectively. Let’s try to boil them down to their core uses, and also talk about the best times to use each one.

First, let’s quickly summarize React in a nutshell: React is a powerful front end development library used for creating interactive user interfaces that relies on the creation of small chunks of reusable code, called components. To pass information between the components, we can use either props or state.

Now let’s dig in...

### What are props?

Props (short for properties) can be viewed as a component’s configuration. Props can not only be data, but can also be callback functions.

Since React has a uni-directional data flow, props are passed from the parent component down to the child component.

Props are immutable (cannot or should not be altered) as far as the receiving component is concerned. This makes props fixed throughout its lifecycle.

### What is state?

State is more for data that we know is going to be changing over time. State is not passed from parent to child like props. Rather, state is created, used, and modified inside the component itself.

State can be looked at as a component’s ‘private’ information. Besides setting it’s initial state, a component has no business messing with the state of its children components.

State starts with a default value when a component first mounts. Then over time, the state can be changed, most likely due to a result of user events.

State is optional, and we should look to avoid having too many components with it, as they increase complexity and reduce predictability.

### Stateless Components

These are, you guessed it, components without state. These components most likely only contain props, and a render function.

Their logic revolves around the logic they receive (as props). These components are very easy to follow and test.

### Stateful Components

These components contain both props and state. These are good to use when your component must retain some state over time.

### When to use one over the other?

If we know that the data will never change over time, props is your choice. Since props are static, these would be good for configuration type settings that we know will never change over time. Remember, props are not changeable.

When we have data that we know will be continuously changing, most likely from user interaction, we should rely on state. State will be contained within its own component. An example of state would be a user typing in a search bar. The state continuously changes with every key stroke. Remember, state is changeable.

I hope reading this has shed light on distinguishing between props and state. Knowing when and when not to use them can greatly improve your React application!
