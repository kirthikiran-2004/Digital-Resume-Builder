
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [showResume, setShowResume] = useState(false);

  function generateResume(event) {
    event.preventDefault();
    setShowResume(true);
  }

  return (
    <div className="app">
      <h1>Digital Resume Builder</h1>
      <p>Create your professional resume</p>

      <div className="container">
        <form onSubmit={generateResume}>
          <h2>Enter Your Details</h2>

          <label>Full Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Phone Number</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Education</label>
          <textarea
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          />

          <label>Skills</label>
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />

          <label>Experience / Projects</label>
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

          <button type="submit">Generate Resume</button>
        </form>

        <div className="preview">
          <h2>Resume Preview</h2>

          {showResume ? (
            <div className="resume">
              <h1>{name}</h1>
              <p>{email}</p>
              <p>{phone}</p>

              <hr />

              <h3>EDUCATION</h3>
              <p>{education}</p>

              <h3>SKILLS</h3>
              <p>{skills}</p>

              <h3>EXPERIENCE / PROJECTS</h3>
              <p>{experience}</p>
            </div>
          ) : (
            <p>Your resume will appear here.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
