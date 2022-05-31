const _ = require('lodash');

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  const indexOfMostLiked = blogs.indexOf(blogs.reduce((prev, curr) => (curr.likes > prev.likes ? curr : prev), blogs[0]));
  return blogs[indexOfMostLiked];
};

const mostBlogs = (blogs) => {
  const authors = _.countBy(blogs, 'author');
  const authorWithMostBlogs = _.maxBy(Object.keys(authors), (author) => authors[author]);
  return { author: authorWithMostBlogs, blogs: authors[authorWithMostBlogs] };
};

const mostLikes = (blogs) => {
  const authorsAndLikes = blogs.reduce((previous, current) => {
    const match = previous?.findIndex((prev) => prev.author === current.author);
    if (match >= 0) {
      previous[match].likes += current.likes;
    } else {
      previous.push({ author: current.author, likes: current.likes });
    }
    return previous;
  }, []);

  const authorWithMostLikes = _.maxBy(authorsAndLikes, 'likes');

  return authorWithMostLikes;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
