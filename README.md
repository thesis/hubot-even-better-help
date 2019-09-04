# hubot-even-better-help

[![Build Status](https://travis-ci.org/AlexandreServies/hubot-even-better-help.svg?branch=master)](https://travis-ci.org/AlexandreServies/hubot-even-better-help)
[![npm version](https://badge.fury.io/js/hubot-even-better-help.svg)](https://badge.fury.io/js/hubot-even-better-help)

### A much more friendly help command.

hubot-even-better-help provides a better help experience than the out-of-the-box hubot standard help.
Command options are organized by the script in which they are found, which reduces noise when a user is trying
to figure out what hubot can do.

```
bob  > hubot help
hubot> bob: I can do a lot of things!  Which would you like to know more about? You can say:  

* hubot help hangouts - Create hangouts with Hubot.  
* hubot help meme - Get a meme from http://memecaptain.com/  
* hubot help pugme - Pugme is the most important thing in life  
* hubot help maps - Interacts with the Google Maps API.  
* hubot help rules - Make sure that hubot knows the rules.  
* hubot help rss-reader - Hubot RSS Reader  
* hubot help youtube - YouTube video search  
* hubot help shipit - Rodent Motivation  


Or you can see all commands by typing `hubot help all`.

```

If you have a robot alias set, the alias will display instead of the robot name.

```
bob  > \help
hubot> bob: I can do a lot of things!  Which would you like to know more about? You can say:  

* \help hangouts - Create hangouts with Hubot.  
* \help meme - Get a meme from http://memecaptain.com/  
* \help pugme - Pugme is the most important thing in life  
* \help maps - Interacts with the Google Maps API.  
* \help rules - Make sure that hubot knows the rules.  
* \help rss-reader - Hubot RSS Reader  
* \help youtube - YouTube video search  
* \help shipit - Rodent Motivation  


Or you can see all commands by typing `\help all`.

```



The user can dive in deeper by specifying the name of the script or module in which the commands are defined:

```
bob  > hubot help meme
hubot> bob: Get a meme from http://memecaptain.com/  

* hubot <text> (SUCCESS|NAILED IT) - Meme: Success kid w/ top caption  
* hubot <text> ALL the <things> - Meme: ALL THE THINGS  
* hubot <text> TOO DAMN <high> - Meme: THE RENT IS TOO DAMN HIGH guy  
* hubot <text>, <text> EVERYWHERE - Meme: Generates Buzz Lightyear  
* hubot <text>, AND IT'S GONE - Meme: Bank Teller  
* hubot <text>, BITCH PLEASE <text> - Meme: Yao Ming  
* hubot <text>, COURAGE <text> - Meme: Courage Wolf  
* hubot Aliens guy <text> - Meme: Aliens guy  
* hubot All your <text> are belong to <text> - Meme: All your <text> are belong to <text>  
* hubot Brace yourself <text> - Meme: Ned Stark braces for <text>  
* hubot I don't always <something> but when i do <text> - Meme: The Most Interesting man in the World  
* hubot IF <text> THAT'D BE GREAT - Meme: Generates Lumberg  
* hubot IF YOU <text> GONNA HAVE A BAD TIME - Meme: Ski Instructor  
* hubot IF YOU <text> TROLLFACE <text> - Meme: Troll Face  
* hubot If <text>, <question> <text>? - Meme: Philosoraptor  
* hubot Iron Price <text> - Meme: To get <text>? Pay the iron price!  
* hubot MUCH <text> (SO|VERY) <text> - Meme: Generates Doge  
* hubot Not sure if <something> or <something else> - Meme: Futurama Fry  
* hubot ONE DOES NOT SIMPLY <text> - Meme: Boromir  
* hubot WHAT IF I TOLD YOU <text> - Meme: Morpheus "What if I told you"  
* hubot WTF <text> - Meme: Picard WTF  
* hubot Y U NO <text> - Meme: Y U NO GUY w/ bottom caption  
* hubot Yo dawg <text> so <text> - Meme: Yo Dawg  
* hubot khanify <text> - Meme: Has Shatner yell your phrase  
* hubot pun | bad joke eel <text> / <text> - Meme: Bad joke eel  
* hubot pun | bad joke eel <text>? <text> - Meme: Bad joke eel

```

The module also responds to mentions or greetings in order to introduce itself, so that new users can discover hubot
and learn what it can do

```
*sally has entered the room
bob  > Hi sally!  Welcome to the chat.  If you need help with anything you can always ask hubot.
hubot> Hi, I'm hubot.  Nice to meet you!
You can ask me a question by typing my name, or even direct messaging me!
Try it now by typing this:
`hubot help`

sally> hi hubot
hubot> Hiya!  Want to ask me a question?  Just type `hubot help or \help`
```

hubot-even-better-help accomplishes all this by re-implementing the parsing logic of Hubot.  Normally Hubot parses
the header files of scripts and then combines all the commands in one array.  hubot-even-better-help instead maintains
an associative array of module names to commands, and combines them on the fly.  This allows to to reduce a lot of
noise when you start including a significant number of modules, or those modules like "hubot-memes" which have a lot
of commands.

## Installation

In hubot project repo, run:

`npm install hubot-even-better-help --save`

Then add **hubot-even-better-help** to your `external-scripts.json`:

```json
["hubot-even-better-help"]
```
