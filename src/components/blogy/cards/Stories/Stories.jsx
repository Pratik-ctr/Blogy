import React from 'react';
import styles from './Stories.module.css';

const Stories = () => {
  const stories = [
    { 
      img: "https://i0.wp.com/blog.uxtweak.com/wp-content/uploads/2023/07/UXT_human_computer_interaction_01.png?resize=800%2C509&ssl=1",
      title: "The Future of Human-Computer Interaction",
      excerpt: "Exploring how emerging technologies are changing the way we interact with machines.",
      tags: ["Tech", "Innovation", "Design"],
    
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmWKErJLkXkQmqi2lJT0-2TQl7m4kIBK9koQ&s",
      title: "Street Art Revolution in Urban Spaces",
      excerpt: "How street artists are transforming cities into open-air galleries worldwide.",
      tags: ["Art", "Culture", "Urban"],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGn8RY3m9oEFEVohRofwiI-UQ6giAwL0ofvQ&s",
      title: "Rewilding Projects Bringing Nature Back",
      excerpt: "Conservation efforts that are successfully restoring ecosystems across the globe.",
      tags: ["Nature", "Conservation", "Ecology"],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHLOKYXooU6fBY0dXrmWfOupr6tCh6EoVH5A&s",
      title: "Minimalist Approach to Digital Products",
      excerpt: "Why less is more when designing digital experiences that truly connect with users.",
      tags: ["Design", "UX", "Product"],
    },
    {
      img: "https://www.shutterstock.com/image-photo/sustainable-green-building-environmentally-friendly-260nw-2444111221.jpg",
      title: "Sustainable Architecture of Tomorrow",
      excerpt: "Groundbreaking designs that blend aesthetics with environmental responsibility.",
      tags: ["Architecture", "Sustainability", "Design"],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lfaTUDzwKvYa0a6-6NKH_YCpoQcji9QYVAZmFc28171r1tSgzlpOU0ipq2FjfIKjGFU&usqp=CAU",
      title: "The Science Behind Perfect Coffee",
      excerpt: "Understanding the chemistry that creates the world's favorite morning beverage.",
      tags: ["Food", "Science", "Culture"],
    }
  ];

  return (
    <section className={styles.storiesSection}>
      <h2 className={styles.sectionTitle}>
        Explore Our <span>Featured Stories</span>
      </h2>
      
      <div className={styles.scrollContainer}>
        <div className={styles.storiesScroller}>
          {stories.map((story, index) => (
            <article key={index} className={styles.storyCard}>
              <div className={styles.cardImage}>
                <img src={story.img} alt={story.title} />
                
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.tags}>
                  {story.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                <button className={styles.readButton}>
                  Read Story <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;