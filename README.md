# Friday 
## :trophy: StormHacks2022 - Best Use of Google Cloud & Audience First Choice

## :star: Inspiration
Depression is a common illness worldwide, with estimately 280 million of the population affected. One of the ways to deal with any overwhelming emotion is to find a healthy way to express yourself. This makes a journal a helpful tool in managing your mental health. Journaling can help you manage anxiety, reduce stress. When you have a problem and you're stressed, keeping a journal can help you identify what’s causing that stress or anxiety. Once you’ve identified your stressors, you can work on a plan to resolve the problems and reduce your stress.
 
<img width="1437" alt="Screen Shot 2022-02-20 at 01 52 24" src="https://user-images.githubusercontent.com/59659987/154886601-cfba21bb-c5a6-48d1-ad62-0b714305ce07.png">



## :iphone: What it does
Friday is a web app that helps users overcome depression and it allows users to write journals either by typing or using speech-to-text. It performs sentiment analysis on the journal and identifies entities that you feel positive, neutral, and negative about. It also conveniently provides a standard depression screening for you to test.

<img width="1437" alt="Screen Shot 2022-02-20 at 01 52 39" src="https://user-images.githubusercontent.com/59659987/154886487-46388340-327c-4642-810d-a0893e828911.png">



## :computer: How we built it
We used React.js to bootstrap the web application. The project is mainly implemented using javascript, css, html, and typescript. Authentication with email/password and google login is set up with the help of Firebase and Firestore. We used express.js as our backend and it hosts servers for Google NL api and Assembly AI requests. In addition, the speech-to-text feature is built using AssemblyAI Transcription API. Sentiment and entity analysis is done with Google NL API. 


## :hourglass: Challenges we ran into

On the technical point of view, we ran into challenges including communicating between frontend and backend in our application, user interface design, using public API to analyze input data, etc. To solve technical difficulties, we collaborate through meetings and help each other. Researching online for similar problems/solutions is also very helpful throughout the process. 
On the non-technical side, the most of the concerns are from the concept of our application and how to integrate the technologies into real-life situations where our application can really make a difference to people that require help. To overcome that challenge, we did lots of research on mental health and illnesses, in order to find an easy and relaxing way for our users to identify mental illness by writing journals and answering simple questions with respect to their daily behaviors. And based on those data, we managed to run analysis, diagnosis, give them proper recommendations, and help them move further and further from suffering mental disorders.
<img width="1440" alt="Screen Shot 2022-02-20 at 01 40 52" src="https://user-images.githubusercontent.com/59659987/154886702-ef381886-d1a5-4c13-8852-dca641e7c26d.png">

## :memo: Accomplishments that we're proud of
Completed the project from zero to 100% within 24 hours.
Communicated and collaborated well within the team.
Learn lots of amazing technologies.
Fix bugs on our own by self-learning and researching

## :mortar_board: What we learned
We learned a lot about React.js and Express.js and also how to integrate Google NL API, Firebase and AssemblyAI seamlessly into our web application.


## :mag: What's next for Friday
Deploy the website on a public domain name with Google Kubernetes Engine
Add features called “diary” to save user’s history journals
Save user’s profile and diary information in the database
Gather personal data from journals and quizzes for each user,  and train a machine learning model to evaluate the mental condition for individuals, as well as track their improving curve using our application.

<img width="1439" alt="Screen Shot 2022-02-20 at 01 38 05" src="https://user-images.githubusercontent.com/59659987/154886715-9327b962-ee51-4ed5-b46e-042d3a72bfb3.png">

## :dash: How to run it
1. In order to run our application, you will need to obtain a Key from a google cloud project and add that to your local environment variable. Check here for detailed description https://cloud.google.com/docs/authentication/getting-started. 
2. You will also need Firebase config, replace it with the one in src/helpers/AuthManager.js
3. After the key is added. cd to Friday/backend and run `npm install`, then run `npm start` to start our backend server on `http://localhost:5000`
4. cd to Friday/friday, run `npm install` and `npm start` to start our application. If it didn't start automatically, please go to `http://localhost:3000` on your browser.
5. Now you are ready to use it!

<img width="1439" alt="Screen Shot 2022-02-20 at 01 54 30" src="https://user-images.githubusercontent.com/59659987/154886688-d8bf5e3e-821e-4f19-8594-37309e30aea9.png">


