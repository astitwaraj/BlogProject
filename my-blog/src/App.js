import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './Navbar';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticleListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
