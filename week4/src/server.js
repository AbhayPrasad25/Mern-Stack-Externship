import express from 'express';
const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Express server is running!');
});

// New route for /welcome
app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// In-memory array to store users
let users = [];

// GET /users - Retrieve all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST /users - Add a new user (with duplicate ID check)
app.post('/users', (req, res) => {
  const { id, name, email } = req.body;
  if (!id || !name || !email) {
    return res.status(400).json({ error: "All fields (id, name, email) are required." });
  }
  if (users.some(user => user.id === id)) {
    return res.status(400).json({ error: "User with this ID already exists." });
  }
  users.push({ id, name, email });
  res.status(201).json({ message: "User added successfully." });
});

// PUT /users/:id - Update a user by ID (ensure id is treated as string)
app.put('/users/:id', (req, res) => {
  const id = req.params.id.toString();
  const { name, email } = req.body;
  const user = users.find(user => user.id === id);
  if (!user) {
    return res.status(404).json({ error: "User not found." });
  }
  if (name) user.name = name;
  if (email) user.email = email;
  res.json({ message: "User updated successfully." });
});

// DELETE /users/:id - Delete a user by ID (ensure id is treated as string)
app.delete('/users/:id', (req, res) => {
  const id = req.params.id.toString();
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found." });
  }
  users.splice(userIndex, 1);
  res.json({ message: "User deleted successfully." });
});

// Error handling middleware
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
