import express, { response } from 'express';
import Mood from '../models/mood.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const moodScore={
            "love":2,
            "happy":1,
            "neutral":0,
            "sad":-1,
            "numb":-2
        };

        const allMoods = await Mood.find().lean();
        const sortedMoods = allMoods.sort((a,b)=> new Date(a.createdAt)-new Date(b.createdAt));

        const response = sortedMoods.map(thisMood=>{
            const DateObject = new Date(thisMood.createdAt);
            return {...thisMood,
            moodValue: moodScore[thisMood.mood]||0,
            date: DateObject.toISOString().split('T')[0],
            time: DateObject.toLocaleTimeString('en-US',{hour:"2-digit",minute:"2-digit",hour12:true}),
            }
        })
        

        res.send(response);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
});

router.post('/',async(req, res) => {
try {
    const {mood,note} = req.body;
    const newMood = await Mood.create({mood,note});
    res.send('Mood saved successfully');
    console.log({mood,note})
    
} catch (error) {
    res.status(400).json({message:error.message});
}
});

router.delete('/:id',async (req, res) => {
    try {
        const id = req.params.id;
        const mood = await Mood.findByIdAndDelete(id);
        if(!mood)
        {
            return res.status(404).json({message:"Mood not found"});
        }
        else
        {
            res.status(200).json({message:"Mood deleted successfully"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

export default router;