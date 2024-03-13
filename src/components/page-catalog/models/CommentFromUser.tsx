import UserNoteStars from '@/components/ui/UserNoteStars';
import { Evaluateur } from '@/hooks/useFakeUsers';
import getRandomIndex from '@/utils/Utils';

type Props = {
  user: Evaluateur;
};

const CommentFromUser = ({ user }: Props) => {
  return (
    <div className="mx-4 mb-4 flex space-x-3">
      <div>
        {user && (
          <>
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="avatar"
                className="h-16 w-16 rounded-full object-contain"
              />
            ) : (
              <img
                src="/avatar.png"
                alt="avatar"
                className="h-16 w-16 rounded-full object-contain"
              />
            )}
            <div className="flex flex-col ">
              <span>{user.first_name}</span>
              <UserNoteStars note={getRandomIndex(3, 5)} />
            </div>
          </>
        )}
      </div>
      <hr />
    </div>
  );
};

export default CommentFromUser;
