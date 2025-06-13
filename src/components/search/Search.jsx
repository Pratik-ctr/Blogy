import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import styles from './Search.module.css';

const Search = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={`${styles.searchOverlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.searchContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoClose size={24} />
        </button>
        
        <h2 className={styles.searchTitle}>Search Blog Posts</h2>
        
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Type to search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.searchResults}>
          {searchQuery ? (
            <div className={styles.searchPrompt}>
              Search functionality will be implemented here
            </div>
          ) : (
            <div className={styles.searchPrompt}>
              Start typing to search blog posts
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;