import React from "react";

export default function Gradebook({ user, courses }) {
  const enrolled = courses.filter(c => c.students.includes(user.username));
  return (
    <div className="gradebook">
      <h3>Gradebook</h3>
      {enrolled.length === 0 && <div>No enrolled courses.</div>}
      {enrolled.map(course => (
        <div key={course.id}>
          <b>{course.title}</b>
          <ul>
            {course.assignments.map(a => {
              const sub = a.submissions.find(s => s.student === user.username);
              return (
                <li key={a.id}>
                  {a.title}: {sub ? (sub.grade !== null ? `Grade: ${sub.grade}` : "Submitted") : "Not submitted"}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}