const models = require('../models');

const { User } = models;
const { Post } = models;

// Renders the home page
const index = (req, res) => {
    res.render('index');
};

// Handles user signup
const signup = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.status(400).json({ error: 'Missing fields' });

    try {
        const newUser = new User({ username, password });
        await newUser.save();
        return res.status(201).json({ message: 'User created' });
    } 
    catch (err) {
        return res.status(500).json({ error: 'Error creating user' });
    }
};

// Handles user login (basic check only)
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username }).exec();
        if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

        // You can set session or just return success
        return res.status(200).json({ message: 'Login successful', userId: user._id });
    } 
    catch (err) {
        return res.status(500).json({ error: 'Login error' });
    }
};

// Logout (dummy version for now)
const logout = (req, res) => {
    return res.status(200).json({ message: 'Logged out' });
};

// Create a new post
const createPost = async (req, res) => {
    const { content, isPublic, userId } = req.body;

    if (!content || !userId) return res.status(400).json({ error: 'Missing post data' });

    try {
        const post = new Post({ content, isPublic, userId });
        await post.save();
        return res.status(201).json({ message: 'Post created' });
    } 
    catch (err) {
        return res.status(500).json({ error: 'Error creating post' });
    }
};

// Get all posts by a user
const getPosts = async (req, res) => {
    const { userId } = req.query;

    if (!userId) return res.status(400).json({ error: 'Missing user ID' });

    try {
        const posts = await Post.find({ userId }).sort({ createdAt: -1 }).lean().exec();
        return res.status(200).json({ posts });
    } 
    catch (err) {
        return res.status(500).json({ error: 'Error fetching posts' });
    }
};

// 404 Page
const notFound = (req, res) => {
    res.status(404).send('Page not found');
};

// Export all
module.exports = {
    index,
    signup,
    login,
    logout,
    createPost,
    getPosts,
    notFound,
};

