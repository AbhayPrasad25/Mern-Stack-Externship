import express from 'express';
const app = express();
const PORT = 5000;

// Middleware to handle JSON requests
app.use(express.json());

// A simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('Express server is running!');
});

// A welcome route to greet users
app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// In-memory storage for user data
let users = [];

// Fetch all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Add a new user, ensuring no duplicate IDs
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

// Update user details by ID
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

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const id = req.params.id.toString();
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found." });
  }
  users.splice(userIndex, 1);
  res.json({ message: "User deleted successfully." });
});

// Middleware to handle unexpected errors
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
