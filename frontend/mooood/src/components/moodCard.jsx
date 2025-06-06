// filepath: c:\Users\Shahid\Desktop\projects\mern-stack\mood-tracker\frontend\mooood\src\components\moodCard.jsx
import React from "react";
import { deleteMood } from "../services/moodServices";
import "../App.css"; // Import the CSS file

export function MoodCard({ _id, mood, note, id, moods, setMoodList }) {
  return (
    <div className="mood-card">
      <div className="mood-card-header">
        <h2 className="mood-title">Mood: {mood}</h2>
      </div>
      <p className="mood-note">Note: {note}</p>
      <p className="mood-note">created at: {moods[id].date}</p>
      <p className="mood-note">Time: {moods[id].time}</p>
      <button className="delete-button" onClick={() => deleteHandle(_id, moods, setMoodList)}>
        Delete
      </button>
    </div>
  );
}

async function deleteHandle(_id, moods, setMoodList) {
  try {
    await deleteMood(_id);
    setMoodList(moods.filter((thisMood) => thisMood._id !== _id)); // only true condition pass
    console.log(moods);
  } catch (error) {
    console.error("There's an error in deleting", error);
  }
}