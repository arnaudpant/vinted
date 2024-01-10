/** ROOTER */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/** PAGES */
import Home from './pages/Home';
import Article from './pages/Article';
import Error404 from './pages/Error404';
import Search from './pages/Search';
import NewArticle from './pages/NewArticle';
import Catalog from './pages/Catalog';
import Header from './components/ui/header/Header';

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="relative z-[-10] mt-28">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Page Achat */}
            <Route path="/items/:id" element={<Article />} />
            {/* Page vente si connecté */}
            <Route path="/new" element={<NewArticle />} />
            {/* Page de recherche global */}
            <Route path="/search" element={<Search />} />
            {/* Page de recherche par categorie via navbar */}
            <Route path="/catalog/:id" element={<Catalog />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
