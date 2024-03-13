/** ROOTER */
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
/** PAGES */
import Article from './pages/Article';
import Catalog from './pages/Catalog';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import NewArticle from './components/page-add-article/NewArticle';
import Search from './pages/Search';
import User from './pages/User';
import Authentification from './pages/Authentification';
import Settings from './pages/Settings';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryComponent from './error-boundary/ErrorBoundaryComponent';
import Vendeur from './pages/Vendeur';
import Favoris from './pages/Favoris';


function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={ErrorBoundaryComponent}
        onReset={() => {}}
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            {/* Page avec modal connexion ou inscription */}
            <Route path="/authentification" element={<Authentification />} />
            {/*Page de profil de l'utilisateur*/}
            <Route path="/member" element={<User />} />
            {/*Page de profil du vendeur*/}
            <Route path="/vendeur" element={<Vendeur />} />
            {/* Page Favoris */}
            <Route path="/favoris" element={<Favoris />} />
            {/* Page Achat */}
            <Route path="/items/:id" element={<Article />} />
            {/* Page vente si connecté */}
            <Route path="/new-article" element={<NewArticle />} />
            {/* Page de recherche global */}
            <Route path="/search" element={<Search />} />
            {/* Page articles par categorie via navbar */}
            <Route path="/catalog/:id" element={<Catalog />} />
            {/* Page de settings du profil */}
            <Route path="/settings/:section" element={<Settings />} />
            <Route
              path="/settings"
              element={<Navigate to="/settings/profile" />}
            />
            <Route path="/*" element={<Error404 />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
