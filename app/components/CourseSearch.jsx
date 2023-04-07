'use client';

import { useState } from 'react';

const CourseSearch = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type='text'
        className='search-input'
        placeholder='Search Courses...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type='submit' className='search-button'>
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
