---
title: Bunker Buster
publishDate: 2023-05-25 00:00:00
img: /assets/bunker-buster.png
img_alt: Pearls of silky soft white cotton, bubble up under vibrant lighting
description: |
  Second Game Jam!
tags:
  - Game Dev
  - Godot
  - Learning
---


## Bunker Buster

Itch.io url: https://sabertooth-software.itch.io/bunker-buster

#### Game Jam Theme:

A Game Jam is essentially a Hackathon, but for games. We had one week to create a game based on the theme: 
*Less is more*

#### Our Game Idea:

The obvious answer for less is more is golf. The lower your score, the better. We wanted to take that simple concept
and add a twist to it. So we decided to make a golf game that is combined with a tank game. Initially, you battle on a golf 
course as a tank. Every single shot you take is a stroke, as well as every time you get hit. Then, you transition into a
golf game, where you have to finish the hole with the least amount of strokes possible. Add up the two scores, and you have
your final score.

The twist was that the tanks that you destroyed in the tank game would be obstacles in the golf game. So you would have to
navigate around them to get to the hole. It was a fun concept to build out. We got a 9 hole course done and I'm honestly very proud
of what we could do in a week.

##### What we did well:

1) Definitely improved on iteration speed from the last game jam
2) 9 fully featured holes with different designs and obstacles
3) The code is in a place where it could honestly be extended fairly easily. Everything was split out in a much more composable way
where there wasn't much "spaghetti code"
4) Every single thing in the game was custom made. We didn't borrow a single asset this time
5) Obligatory "we finished the game" comment

##### Missing Features:

Some glaring ommissions were made to meet the time crunch. Unfortunately, I had prior committments on the weekend,
so it was more a 4 day game jam.

1) We wanted to include a mechanic where you could destroy blocks with a tank shot. This would allow you to create your own path
to the hole. There would be a lot of added strategy with this as you trade off a tank shot to hopefully save multiple golf strokes.
2) The collision with water and sand on corners is bad. It's a known issue and we just didn't have time to fix it.
3) We did a lot better building out the game and testing as we went, but didn't have outside feedback and ended up having some poor
UX due to that. I'm not sure Game Jams can escape this, but we should try next time.
4) I didn't realize that a web game couldn't use GPU particles (I thought WebGL or WebGPU would allow it), so I had to take
every particle we made out last second so that it didn't crash in the browser. This was a huge bummer as I spent a lot of time
making the particles look good.

### Closing Remarks

I think round 2 went really well. It really made me think that I can make a career out of this. At the end of the day, it's hard 
work and the desire to keep improving that will get me there. The next project we are giving ourselves 3ish months to build a game. 
Hopefully it'll be a much more polished experience. We've got a lot more experience than a couple months ago.

Link to project repository: https://github.com/Sabertooth-Software/Bunker-Buster

