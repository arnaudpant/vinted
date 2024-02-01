/** ROOTER */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
/** PAGES */
import { FakeShopProvider } from './context/FakeShopContext';
import Article from './pages/Article';
import Catalog from './pages/Catalog';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import NewArticle from './pages/NewArticle';

import Search from './pages/Search';
import User from './pages/User';
import Authentification from './pages/Authentification';

function App() {
  return (
    <FakeShopProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            {/* Page avec modal connexion ou inscruption */}
            <Route path="/authentification" element={<Authentification />} />
            {/*Page de profil de l'utilisateur*/}
            <Route path="/member/:userId" element={<User />} />
            {/* Page Achat */}
            <Route path="/items/:id" element={<Article />} />
            {/* Page vente si connecté */}
            <Route path="/new-article" element={<NewArticle />} />
            {/* Page de recherche global */}
            <Route path="/search" element={<Search />} />
            {/* Page de recherche par categorie via navbar */}
            <Route path="/catalog/:categoryId" element={<Catalog />} />

            <Route path="/*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FakeShopProvider>
  );
}

export default App;
