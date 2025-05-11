import React, { useState } from "react";
import Login from "./Admin.jsx";
import Dashboard from "./Dashboard.jsx";
import { initialCourses } from "./data.js";
//import "./styles.css";
import "./Style.css";
export default function App() {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState(initialCourses);

  return (
    <div className="app-container">
      <h1>Edulearn</h1>
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <Dashboard
          user={user}
          onLogout={() => setUser(null)}
          courses={courses}
          setCourses={setCourses}
        />
      )}
    </div>
  );
}