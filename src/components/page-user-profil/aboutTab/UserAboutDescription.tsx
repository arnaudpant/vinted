import useFirebaseAuth from '@/hooks/useFirebaseAuth';

const UserAboutDescription: React.FC = () => {
  const {authUser} = useFirebaseAuth()
  return (
    <div className="flex flex-col">
      {authUser?.userDocument?.photoURL ? (
        <img
          src={authUser.userDocument.photoURL}
          alt="avatar utilisateur"
          className="mx-auto max-h-64 w-full  object-cover sm:h-4 "
        />
      ) : (
        <img src='/avatar.png' />
      )}

      <div>
        <h1 className="text-xl font-semibold">{authUser?.userDocument?.login}</h1>
        <ul className="list-inside list-disc ">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati assumenda eveniet quas repudiandae earum doloremque!
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae et dolorum ab quas temporibus facere!
          </li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit. 🛍😊😉</li>
        </ul>
      </div>
    </div>
  );
};

export default UserAboutDescription;
