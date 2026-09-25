const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB (Docker container name 'mongo')
mongoose.connect('mongodb://mongo:27017/ashramDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Database Schema
const MemberSchema = new mongoose.Schema({
    name: String,
    email: String,
    program: String
});
const Member = mongoose.model('Member', MemberSchema);

// API Endpoint to save form data
app.post('/api/join', async (req, res) => {
    try {
        const newMember = new Member(req.body);
        await newMember.save();
        res.status(201).json({ message: "Registration Successful! Shanti." });
    } catch (err) {
        res.status(500).json({ error: "Error saving data" });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
