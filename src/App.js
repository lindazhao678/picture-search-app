import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import About from './components/pages/About'
import Main from './components/pages/Main'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './components/pages/PageNotFound'
import React, { useEffect, useState } from 'react'
import { getResults } from './services/pixelBayServices'

function App() {

  const [query, setQuery] = useState('cat');
  const [searchResults, setSearchResults] = useState([]);
  let [page, setPage] = useState(1);
  

  useEffect(() => {
    getResults(query, page)
      .then((results) => {
        setSearchResults(results.data.hits)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, query]);

  const handlePrev = () => {
    if (page > 1)
      setPage(page - 1)
  }

  const handleNext = () => {
    setPage(page + 1)
  }

  const handleQuery = (value) => {
    setQuery(value)
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
