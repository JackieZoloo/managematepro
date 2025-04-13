import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ManageMatePro</h1>
      <p style={styles.subtitle}>A Real Solution Is Coming Soon</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#f8f2ee",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#333",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontStyle: "italic",
    opacity: 0.8,
  },
};

export default App;
