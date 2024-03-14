/* eslint-disable react-refresh/only-export-components */
import { useAuth } from '@/context/AuthUserContext';
import ArticlesAvailablesModel from './models/ArticlesAvailablesModel';

const ArticlesAvailablesBySeller = () => {
  const { authUser } = useAuth();

  return (
    <>
      {authUser?.userDocument &&
        authUser.userDocument.listArticlesForSale.length > 0 && (
            <ArticlesAvailablesModel
              title={`${authUser?.userDocument?.listArticlesForSale.length} articles disponibles`}
              productsList={authUser.userDocument.listArticlesForSale}
            />
        )}
    </>
  );
};

export default ArticlesAvailablesBySeller;
