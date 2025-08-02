const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const users = [
    { id: 1, name: "Sabana", email: 'sabana@gmail.com' },
    { id: 1, name: "Sabnur", email: 'sabnur@gmail.com' },
    { id: 1, name: "Sabila", email: 'sabila@gmail.com' }
]
app.get('/', (req, res) => {
    res.send('Users management server is running')
});

app.get('/users', (req, res) => {
    res.send(users);
})
app.listen(port, () => {
    console.log(`Server is running on PROT: ${port}`)
})