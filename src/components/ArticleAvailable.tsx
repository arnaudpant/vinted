import React from 'react';

const ArticleAvailable = () => {
  const TEMPORARY_ARTICLE_URL =
    'https://images1.vinted.net/t/03_014e8_TL9PwcvqsQ8JJY5Jnnw1GiuK/f800/1704794930.jpeg?s=00b9d555ffe8a1ce94ca113751cfd134375bfaa2';

  return (
    <div className="flex flex-col py-2  bg-vintedBackgrounf text-sm  ">
      <UserBanner />
      <img
        src={TEMPORARY_ARTICLE_URL}
        alt="article"
        className="cursor-pointer"
      />
      <DetailProduct isLiked={true} />
    </div>
  );
};

const UserBanner = () => {
  const isUserHaveProfilPicture = true;
  return (
    <div className="flex flex-row  justify-start  py-1 ml-2 cursor-pointer">
      <a className="flex flex-row flex-nowrap">
        <span className="mr-2">
          {isUserHaveProfilPicture ? <PictureUser /> : <NoPictureUser />}
        </span>
        <span>Alice Giovanola</span>
      </a>
    </div>
  );
};

const DetailProduct: React.FC<{ isLiked: boolean }> = ({ isLiked = false }) => {
  const articleDescription = 32;
  const articleCategory = 'Adidas';
  const numberLike = 18;

  return (
    <div className="grid grid-cols-2 grid-rows-4  mx-2 ">
      <p className="col-start-1 row-start-1 font-bold text-base text-black ">
        21.90 €
      </p>
      <a
        href="http://"
        className="col-start-1 row-start-2 text-vintedGreen text-base text-nowrap cursor-pointer hover:underline "
      >
        23.70€ incl.
      </a>
      <p className="col-start-1 row-start-3">{articleDescription ?? ''}</p>
      <p className="col-start-1 row-start-4">{articleCategory ?? ''}</p>

      <p className="col-start-2 row-start-1  flex justify-end items-center text-nowrap mt-0.5 ">
        <img
          src={
            isLiked
              ? '/src/assets/favorite_liked.png'
              : '/src/assets/favorite_like.png'
          }
          alt="favorite"
          className="h-4"
        />
        {numberLike}
      </p>
    </div>
  );
};

const NoPictureUser: React.FC<{ userName: string }> = ({
  userName = 'alicegiavanola',
}) => {
  return (
    <span className=" bg-vintedGreen h-6 w-6 rounded-full flex justify-center items-center p-1 text-white ">
      {userName.charAt(0).toUpperCase()}
    </span>
  );
};

const PictureUser: React.FC = () => {
  const TEMPORARTY_URL_USER_PROFIL =
    'https://images1.vinted.net/t/02_00514_8QLyUXiteDVeeR65N9Uk84cV/f800/1605210680.jpeg?s=8f38896562c9157376cf4ae4b2f4bac1c871a939';
  return (
    <img
      src={TEMPORARTY_URL_USER_PROFIL}
      alt="profil utilisateur"
      className="h-6 w-6 rounded-full"
    />
  );
};

export default ArticleAvailable;
