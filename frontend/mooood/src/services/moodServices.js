// filepath: c:\Users\Shahid\Desktop\projects\mern-stack\mood-tracker\frontend\mooood\src\services\moodServices.js
import axios from "axios";
const API="http://localhost:3000/moods"

export const getMood = async () => {
    const response = await axios.get(API)
    return response.data
}

export const addMood = async (mood) => {
    const { data } = await axios.post(API, mood)
    return data
}

export const deleteMood = async (id) => {
    const response = await axios.delete(`${API}/${id}`)
    return response.data
}