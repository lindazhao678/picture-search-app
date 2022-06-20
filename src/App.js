import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import About from './components/pages/About'
import Main from './components/pages/Main'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './components/pages/PageNotFound'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [query, setQuery] = useState('flower');
  const [searchResults, setSearchResults] = useState([]);
  let [page, setPage] = useState(1);

  useEffect(() => {
    const storedQuery = localStorage.getItem("query")
    storedQuery && setQuery(storedQuery)

    axios
      .get("http://localhost:8000", {
        params: {
          q: query,
          page: page
        }
      })
      .then((response) => {
        setSearchResults(response.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query, page]);

  const handlePrev = () => {
    if (page > 1)
      setPage(page - 1)
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  const handleQuery = (value) => {
    setQuery(value)
    localStorage.setItem("query", value)
  }

  return (
    <div className="App">
      <Navbar query={query} getQuery={handleQuery} />
      <Routes>
        <Route path="/" element={<Main page={page} result={searchResults} getPrevPage={handlePrev} getNextPage={handleNext} />} />
        <Route path="/about" element={<About />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
