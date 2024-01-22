/** ROOTER */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/** PAGES */
import ArticlesSimilarsByRandomSellers from './components/ArticlesAvailables/ArticlesSimilarsByRandomSellers';
import { FakeShopProvider } from './context/FakeShopContext';
import Article from './pages/Article';
import Catalog from './pages/Catalog';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import NewArticle from './pages/NewArticle';
import Search from './pages/Search';

function App() {
  return (
    <FakeShopProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

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
          <Route path="/catalog/" element={<Catalog />} />
          {/* Page de recherche par categorie via navbar */}
          <Route path="/catalog/:id" element={<Catalog />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </FakeShopProvider>
  );
}

export default App;
