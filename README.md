# Notesy Personal Project

## Coding Day 1
First view created. I ended up changing out some of the colors I initially chose. All the file structures are there. Routes file is set up as well as the Auth and Header (partially) components. CSS for App, Auth and Header basically perfected. Registering and logging in should be functional but they haven't yet been tested. I attempted to work the responsive design for smaller screen adjustment, but the developer tool is making it look weird despite saying the dimensions are correct. Once I have more back-end coding done I'll try to figure it out and/or ask in the Q if this is actually normal.

## Coding Day 2
Did the JS and CSS for the dashboard view, I haven't yet seen it due to complications with Authentication. I filled out the controllers and endpoints, but the issue seems to be coming from the fact that I can't have the fields for login and registration in the same view, because the separate email and password fields are treated as clones; anything I type in one email field appears in the other, which also happens with the password fields. On day 3 I will have to seperate them similar to the MemeMountain project demonstrated by Matt. Shouldn't be too hard. I'll probably have to create the editor view before dashboard can be tested so I can ensure that saved notes appear on the dashboard. Despite all of today's problems, I think this project is really coming along!

## Coding Day 3
Defeated the authentication error! Turns out the database already contained a "users" table from a prior project so I needed to give a different name to this one. I ran into another error after this that I suspect was caused by the salting/hashing process making the password too long for the database to accept, so I bumped up the character cap by 200, some nice wiggle room. I also redid the setup for the authentication so it switches from login to register and back at the click of a button, rather than have both on screen together.

## Coding Day 4
Found a surprise login error that was a simple typo in the controller. Realized I hadn't written the route for the dashboard so did that. Rest of the day was spent learning how to make a rich text editor (still working on that).

## Coding Day 5
The rich text editor is now present in the editor component, and clicking the "Create a Note" button in the dashboard opens it! Figuring out a working method took longer than expected, but that's find. Hopefully using CKEditor counts as an additional technology and can net me some more points.