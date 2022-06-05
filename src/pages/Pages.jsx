import Home from "./Home";
import { Route, Routes } from 'react-router-dom'
import Cuisine from "./Cuisine";
import SearchedPage from "./SearchedPage";
import Reicpe from "./Reicpe";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:input" element={<SearchedPage />} />
      <Route path="/recipe/:id" element={<Reicpe />} />
    </Routes>
  )
}

export default Pages;