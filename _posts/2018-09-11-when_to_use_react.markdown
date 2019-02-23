---
layout:     post
title:      "When to Use React"
date:       2018-09-11 02:22:05 +0000
permalink:  when_to_use_react
author:     Josh Cesana
minutes:    5
tagLine:    A beginner's answer to 'should I use React for this project'?
---

# When to Use React
React has proven to be a powerful library that has taken the development industry by storm since its open source release in 2013. Originally created by Facebook and Instagram developers, React was use internally to create responsive user interfaces. Since its release, it has grown in popularity and is now a powerhouse in the JavaScript world.

Although not a framework (like Angular or Vue), React is a library - a frontend library more specifically. It is simple and quite easy to learn. React can also be combined with many other third-party libraries to allow for powerful capabilities. React is focused on building user interfaces that are complex and responsive web applications.

### Does my project need React?

Not every project needs to be built using React. If the project is quite simple (no state changes) then writing directly with JavaScript and HTML would be the way to go.

However, if the project involves many components and has many different state changes (active/inactive navigation items, expandable/collapsible sections, dynamic inputs, active/disabled buttons, user logins and access permissions) then the project may be more suitable for React.

### Efficiency

React is extremely efficient with changes. React keeps a virtual copy of the pages of the DOM behind the scenes (Virtual DOM). When a change occurs (such as a state change that changes a button's color, for example), React compares the current DOM with the incoming changes and is careful to update only what has changed. Thus, this causes the browser to only re-render the small part of the page that has changed (in this case, the button's color instead of the entire page).

This makes React much more efficient and is perfect for complex applications with many changes occurring frequently.

### Components

Reusable components are the backbone of building in React. You can create components that can be called upon at any time, be combined, or be nested with other components. This then saves time in development, since you can simply recall components that have already been created. Components can be reused in multiple places throughout the application.

This also speeds up changes or updates, since the component needs to be altered in one place, and takes effect wherever the component is used all throughout the application.

React components can be thought of as simple, contained building blocks that are used to build something large and complex.

### JSX

JSX allows you to mix your HTML directly into JavaScript without the need for separate files. This then allows you to organize your code based on logical concerns, rather than the language used.

### Redux

React gets very powerful when combined with other libraries, such as the popular Redux.

Redux allows you to provide a single state container where all your application data is kept, rather than React's native technique of passing it down to child components. While simple, continuously passing to components can become cumbersome and unnecessarily complex.

This allows a single source of truth for your application's state. This makes it easier to observe and manipulate data.

React will only re-render with any change made in the data container.

### Community & Support

React's has a large user base. Additionally, React has active support from the engineers at Facebook. React is continuously growing and is an ever-evolving library.

It has always been quite easy to find React tutorials online due to its growing popularity.

React has developer tools that allow you to see exactly what is going on in your application in real time, including observing the virtual DOM. This makes it quite easy to diagnose problems and double check everything is working as intended.

### Conclusion

I hope that this has helped shed some light on React as a whole. React is a very powerful and useful library when it correctly meets the need of your project. What's great is that it quite easy to learn due to its simplicity.

And it's large community and network of support allow you to grow in to a React master!
