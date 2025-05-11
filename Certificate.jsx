import React from "react";

export default function Certificate({ user, courses }) {
  const completed = courses.filter(
    c =>
      c.students.includes(user.username) &&
      c.assignments.every(a =>
        a.submissions.some(
          s => s.student === user.username && s.grade !== null && s.grade >= 60
        )
      ) &&
      c.assignments.length > 0
  );

  return (
    <div className="certificate">
      <h3>Certificates</h3>
      {completed.length === 0 && <div>No completed courses yet.</div>}
      {completed.map(c => (
        <div key={c.id} style={{ border: "1px solid #1976d2", padding: 12, margin: 8, borderRadius: 6 }}>
          <h4>Certificate of Completion</h4>
          <div>
            This certifies that <b>{user.username}</b> has completed <b>{c.title}</b>.
          </div>
        </div>
      ))}
    </div>
  );
}