import React, { useState } from "react";
import AssignmentSubmit from "./AssignmentSubmit.jsx";

export default function AssignmentList({ user, course, setCourses }) {
  const [showSubmit, setShowSubmit] = useState(null);
  const [newAssignment, setNewAssignment] = useState({ title: "", description: "" });

  function handleCreateAssignment(e) {
    e.preventDefault();
    if (!newAssignment.title) return;
    setCourses(courses =>
      courses.map(c =>
        c.id === course.id
          ? {
              ...c,
              assignments: [
                ...c.assignments,
                {
                  id: Date.now(),
                  title: newAssignment.title,
                  description: newAssignment.description,
                  submissions: []
                }
              ]
            }
          : c
      )
    );
    setNewAssignment({ title: "", description: "" });
  }

  return (
    <div>
      <h4>Assignments</h4>
      {user.role === "instructor" && (
        <form onSubmit={handleCreateAssignment}>
          <input
            placeholder="Assignment Title"
            value={newAssignment.title}
            onChange={e => setNewAssignment({ ...newAssignment, title: e.target.value })}
            required
          />
          <input
            placeholder="Description"
            value={newAssignment.description}
            onChange={e =>
              setNewAssignment({ ...newAssignment, description: e.target.value })
            }
          />
          <button type="submit">Add Assignment</button>
        </form>
      )}
      <ul className="assignment-list">
        {course.assignments.map(a => (
          <li key={a.id}>
            <b>{a.title}</b> <br />
            <span>{a.description}</span>
            <br />
            {user.role === "student" && (
              <button onClick={() => setShowSubmit(a)}>Submit</button>
            )}
            {user.role === "instructor" && (
              <span>
                Submissions: {a.submissions.length}
              </span>
            )}
          </li>
        ))}
      </ul>
      {showSubmit && (
        <AssignmentSubmit
          user={user}
          course={course}
          assignment={showSubmit}
          setCourses={setCourses}
          onClose={() => setShowSubmit(null)}
        />
      )}
    </div>
  );
}