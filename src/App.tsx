/** ROOTER */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
/** PAGES */
import Home from './pages/Home';
import Article from './pages/Article';
import Error404 from './pages/Error404';
import Search from './pages/Search';
import NewArticle from './pages/NewArticle';
import Catalog from './pages/Catalog';
import UserProfil from './components/userProfil/UserProfil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* Page Achat */}
          <Route path="/items/:id" element={<Article />} />
          {/* Page vente si connecté */}
          <Route path="/new" element={<NewArticle />} />
          {/* Page de recherche global */}
          <Route path="/search" element={<Search />} />
          {/* Page de recherche par categorie via navbar */}
          <Route path="/catalog/:id" element={<Catalog />} />
          <Route path="member" element={<UserProfil />} />

          <Route path="/*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
