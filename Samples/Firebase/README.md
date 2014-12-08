## Cloud Chat Demo
Cloud chat is a realtime chat demo powered by [Firebase](https://www.firebase.com/). This example demonstrates how easy it is to create a realtime multi person chat client with javascript, html, and css. View the [live demo](http://firebase.github.io/cloud-chat/).

![Preview of Cloud Chat](http://firebase.github.io/cloud-chat/images/demo.jpg)(http://firebase.github.io/cloud-chat/)

## Basic Development
To use the demo follow the steps below:

1. Download or clone this repo
2. Open js/chat.js and replace the Firebase URL with one from your own account. You can [sign up for free](https://www.firebase.com/).
3. Open index.html in your browser and have fun!

## Advanced Development
This repo includes a great [gulp](http://gulpjs.com/) build process. If you run  [gulp](http://gulpjs.com/) the sass with get preprocessed, auto prefixed, minified, and opened automatically in your browser (Chrome). The page will also auto refresh anytime you make changes to js, scss, html, or images. This makes development fast and easy. To setup this environment please follow the steps below:

1. Download or clone this repo
2. Make sure you have [node.js](http://nodejs.org/) installed.
3. From the command line in the root of the cloud-chat directory run ```npm install``` or ```sudo npm install``` (depending on your system permissions).
4. When that process successfully completes, on the command line run ```gulp```. When gulp is finished it will open a browser with the Chat Demo.
5. Anytime you modify files (scss, html, js, images) and save your changes the demo page will reload automatically! *Note: this does not apply to css, css is compiled from the Sass file. Edit the Sass file not the css file ;)*


## Photography License
The background photo used was taken by Brocken Inaglory and is available under the Creative Commons license.
For more information on this photo and acceptable use please visit [Wikimedia Commons](http://commons.wikimedia.org/wiki/File:Golden_Gate_Bridge,_San_Francisco_and_Sutro_Tower.jpg).


## Repository License
MIT - [http://firebase.mit-license.org](http://firebase.mit-license.org)