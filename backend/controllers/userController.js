import mongoose from 'mongoose';
import User from '../models/userModel.js';


// Route: /api/users/login
const loginUser = async (req, res) => {
  
}

// Route: /api/users/register
const registerUser = async (req, res) => {
  res.status(201).json({ message: 'User registered successfully' });
}

// route for admin to get all users
const adminLogin = async (req, res) => {
  
}

export { loginUser, registerUser, adminLogin };