'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// This one need to import manually. the app/loading.jsx will only auto used by server component.
import LoadingPage from './loading';

import Courses from './components/Courses';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      console.log('data=', data);
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <h1>Welcome To Traversy Media</h1>
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;
