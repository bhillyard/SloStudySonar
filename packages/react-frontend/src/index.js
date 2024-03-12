import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import StudySpacePage from './pages/StudySpacePage';
import Dashboard from './pages/Dashboard';
import FavStudySpots from './pages/FavStudySpots';
import Reviews from './pages/Reviews';
import YourSessions from './pages/YourSessions';
import ViewStudySpacePage from './pages/ViewStudySpacePage';
import StudySessions from './studysessions/StudySessions';
import StudySessionPage from './pages/StudySessionPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "signup",
    element: <SignupPage/>,
  },
  {
    path: "login",
    element: <LoginPage/>,
  },
  {
    path: "studySpaces",
    element: <StudySpacePage/>,
  },
  {
    path: "dashboard",
    element: <Dashboard/>,
  },
  {
    path: "FavStudySpots",
    element: <FavStudySpots/>,
  },
  {
    path: "Reviews",
    element: <Reviews/>,
  },
  {
    path: "YourSessions",
    element: <YourSessions/>,
  },
  {
    path: "ViewStudySpace",
    element: <ViewStudySpacePage/>
  },
  {
    path: "StudySessionPage",
    element: <StudySessionPage/>
  },
  {
    element: <NotFoundPage />, // Not found page doesn't work
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
