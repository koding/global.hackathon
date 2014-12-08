No Pilots, No Demos presents...

# ToSBot
## A Neural Network that Reads Legal Pages for You

* Koding URL: http://aphelionz.koding.io
* Client Github URL: https://github.com/npnd/global.hackathon/tree/master/Project
* Server Github URL: https://github.com/aphelionz/ToSBotNeuralNetwork

Note: There is a mirror of the client and server code in the src subfolder of our team folder as well.

### Summary

tl;dr? watch the video.

ToSBot is an app that reads ANY Terms of Service page and alerts you to potential legal, moral, and ethical issues that may exist within. Powered by a neural network seeded by the fantastic dataset at http://tosdr.org, this app learns as it goes and improves itself to give you more accurate results.

That being said, we encourage human input by providing a "feedback" mode which allows people to give feedback on whether the privacy policy or terms of service is better or worse in regards to the concern we raise. For example, if our machine says a particular ToS doesn't allow users to delete their data, and the language is unclear or even the opposite, we make it easy for a user to tell us that. 

### How our particular Neural Network Works

1. A corpus of text was gathered via ToSBack (thanks to EFF and ToSDr.org)
2. The corpus was tokenized, or split into its consituent wordlike parts.
3. For each document each token was ranked according to its frequency in the corpus at large.
4. These document-specific lists of tokens were then sorted in descending order to create a signature
5. The network was trained using "known" human-generated analysis of the legal pages provided by ToSDR.org
6. Using the combination of the sorted token analysis, and the legap page analysis, the network was trained.
7. From this point, each NEW document is analyzed and analysis points are probabilistically determined.
8. Also, each new document is added to the corpus, and thus the machine learns anew.

### APIs Used
* Short URLs are generated via RuGu Shrink URL shortening API (provided by Mashape)
* All feedback from "Feedback Mode" are captured via Sprint.ly tickets
* APITools is used to track all API calls
* nginx powers the HTML/CSS/JS in the Web folder of the Koding 
* Count.ly username: info@npnd.com
* ODesk username: nopilotsnodemos (member since 2010)

About No Pilots No Demos
===========================

| aphelionz (Mark) | skybondsor (Jordyn) |
|--- |--- |
| ![aphelionz](https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/429397_10151321831125069_2084122506_n.jpg?oh=ab41ad0750b749a532bbd8f2d3f5a9cd&oe=550E92A4&__gda__=1423315627_a25fd60398c2cba46cb88530c5358420) | ![skybondsor](https://scontent-a-iad.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/1392014_10151601758896266_672020922_n.jpg?oh=20ae0c38af31d7c017a699a3a8fbe0a1&oe=550CD680) |

Jordyn and Mark have been coding separately for a combined 26 years, and together both on and off the job for over 5 years. We initially joined the hackathon because of the opportunity to do something based on climate change. However, when the topics were announced, we both felt drawn towards the privacy policy / terms of service topic. 


