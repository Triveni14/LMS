import React, { useState } from "react";
import AssignmentList from "./AssignmentList.jsx";
import Forum from "./Forum.jsx";

export default function CourseDetail({ user, course, setCourses, onClose }) {
  const [tab, setTab] = useState("assignments");

  return (
    <div>
      <h3>
        {course.title} <button onClick={onClose}>Close</button>
      </h3>
      <div>
        <button onClick={() => setTab("assignments")}>Assignments</button>
        <button onClick={() => setTab("forum")}>Forum</button>
      </div>
      {tab === "assignments" && (
        <AssignmentList
          user={user}
          course={course}
          setCourses={setCourses}
        />
      )}
      {tab === "forum" && (
        <Forum
          user={user}
          course={course}
          setCourses={setCourses}
        />
      )}
    </div>
  );
}