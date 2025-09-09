import { useState } from "react";
import "./ProjectShowcase.css";

export default function ProjectShowcase() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const projects = [
    // 🔹 Frontend-only
    { title: "Personal Portfolio Website", desc: "A site to showcase resume, skills, projects, and contact info.", category: "Frontend" },
    { title: "Quiz App", desc: "Answer multiple-choice questions and get your score.", category: "Frontend" },
    { title: "To-Do List", desc: "Add, mark complete, and delete daily tasks.", category: "Frontend" },
    { title: "Digital Clock / Stopwatch / Timer", desc: "Show real time or use as a stopwatch/timer.", category: "Frontend" },
    { title: "Weather App", desc: "Fetches live weather of any city via free API.", category: "Frontend" },
    { title: "Calculator", desc: "Perform +, −, ×, ÷ operations.", category: "Frontend" },
    { title: "Typing Speed Test", desc: "Measure words per minute and accuracy.", category: "Frontend" },
    { title: "Flashcards Learning Tool", desc: "Flip cards to learn terms/definitions.", category: "Frontend" },
    { title: "Music Player", desc: "Play, pause, next/prev songs with playlist UI.", category: "Frontend" },
    { title: "Image Gallery with Filter", desc: "Filter and view images by category.", category: "Frontend" },

    // 🔹 Local Storage
    { title: "Notes App", desc: "Write and save notes using browser storage.", category: "LocalStorage" },
    { title: "Expense Tracker", desc: "Track expenses and calculate balance.", category: "LocalStorage" },
    { title: "Bookmark Manager", desc: "Save favorite websites with title.", category: "LocalStorage" },
    { title: "Login/Signup UI", desc: "Fake auth using local storage.", category: "LocalStorage" },
    { title: "Habit Tracker", desc: "Track daily habits with streak progress.", category: "LocalStorage" },

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

    // 🔹 Python
    { title: "Online Quiz System", desc: "DB-based quiz with auto score calculation.", category: "Python" },
    { title: "Hospital Appointment System", desc: "Book doctor appointments online.", category: "Python" },
    { title: "Complaint Management System", desc: "Students submit complaints, admin resolves.", category: "Python" },
    { title: "Inventory Management", desc: "Track stock, add/remove items.", category: "Python" },
    { title: "Food Ordering System", desc: "Select food from menu, order summary & bill.", category: "Python" },
  ];

  const categories = ["All", "Frontend", "LocalStorage", "PHP", "Python"];

  const filteredProjects = projects.filter(
    (p) =>
      (filter === "All" || p.category === filter) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="project-showcase">
      <h1 className="title">Mini Project Ideas</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search project..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid">
        {filteredProjects.map((p, i) => (
          <div className="card" key={i}>
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <span className="tag">{p.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
