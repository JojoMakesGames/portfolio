---
title: ROGUEbot
publishDate: 2023-04-06 00:00:00
img: /assets/RogueBot.png
img_alt: Pearls of silky soft white cotton, bubble up under vibrant lighting
description: |
  Entry for my very first game jam.
tags:
  - Game Dev
  - Godot
  - Learning
---


## ROGUEbot

Itch.io url: https://sabertooth-software.itch.io/rogue-bot

#### What is a Game Jam?:

A Game Jam is essentially a Hackathon, but for games. In this case, my friend and I had one week to 
finish a video game set to a certain theme. In this case, it happened to be *Robots*.

#### Our Game Idea:

In ROGUEbot, we thought it would be fun to create a scenario where you are a robot who wants to cause
pure chaos. The idea was that you are able to *hack* other robots. So we created a car, a security bot, and a player robot.
The security bot's soul purpose in life is to destroy any ROGUEbots on the loose. However, if you get a 
security bot to half health, you can hack them and cause more chaos!

How does a player cause chaos? Well, due to time constraints, barrels were just placed around the city, which give points
on destruction.

##### What we did well:

1) We had little to no experience with the Godot engine, so figuring all that out in this jam was a fun challenge
2) There is an actual level
3) I did all the coding for this project and am mostly proud of what was done. It started out great, with a state
machine for controlling player states of moving/jumping/etc. However, as the time ran down it got a bit more hectic
and the code quality dropped. I also learned more about signals in Godot, which I would use more in a future iteration.
4) My friend did a great job importing all of the assets into Godot. It was a bit different from unity, which is what he 
was used to
5) WE FINISHED A GAME. I think this alone is an amazing thing. Getting the ball rolling is the hardest step in any process

##### Missing Features:

Some glaring ommissions were made to meet the time crunch. Unfortunately, I had prior committments on the weekend,
so it was more a 4 day game jam.

1) There is no clear UI for the player to know what the objective is
2) There should be an indicator on what you can posses
3) The camera is as barebones as it can be.
4) The AI could be improved to be more fullfledged and have more of the I in AI

#### A short review of Godot

First of all, I love Godot. I think it's an amazing, lightweight engine. The node structure is fantastic
for thinking like a developer. One thing I found myself falling into was doing some OOP patterns which I 
think aren't always the right fit here. I belive Composition over inheritance to be a bit cleaner when 
designing the code architecture.

The event system, dubbed signals, is really neat and easy to use. I used a pattern where I had a singleton
script that I could reference globally which stored a few important signals that could be shared between
"unrelated" entities. This really helped decouple a lot of the systems in the game without making it much
harder to read.

The built in code editor is great when using GDScript, the built from scratch programming language for Godot.
GDScript itself was really easy to use. It shares a lot of features many modern programming languages have. I would
say it's closest to Python if you had to delineate. Types aren't required, but in my experience, types make future development
infinitely easier. 

### Closing Remarks

I would recommend a game jam to any aspiring game dev. It was a great learning experience and something I will always
remember fondly with my co-creator/friend. I'm planning on doing a game jams in the future as a way to level up
my game development chops. Who knows? Maybe one day I can create my own indie game studio and live that indie 
game dev dream.

Link to project repository: https://github.com/JojoMakesGames/Rogue-Bot

