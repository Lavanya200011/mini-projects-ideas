// src/ProjectShowcase.jsx
import { useState } from "react";
import "./ProjectShowcase.css";

const projectIdeas = [
  // 🔹 Frontend-only
  {
    title: "Personal Portfolio Website",
    description: "Showcase your resume, skills, projects, and contact info.",
    working: "Acts as a digital CV/portfolio where people can explore your achievements and contact you.",
    making: "Build with HTML, CSS, and JS (or React). Add About, Skills, Projects, and Contact sections."
  },
  {
    title: "Quiz App",
    description: "Answer MCQs and see your final score.",
    working: "Loads questions, tracks answers, checks correctness, and calculates score at the end.",
    making: "Use JS arrays for questions. Render options with buttons. Update score in state/variables."
  },
  {
    title: "To-Do List",
    description: "Add tasks, mark them done, and delete.",
    working: "Tasks stored in array/state. User actions update the list dynamically.",
    making: "Use input + button for tasks. Save data in JS array or localStorage."
  },
  {
    title: "Digital Clock / Stopwatch / Timer",
    description: "Show time or track countdowns.",
    working: "Uses JS Date object for clock. setInterval() for stopwatch/timer.",
    making: "Create a digital display, buttons for start/stop/reset, and setInterval for updates."
  },
  {
    title: "Weather App",
    description: "Fetches live weather of any city.",
    working: "Takes city name → calls API → shows temp, humidity, condition.",
    making: "Use fetch() with OpenWeatherMap API. Display results in styled cards."
  },
  {
    title: "Calculator",
    description: "Performs basic arithmetic operations.",
    working: "Captures button clicks, updates input, evaluates when '=' is clicked.",
    making: "Build grid of buttons in HTML. Use JS for evaluation logic."
  },
  {
    title: "Typing Speed Test",
    description: "Measures words per minute & accuracy.",
    working: "User types given text → timer runs → compares typed vs original.",
    making: "Use JS event listeners to track typing. Calculate WPM and accuracy."
  },
  {
    title: "Flashcards Learning Tool",
    description: "Flip cards to learn definitions.",
    working: "Each card has front/back. Click flips to reveal answer.",
    making: "Use CSS transform for flip animation. Data from JSON/array."
  },
  {
    title: "Music Player",
    description: "Play/pause songs with playlist.",
    working: "Loads audio files, controls play/pause, next/prev.",
    making: "Use HTML `<audio>` element with JS controls."
  },
  {
    title: "Image Gallery with Filter",
    description: "Filter images by category.",
    working: "Images grouped by tags. Buttons filter visible items.",
    making: "Use CSS grid + JS filter logic. Assign categories to each image."
  },

  // 🔹 Local Storage
  {
    title: "Notes App",
    description: "Write and save notes in browser storage.",
    working: "Stores notes in localStorage so they persist on refresh.",
    making: "Use textarea + button. Save to localStorage. Render list of notes."
  },
  {
    title: "Expense Tracker",
    description: "Track income & expenses.",
    working: "User adds expense → updates total → shows balance.",
    making: "Use JS arrays & localStorage to track transactions."
  },
  {
    title: "Bookmark Manager",
    description: "Save website URLs with title.",
    working: "Stores links in localStorage and displays them.",
    making: "Form input for title+URL → save → render clickable list."
  },
  {
    title: "Login/Signup (LocalStorage)",
    description: "Fake authentication stored in browser.",
    working: "User details saved locally. Login checks localStorage.",
    making: "Create forms, validate credentials, store in localStorage."
  },
  {
    title: "Habit Tracker",
    description: "Track daily habits with streaks.",
    working: "Records yes/no for habits each day. Shows progress streak.",
    making: "Use localStorage to store progress. Render calendar UI."
  },

  // 🔹 PHP + MySQL
  {
    title: "Student Attendance System",
    description: "Mark and track attendance.",
    working: "Teachers mark attendance → DB saves records → Reports generated.",
    making: "Frontend form + PHP backend + MySQL DB to save attendance."
  },
  {
    title: "Library Management System",
    description: "Track book issues and returns.",
    working: "Stores book details, issue/return logs, and availability.",
    making: "PHP + MySQL to handle CRUD operations for books/students."
  },
  {
    title: "Event Registration System",
    description: "Students register for events online.",
    working: "Form submission saves participant data in DB.",
    making: "Form (HTML+PHP) → store in MySQL → admin can view list."
  },
  {
    title: "Online Voting System",
    description: "Students vote online for leaders.",
    working: "Each user votes once. Votes counted in DB.",
    making: "Login system in PHP + vote storage in MySQL."
  },
  {
    title: "Simple Blog Website",
    description: "Users can post and read articles.",
    working: "Posts saved in DB. Displayed in feed.",
    making: "PHP forms for posting. MySQL stores content."
  },
  {
    title: "Contact Form with DB",
    description: "Save contact messages.",
    working: "User submits form → stored in DB for admin.",
    making: "PHP handles form submission. MySQL saves message."
  },
  {
    title: "Online Feedback System",
    description: "Students give feedback to teachers.",
    working: "Feedback forms saved in DB. Reports shown to admin.",
    making: "PHP form + MySQL storage + results page."
  },
  {
    title: "Hostel/Room Allocation System",
    description: "Assign hostel rooms to students.",
    working: "Student requests stored → system assigns room.",
    making: "PHP backend + MySQL to handle allocation rules."
  },
  {
    title: "E-commerce Cart (Basic)",
    description: "Add/remove items and view total.",
    working: "Cart items stored in session/DB. Total calculated dynamically.",
    making: "PHP for session handling. MySQL for products."
  },
  {
    title: "Job Application Portal",
    description: "Students apply for jobs online.",
    working: "Applicants upload resumes. Admin reviews applications.",
    making: "PHP forms with file upload. MySQL for storage."
  },

<<<<<<< HEAD
    // 🔹 PHP + MySQL
    { title: "Library Management System", desc: "Add/remove books, issue/return, track availability.", category: "PHP" },
    { title: "Event Registration System", desc: "Students register for college events online.", category: "PHP" },
    { title: "Online Voting System", desc: "Vote online for class leaders, one vote per user.", category: "PHP" },
    { title: "Simple Blog Website", desc: "Users post and read articles online.", category: "PHP" },
    { title: "Contact Form with Database", desc: "Save contact form messages into DB.", category: "PHP" },
    { title: "Online Feedback System", desc: "Students give feedback to teachers, results stored.", category: "PHP" },
    { title: "Hostel/Room Allocation System", desc: "Assign students to hostel rooms.", category: "PHP" },
    { title: "E-commerce Cart (basic)", desc: "Add/remove products and view total.", category: "PHP" },
    { title: "Job Application Portal", desc: "Students apply for jobs, upload CVs, admin reviews.", category: "PHP" },
=======
  // 🔹 Python + Flask/Django
  {
    title: "Online Quiz System",
    description: "Students attempt quiz online.",
    working: "Questions stored in DB. System auto-checks answers.",
    making: "Flask/Django backend + DB + HTML frontend."
  },
  {
    title: "Hospital Appointment System",
    description: "Patients book doctor appointments.",
    working: "Doctor availability stored. Patients select slots.",
    making: "Django/Flask + MySQL/SQLite for scheduling."
  },
  {
    title: "Complaint Management System",
    description: "Track student complaints.",
    working: "Complaints stored in DB. Admin updates status.",
    making: "Flask/Django + DB with CRUD dashboard."
  },
  {
    title: "Inventory Management System",
    description: "Track stock of items.",
    working: "Items added/sold → DB updates stock levels.",
    making: "Flask/Django + DB. CRUD operations for inventory."
  },
  {
    title: "Food Ordering System",
    description: "Order food online with billing.",
    working: "Menu displayed → user selects items → system calculates bill.",
    making: "Python backend with DB + frontend order form."
  }
];
>>>>>>> d5f3e14 (updated the existing front end file)

function ProjectShowcase() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="project-container">
      <h1 className="title">💡 Mini Project Ideas (30)</h1>
      <div className="grid">
        {projectIdeas.map((project, index) => (
          <div
            key={index}
            className={`card ${expandedIndex === index ? "expanded" : ""}`}
            onClick={() => toggleExpand(index)}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {expandedIndex === index && (
              <div className="details">
                <h4>⚙️ How it works:</h4>
                <p>{project.working}</p>
                <h4>🛠️ How to build:</h4>
                <p>{project.making}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectShowcase;
