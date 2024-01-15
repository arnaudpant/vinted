/** ROOTER */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/** PAGES */
import Home from './pages/Home';
import Article from './pages/Article';
import Error404 from './pages/Error404';
import Search from './pages/Search';
import NewArticle from './pages/NewArticle';
import Catalog from './pages/Catalog';
import { FakeShopProvider } from './context/FakeShopContext';
import ArticlesAvailablesBySeller from './components/ArticlesAvailables/ArticlesAvailablesBySeller';
import ArticlesSimilarsByRandomSellers from './components/ArticlesAvailables/ArticlesSimilarsByRandomSellers';

function App() {
  return (
    <FakeShopProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seller" element={<ArticlesAvailablesBySeller />} />
          <Route
            path="/similars"
            element={<ArticlesSimilarsByRandomSellers />}
          />
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
    </FakeShopProvider>
  );
}

export default App;
