// filepath: c:\Users\Shahid\Desktop\projects\mern-stack\mood-tracker\frontend\mooood\src\components\moodForm.jsx
import { useState } from "react";
import { addMood, getMood } from "../services/moodServices";
import "../App.css"; // Import the main CSS file

export function MoodForm({ moods, setMoodList }) {
  const [mood, setMood] = useState("numb");
  const [note, setNote] = useState("nothing happened");
  const [moodPoint, setMoodPoint] = useState([0]);

  return (
    <div className="mood-form">
      <h1 className="mood-form-title">How You Feeling Today?</h1>
      
      <form className="mood-form-container" onSubmit={(e) =>{
        selectedMood(mood, setMoodPoint);
        handleSubmit(e, mood, setMood, note, setNote, moods, setMoodList);
        console.log(moodPoint);
      }}>
        <select value={mood} onChange={e => setMood(e.target.value)} className="mood-select">
          <option value="">--select mood--</option>
          <option value="love">love</option>
          <option value="happy">happy</option>
          <option value="neutral">neutral</option>
          <option value="sad">sad</option>
          <option value="numb">numb</option>
        </select>
        <input type="text" placeholder="Note (optional)" onChange={e => setNote(e.target.value)} className="mood-note-input" />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

async function handleSubmit(e, mood, setMood, note, setNote, moods, setMoodList) {
  e.preventDefault();
  if (!mood.trim()) return;
  try {
    await addMood({ mood, note });
    alert("Mood added successfully");
    const res = await getMood();
    setMoodList(res || []);
    setMood("");
    setNote("");
  } catch (error) {
    console.error("Error adding mood", error);
  }
}

async function selectedMood(mood, setMoodPoint) {
  switch (mood) {
    case "love":
      await setMoodPoint(prevMoodPoint => [...prevMoodPoint, 2]);
      break;
    case "happy":
      console.log("You're happy!");
      setMoodPoint(prevMoodPoint => [...prevMoodPoint, 1]);
      break;
    case "neutral":
      console.log("Neutral mood.");
      setMoodPoint(prevMoodPoint => [...prevMoodPoint, 0]);
      break;
    case "sad":
      console.log("Feeling sad.");
      setMoodPoint(prevMoodPoint => [...prevMoodPoint, -1]);
      break;
    case "numb":
      console.log("Feeling numb.");
      setMoodPoint(prevMoodPoint => [...prevMoodPoint, -2]);
      break;
    default:
      console.log("Mood not recognized.");
  }
}