import express from 'express';

import { protect } from '../middleware/auth.js';
import { create, update, fetch, getOne, login, logout } from '../Controller/user.js';

const route = express.Router();

// Public Routes
route.post('/create', create);    // Registration
route.post('/login', login);      // Login with token & cookie

// Protected Routes
route.get('/fetch', protect, fetch);          // Fetch all users
route.put('/update/:id', protect, update);    // Update a specific user
route.get('/getOne/:id', protect, getOne);    // Get a specific user

// Logout
route.post('/logout', logout);

export default route;
