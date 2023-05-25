import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { getPosts } from '../api';
import { Home } from '../pages';
import { Loader, Navbar } from './';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();

      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home posts={posts} />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
