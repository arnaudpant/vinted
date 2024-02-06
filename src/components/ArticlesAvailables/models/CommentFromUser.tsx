import UserNoteStars from '@/components/UserNoteStars';
import { FakeUser } from '@/types/types';
import getRandomStarsNote from '@/utils/getRandomStarsNote';

const CommentFromUser = ({
  starsRate = getRandomStarsNote(),
  comment,
}: {
  userId: number;
  starsRate: number;
  comment: string;
}) => {
  const user: FakeUser = {
    id: 1,
    image: '',
    name: 'Jhon',
    avatar: 'https://i.imgur.com/LDOO4Qs.jpg',
  };

  return (
    <div className="m-4 flex space-x-3">
      <img
        src={user.avatar}
        alt="avatar"
        className="h-16 w-16 rounded-full object-contain"
      />
      <div className="flex flex-col ">
        <span>{user.name ?? 'Vinted'}</span>
        <UserNoteStars note={starsRate} />
        <p>{comment}</p>
      </div>
      <hr />
    </div>
  );
};

export default CommentFromUser;
