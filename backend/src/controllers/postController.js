const prisma = require('../config/prisma');

// Create a post
const createPost = async (req, res) => {
  try {
    const { title, content, authorId } = req.body;

    if (!title || !content || !authorId) {
      return res.status(400).json({
        message: 'Title, content and authorId are required'
      });
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId
      }
    });

    res.status(201).json({
      message: 'Post created successfully',
      post
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create post',
      error: error.message
    });
  }
};

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch posts',
      error: error.message
    });
  }
};

module.exports = {
  createPost,
  getPosts
};