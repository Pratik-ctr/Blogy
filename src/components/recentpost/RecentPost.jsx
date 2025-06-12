import React from 'react';
import styles from './RecentPost.module.css';
import HeroBg from './herobg/HeroBg';

const RecentPost = () => {
  const posts = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFdPKED5Aij2T_ahAJ6ZgWb1TYh222W7loQ&s",
      title: "The Art of Mindful Creation",
      excerpt: "Discover how mindfulness can transform your creative process and lead to more meaningful work.",
      tags: ["Creativity", "Mindfulness", "Writing"],
      author: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    },
    {
      img: "https://imaginovation.net/static/8ef3e82b5fef0327b56b3886f345fdeb/426ac/digital-transformation.webp",
      title: "Future of Digital Interaction",
      excerpt: "Exploring the next wave of digital interfaces that will change how we interact with technology.",
      tags: ["Tech", "Innovation", "Design"],
      author: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/63499c9d3f441611e9a14637/12d19c13-ba84-4b09-8da1-9695b45a2e10/hidden-gems-europe-montenegro-lake-kotor.jpg",
      title: "Hidden Gems: Unexplored Europe",
      excerpt: "Journey through Europe's lesser-known destinations that offer authentic cultural experiences.",
      tags: ["Travel", "Culture", "Adventure"],
      author: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCld0oZYy7YP2afMeqoQ-vkV-8kVtDtYKBw&s",
      title: "Sustainable Eating Habits",
      excerpt: "How small changes in our eating habits can make a big difference for the planet.",
      tags: ["Food", "Sustainability", "Health"],
      author: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    },
    {
      img: "https://pup-assets.imgix.net/onix/images/9780691241913.jpg?w=410&auto=format",
      title: "Rediscovering Classic Literature",
      excerpt: "Why classic books remain relevant and how to approach them as a modern reader.",
      tags: ["Books", "Literature", "Education"],
      author: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    },
    {
      img: "https://images.ctfassets.net/cnu0m8re1exe/1UeHxvVQwQBOBras7azgXT/66a8280ccad783210793b31edae9c692/DSC-G0818_07.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
      title: "The Science Behind Music's Magic",
      excerpt: "Understanding how music affects our brains and emotions on a neurological level.",
      tags: ["Music", "Science", "Psychology"],
      author: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    }
  ];

  const authors = [
    "https://codewithsadee.github.io/blogy/assets/images/author-5.jpg",
    "https://codewithsadee.github.io/blogy/assets/images/author-4.jpg",
    "https://codewithsadee.github.io/blogy/assets/images/author-3.jpg",
    "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg",
    "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
  ];

  return (
    <>
      <HeroBg />
      <div className={styles.recentPosts}>
        <div className={styles.header}>
          <h2>Latest Stories</h2>
          <div className={styles.authorsPreview}>
            <p>Meet our contributors</p>
            <div className={styles.authorAvatars}>
              {authors.map((author, index) => (
                <img 
                  key={index} 
                  src={author} 
                  alt={`Author ${index + 1}`}
                  className={styles.authorAvatar}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.postsGrid}>
          {posts.map((post, index) => (
            <article key={index} className={styles.postCard}>
              <div className={styles.postImage}>
                <img src={post.img} alt={post.title} />
              </div>
              <div className={styles.postMeta}>
                {post.tags.map((tag, i) => (
                  <span key={i} className={styles.postTag}>{tag}</span>
                ))}
              </div>
              <div className={styles.postContent}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className={styles.postFooter}>
                  <img src={post.author} alt="Author" className={styles.postAuthor} />
                  <button className={styles.readMore}>Read Story →</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.loadMore}>
          <button className={styles.loadMoreButton}>Discover More Stories</button>
        </div>
      </div>
    </>
  );
};

export default RecentPost;