// filepath: c:\Users\Shahid\Desktop\projects\mern-stack\mood-tracker\frontend\mooood\src\components\moodList.jsx
import React from "react";
import { getMood } from "../services/moodServices";
import { MoodCard } from "./moodCard";
import "../App.css"; // Import the CSS file

export function MoodList({ moods, setMoodList }) {
  async function fetchMood() {
    try {
      const res = await getMood();
      setMoodList(res || []);
    } catch (error) {
      console.error("There is an error while fetching mood data", error);
    }
  }

  return (
    <div className="mood-list-container">
      <button onClick={fetchMood} className="submit-button">
        Get all Moods
      </button>
      <div className="mood-list">
        {moods.length > 0 ? (
          moods.map((mood, index) => {
            return (
              <MoodCard
                key={index}
                id={index}
                _id={mood._id}
                mood={mood.mood}
                note={mood.note}
                moods={moods}
                setMoodList={setMoodList}
              />
            );
          })
        ) : (
          <p className="no-mood-message">No mood data available</p>
        )}
      </div>
    </div>
  );
}