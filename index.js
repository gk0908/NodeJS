const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json');

const PORT = 5000;

// Middleware to parse JSON request bodies (needed for POST and PATCH)
app.use(express.json());

// Route to return users as JSON
app.get('/api/users', (req, res) => {
    return res.json(users);
});

// Route to return user by ID
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id); // Convert ID from string to number
    const user = users.find(user => user.id === id); // Find user by ID
    if (user) {
        return res.json(user); // Send user data if found
    } else {
        return res.status(404).json({ message: 'User not found' }); // Handle case where user is not found
    }
});

// Route to create a new user (placeholder implementation)
app.post('/api/user', (req, res) => {
    // TODO: Add logic to create a new user
    const newUser = req.body; // Assuming the new user data is sent in the request body
    return res.status(201).json({ status: "User created", user: newUser });
});

// Route to update a user by ID (placeholder implementation)
app.patch('/api/user/:id', (req, res) => {
    // TODO: Add logic to update a user
    const id = Number(req.params.id);
    const updates = req.body; // Assuming updates are sent in the request body
    return res.json({ status: "User updated", id, updates });
});

// Route to delete a user by ID (placeholder implementation)
app.delete('/api/user/:id', (req, res) => {
    // TODO: Add logic to delete a user
    const id = Number(req.params.id);
    return res.json({ status: "User deleted", id });
});

// Start the server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));
