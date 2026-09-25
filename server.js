const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://mongo:27017/ashramDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Updated Schema with Contact
const MemberSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact: String, // Naya field add kiya
    program: String
});
const Member = mongoose.model('Member', MemberSchema);

app.post('/api/join', async (req, res) => {
    try {
        const newMember = new Member(req.body);
        await newMember.save();
        res.status(201).json({ message: "Success" });
    } catch (err) {
        res.status(500).json({ error: "Error saving data" });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
