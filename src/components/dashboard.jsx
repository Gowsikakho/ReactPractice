import React, { useState } from "react";

/**
 * TodayDashboard
 * ----------------
 * A simple dashboard component that displays:
 * - Today's date
 * - A daily focus note
 * - A lightweight interaction (state update)
 *
 * Purpose:
 * Demonstrates clean React fundamentals:
 * - Functional component
 * - useState hook
 * - Event handling
 * - Conditional rendering
 */
const TodayDashboard = () => {
  const [message, setMessage] = useState("Stay consistent and write clean code.");

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleUpdate = () => {
    setMessage("Progress logged for today ✔");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Daily Developer Dashboard</h2>

      <p style={styles.date}>📅 {today}</p>

      <p style={styles.message}>{message}</p>

      <button style={styles.button} onClick={handleUpdate}>
        Mark Today as Done
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9fafb",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "12px",
  },
  date: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  message: {
    marginBottom: "16px",
    color: "#374151",
  },
  button: {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default TodayDashboard;
