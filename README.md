## React Quiz App

**Functionalities:**
1. Authentication: Users have to signup with email and password to play quiz.
2. Quiz Q&A: There are several youtube videos thumbnails on the home page. The user can pick any one and start playing quiz on the topic of the video. Only loggedin user can see the quiz and play. If not logged in, will be redirected to the login page.
3. In the quiz page there's a miniplayer at bottom right corner where the video that the quiz is about can be played.
4. There's a progress bar at the bottom of the quiz app that tracks the progress of the user in the quiz.
5. Score and evaluation: After submitting the quiz score is displayed with a photo portraying the good/avg/bad result. Also, there's a question analysis where user can see the camparison of his/her answer with the correct ans.

**Technologies used:**
1. Frontend: React, React Router version 6
2. Database: Firebase Realtime Database
3. Authentication: Firebase
4. Others: i. Used Pexels.com api for fetching picture that is relevant with the score. Positive vibe pictures shown when the score is good. Negative pictures are shown when score is low. ii. Used react-player for playing video in the miniplayer. iii. Used react infinite scroll component for loading display part by part/infinite scroll
5. Netlify: for deployment

Live link of the site: [React Quiz App](https://react-quizapp-by-dewan.netlify.app/)
