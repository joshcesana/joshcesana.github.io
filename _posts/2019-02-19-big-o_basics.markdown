---
<<<<<<< HEAD
layout:     post
title:      "Big-O Basics"
date:       2019-02-20 01:53:05 +0000
permalink:  big-o_basics
author:     Josh Cesana
minutes:    9
---

Big-0 is essentially an equation that describes how the run time scales with respect to some input variables. While that may sound confusing at first glance, I assure you that after we are done here, you have will have a very good grasp of the basics of Big-O, and it's importance in development.

In other words, Big-0 is a way to represent how long an algorithm will take to execute. Let's go through a few examples of what I mean. But first, take a look here to get a better idea of what is good and bad (or excellent and horrible).
=======
layout: post
title:      "Big-O Basics"
date:       2019-02-20 01:53:05 +0000
permalink:  big-o_basics
---

Big-0 is essentially an equation that describes how the run time scales with respect to some input variables. While that may sound confusing at first glance, I assure you that after we are done here, you have will have a very good grasp of the basics of Big-O, and it's importance in development. 

In other words, Big-0 is a way to represent how long an algorithm will take to execute. Let's go through a few examples of what I mean. But first, take a look here to get a better idea of what is good and bad (or excellent and horrible). 
>>>>>>> 5dcd3dd69f76f9610a4c04c1de0caf58de3a89dc

![Big-O](https://i.imgur.com/LX1wKHY.png)

Source: http://bigocheatsheet.com/

## O(1) - Constant Time

Let's look at a couple of examples. If you take a look in the green zone ('Excellent') you'll see O(1). This is called **constant time**, meaning the constant time algorithm will always take the same amount of time to execute, regardless of the amount of input variables. Some examples of this would be...

#### pop() operations on an array

```
let numbers = [1, 2, 3]
numbers.pop(4)
```

<<<<<<< HEAD
No matter how big the array *numbers* is, the operation will always take the same amount  of time.
=======
No matter how big the array *numbers* is, the operation will always take the same amount  of time. 
>>>>>>> 5dcd3dd69f76f9610a4c04c1de0caf58de3a89dc

#### Retrieving a value from an array

```
let people = [ 'John', 'Sally', 'Frank' ]
let winner = people[1]
```

<<<<<<< HEAD
These fall in to the 'excellent' category of our chart because the number of input values can be few or many. The time to execute will never change.

## O(n) - Linear Time

Take a look at the 'fair' zone in our chart and you'll see O(n). First off, 'n' is just an arbitrary variable (although customary) and can be replaced by any variable you wish. O(n) is known as **linear time**, which means that the loop executes *N* numbers of times. The time will increase or decrease proportionaly in relation to the number of input variables.

A real world of example of this would sorting a pile of books in alphabetical order on a shelf. The bigger the pile of books, the more time it is going to take.
=======
These fall in to the 'excellent' category of our chart because the number of input values can be few or many. The time to execute will never change. 

## O(n) - Linear Time

Take a look at the 'fair' zone in our chart and you'll see O(n). First off, 'n' is just an arbitrary variable (although customary) and can be replaced by any variable you wish. O(n) is known as **linear time**, which means that the loop executes *N* numbers of times. The time will increase or decrease proportionaly in relation to the number of input variables. 

A real world of example of this would sorting a pile of books in alphabetical order on a shelf. The bigger the pile of books, the more time it is going to take. 
>>>>>>> 5dcd3dd69f76f9610a4c04c1de0caf58de3a89dc

An easy code example would be a standard loop.

```
for (let i = 0; i < N; i++) {
     // do something in constant time...
}
```

<<<<<<< HEAD
The higher *N* is, the more time it is going to take.
=======
The higher *N* is, the more time it is going to take. 
>>>>>>> 5dcd3dd69f76f9610a4c04c1de0caf58de3a89dc

## O(n^2) - Quadratic Time

That reads as 'O of n squared'. We are not in the 'horrible' zone in our chart when it comes to efficiency. Not only will the operations increase as *N* increases, *it will increase exponentially.*

<<<<<<< HEAD
A real world example of quadratic time would be going through a deck of cards to check for doubles. Each new card will force you to start the process over (unless you have a photogenic memory).
=======
A real world example of quadratic time would be going through a deck of cards to check for doubles. Each new card will force you to start the process over (unless you have a photogenic memory). 
>>>>>>> 5dcd3dd69f76f9610a4c04c1de0caf58de3a89dc

An easy code example of this would be nested loops. Each single iteration of the first loop will result in a total iteration of the second loop.

```
for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
				      // do something in constant time...
				}
}
```

<<<<<<< HEAD
Each 1 unit that *N* increases will cause 2 more loops to execute. This is extremely inefficient and is to be avoided at all costs, for obvious reasons.
=======
Each 1 unit that *N* increases will cause 2 more loops to execute. This is extremely inefficient and is to be avoided at all costs, for obvious reasons. 
>>>>>>> 5dcd3dd69f76f9610a4c04c1de0caf58de3a89dc

## O(Log n) - Logarithmic Time

Logarithmic time grows slower as *N* grows. A good way to check if a loop is *log n* is to see if the counting variable doubles instead of incrementing by 1. Here is a code example to help explain that concept.

```
for (let i = 0; i < N; i *= 2) {
        // do something in constant time...
}
```

While it may seem this is on the inefficient side, O(Log n) algorithms actually have excellent performance when it comes to large data sets:

![Log n](https://i.imgur.com/vVwg3SP.png)

Source: http://cooervo.github.io

## O(n * Log n) - Linearithmic Time

Linearithmic algorithms are also capable of good performance when it comes to large data sets.

A code example would be to combine a couple we have already learned.

```
for (let i = 0; i < N; i++) {  // linear loop  O(n)
        for (let i = 0; i < N; i *= 2) {  //  O(Log n)
                // do something in constant time...
        }
}
```

![O(n * Log n)](https://i.imgur.com/6Hlwbi1.png)

Source: http://cooervo.github.io

While we have only scratched the surface of Big O Notation, my hope is that you have a better grasp on the concept. If you would like to understand more, I recommend you take a look at some of the sources I used to study Big-O myself.

[Big O Cheatsheet](http://bigocheatsheet.com/)

[cooervo's Github repo: Algorithms-DataStructures-BigONotation](http://cooervo.github.io/Algorithms-DataStructures-BigONotation/big-O-notation.html)
<<<<<<< HEAD
=======







>>>>>>> 5dcd3dd69f76f9610a4c04c1de0caf58de3a89dc
