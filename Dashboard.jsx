import React, { useState } from "react";
import CourseList from "./CourseList.jsx";
import Gradebook from "./Gradebook.jsx";
import Certificate from "./Certificate.jsx";

export default function Dashboard({ user, onLogout, courses, setCourses }) {
  const [view, setView] = useState("courses");

  return (
    <div>
      <div className="dashboard-header">
        <span>Welcome, {user.username} ({user.role})</span>
        <button onClick={onLogout}>Logout</button>
      </div>
      <nav>
        <button onClick={() => setView("courses")}>Courses</button>
        {user.role === "student" && (
          <>
            <button onClick={() => setView("grades")}>Grades</button>
            <button onClick={() => setView("certificate")}>Certificate</button>
          </>
        )}
      </nav>
      <div>
        {view === "courses" && (
          <CourseList
            user={user}
            courses={courses}
            setCourses={setCourses}
          />
        )}
        {view === "grades" && user.role === "student" && (
          <Gradebook user={user} courses={courses} />
        )}
        {view === "certificate" && user.role === "student" && (
          <Certificate user={user} courses={courses} />
        )}
      </div>
    </div>
  );
}