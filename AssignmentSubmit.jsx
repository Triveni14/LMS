import React, { useState } from "react";

export default function AssignmentSubmit({ user, course, assignment, setCourses, onClose }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setCourses(courses =>
      courses.map(c =>
        c.id === course.id
          ? {
              ...c,
              assignments: c.assignments.map(a =>
                a.id === assignment.id
                  ? {
                      ...a,
                      submissions: [
                        ...a.submissions.filter(s => s.student !== user.username),
                        { student: user.username, text, grade: null }
                      ]
                    }
                  : a
              )
            }
          : c
      )
    );
    onClose();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h5>Submit: {assignment.title}</h5>
      <textarea
        rows={4}
        value={text}
        onChange={e => setText(e.target.value)}
        required
        placeholder="Your answer..."
      />
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
}