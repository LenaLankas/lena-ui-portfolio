---
title: Projects
slug: /projects
---

# Fytt App Remake 

<!-- TODO the beginning repeat stuff, better headers, more images/iframes -->


## User Story (the origin):

Beep Beep Beep! Sarah, a D1 athlete at UNL, smacks the snooze button and rolls over. A minute later, she comes to her senses and opens her eyes. She feels around her bedside table until she finds something shaped like an iPhone. She clicks the power button and is alarmed by three things: her brightness is all the way up, her phone is at 12%, and lift is in 15 minutes!
	
Sarah scrambles to find her team t-shirt and runs out the door — protein bar in hand — with only a few minutes to spare. She speeds to the stadium and runs up the stairs to catch her teammates. As she walks through the doors of the weight room, she glances at the clock. 5:58 am. The sun won’t be rising for another hour or two, and she already wants to go back to bed. The only thing that can make this morning more dreadful is hearing the words “alright, open the FYTT app”...and yet those are the words that come out of her strength trainer’s mouth only 30 seconds later.
	
Don’t get me wrong, this nifty little app is better than last year’s procedure. Her team used to go to lift everyday with no clue as to what may be in store. As they were warming up, they could see their trainer scribbling on a white board. He then walks them through each exercise one-by-one and sends them on their way. This method wouldn’t be too bad if Sarah had photographic memory…but she doesn’t. She would find herself walking all the way across the weight room to remember what exercise comes next. “Trap bar deadlift, 90/90 w/ IR”. She walks back to the racks. Wait…how many reps is it? She walks back over to the whiteboard. 12. She walks back to the racks. Wait…how many was it again? Oh yeah. 10. She thinks. She looks down at the bar and can’t seem to remember what weights she put on last week. Whatever. She throws a plate on each side and calls it a day. She completes her 10 (or was it 12?) reps and moves on to the next exercise. Wait…what was the next exercise? Sarah asks her teammate. 90/90 with internal rotation. Sarah then asks what the heck 90/90 with internal rotation means. Her teammate shrugs. “I haven’t gotten there yet and I lowkey don’t remember”. Sarah calls her coach over. He scolds her for not paying attention, but then shows her. “Oh, right, thanks…Oh wait! How many reps?”. “Go read the whiteboard”. She begrudgingly trudges over to the whiteboard. And so this cycle repeats. What should be a 45 minute workout turns into 70 minutes of mental (and physical) overload. 

Sarah’s brain isn’t meant to store all this information. And certainly not this early. And certainly not when she has a big econ exam today that she stayed up all night studying for. How is she supposed to remember her reps when her brain is too busy thinking about the cross-price elasticity of demand?

Enter the FYTT app. A nifty little software for planning, previewing, and tracking workouts. The app has all the features. Sarah can view her workout for the day. She can watch exercise demo videos. She can enter her weights used. She can look up her lifting history. It checks all the boxes. So what’s the issue? The process. She can do all these things, just not very easily. It takes 5 clicks to input that she benched 30s. It’s 6:02 am. There is no reason she should be thinking about UI this early. 


## What's wrong with the app as is? 
As a member of the dance team, I have required weight training every Tuesday and Thursday at 6am. Although I enjoy the workouts, the communication and tracking can be a pain: 


- The old fashioned way of reading your workout on a whiteboard increases your cognitive load and makes for a less efficient workout
- Without a tracking system, you have to memorize your weights from week to week which increase cognitive load, leaves room for user error (bad memory), and results in less weight progression
- Tracking on pen and paper takes up space on pen and paper and makes aggregating information difficult
- Using a mobile application to display workouts and store workout history would make for a better experience
- However, the current leader in this space, FYTT, has a very clunky UI that leads to frustrations in other areas



That’s why I decided to remake the FYTT application, but with a more environmentally and user friendly UI. I was Sarah. This, and my access to athletes and athletic trainers, made me the perfect candidate to take on this redesign. I’m constantly surrounded by the target user: an athlete completing a workout template given to them by their trainer. Throughout the process, I was able to ask questions and get feedback on iterations of my prototype. After all, the ultimate goal is to improve their workout experience.

## What's different about this redesign?
My UI was centered around two values: Achievement and Order. My teammates and I want to get the most efficient workout possible while leveling up our athleticism. We want to spend less energy entering our weights, and more energy pushing those weights. To facilitate achievement, I made sure the UI was very progress oriented. The history tab enables users to easily view their past achievements in certain workouts and help them gauge their progressive overload schedule. The trAIner tab summarizes progress and will give workout suggestions to help users take their workout to the next level. Part of achievement is also accountability, which is why throughout the interface there are clear indicators of completion and reminders to help encourage along the way (email and push notification opt-ins). The use of red sparingly throughout the interface is meant to be a symbol of accomplishment (start workout button, completed workout icon, PRs). To promote the value of order, I aimed to make the UI intuitive structurally and symbolically. I wanted limited copy/text so as to not distract the user and make sure only the most important sections were called out, but the trade-off to this is that it requires a very intuitive UI. The issue with the FYTT app as it is currently implemented, is that there is a lot of nesting and content shifting throughout. It makes for awkward workflows and an overwhelming number of clicks. My redesign was meant to be simple. It just needs to do the job. Users need to be able to see their workout, enter their weights, and retro as needed. No extra fluff.
	
<img src = "..//img/FYTTstructure.jpeg" width="100%" />
<img src = "..//img/FYTTsketch.jpeg" width="100%" />

This early strutcure map and sketch showcase a clear focus on achievement and order, while also optimizing the workflow. The original workflow only showed one day per page, meaning if I wanted to see a workout a week in advance, I had to click the next arrow seven times. There was no concept of a high level overview. Focusing my homepage around a calendar that shows progress and previews workouts was a fundamental part of the redesign. Inside the actual workout workflow, the original design had very small text and each workout was hidden below a drop down which then popped up the native keyboard and shifted the content. My redesign includes a built-in keyboard to address the shifting. The larger texts and icons makes the workout more digestible. You can see at a glance what kind of input is required of you (barbell=pounds, timer=time, etc). Naturally, there is a lot of text for describing the workouts, so I made sure to use a sans-serif font for accessibility. Overall, I believe these decisions ladder up to a much more efficient workflow that accomplishes all the same things the original application did, but in a more efficient way.

## How did the design evolve?
After I had my first iteration of the design, I was able to start user testing. I interviewed a mix of individuals: those who fell within my target population (workout under a trainer regularly) and those who didn’t (limited workout experience). Below are the tasks these individuals were given:
- You are a student athlete and arrive at your weight room in the morning. Your trainer isn’t there, but you see she left a note for you: “Complete your October 10th workout”
- You run into your trainer later that day at lunch and she asks you how much you benched. You respond saying…
- She then asks if this is an improvement from last Thursday, and if so, by how much. You respond saying…
- What sport are you currently part of?
- How many workouts have you completed? How many have you missed?
- Find similar workouts that you could do instead of a squat with a 3 second hold

The purpose of these tasks is to gauge the ease of finding information and completing basic components of a workout. The tests I completed validated that my workflows were sound. It was noted that completing a workout was very intuitive. The biggest problem throughout user testing was text color and size on some screens, specifically the preview. I made the font bigger after my first user test. I thought by my next one I would stop hearing that as a complaint. However, one user interview specifically inspired a change. The interviewee kept calling the information she was trying to find “the fine print”. The purpose of my application is to make information easy to find and review, so I had to make a change. You’ll notice throughout my different prototype iterations the text color gets progressively lighter (more contrast) and the font progressively larger. I continued this until the text stopped inhibiting my users from completing their tasks. I attribute much of this trial-and-error to FYTT being a mobile design. When working on my laptop everything looked great, but once viewing on an actual mobile phone was a completely different story.

<img src = "..//img/usertestingchanges.jpeg" width="100%" />

Another big change was switching up some of the content in the history and trAIner tabs. Originally called history and analysis, it was unclear to users which tab contained what information. Seeing how many workouts you completed could arguably be in history or analysis. I put it under analysis, but more often than not, my interviewees would look in history first for that information. For that reason, I moved it into history. However, it was still unclear what the analysis tab did. I renamed the tab to trAIner which helped direct traffic there, however after getting there interviewees didn’t have enough stamina to find the information hidden within the long paragraph.  To overcome this issue, I split up the relevant content and added headings to provide structure. Addressing font size and organization greatly improved the user experience and minimized confusion moving forward. After making those improvements, the only remaining stumbles can be attributed to my prototype not being built out to completion. I made some minor adjustments where I was able to make further testing more seamless (wiring up every edit button and creating a simple organization page so that there were less deadends). But other workflows were not in scope for this prototype which occasionally led to hiccups. Overall, the user tests and colleague assessments were super insightful. 




## So where's the final product?
I am very proud of the product that came out of this entire process. I showcased the redesign to my trainer and teammates and it was met with an overwhelmingly positive response. I encourage anyone who read this far to explore the embedded figma below. Use the dropdown in the upper left corner to see how this design changed and evolved over the semester.

<iframe width="800" height="600" src="https://embed.figma.com/design/1cQhzquNArojyOqv2LtuvV/FYTT-Remake?node-id=0-1&embed-host=share" allowfullscreen></iframe>
