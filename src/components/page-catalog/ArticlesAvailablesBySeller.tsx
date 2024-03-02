/* eslint-disable react-refresh/only-export-components */
import ArticlesAvailablesModel from './models/ArticlesAvailablesModel';
import useFirebaseAuth from '@/hooks/useFirebaseAuth';

const ArticlesAvailablesBySeller = () => {
  const { authUser } = useFirebaseAuth();

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
