import React, { useState } from "react";

export default function Forum({ user, course, setCourses }) {
  const [text, setText] = useState("");

  function handlePost(e) {
    e.preventDefault();
    if (!text) return;
    setCourses(courses =>
      courses.map(c =>
        c.id === course.id
          ? {
              ...c,
              forum: [
                ...c.forum,
                { user: user.username, text, date: new Date().toLocaleString() }
              ]
            }
          : c
      )
    );
    setText("");
  }

  return (
    <div className="forum">
      <h4>Discussion Forum</h4>
      <form onSubmit={handlePost}>
        <textarea
          rows={2}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Post a message..."
        />
        <br />
        <button type="submit">Post</button>
      </form>
      <ul className="forum-posts">
        {course.forum.map((post, i) => (
          <li key={i}>
            <b>{post.user}</b> <span>({post.date})</span>
            <br />
            {post.text}
          </li>
        ))}
      </ul>
    </div>
  );
}