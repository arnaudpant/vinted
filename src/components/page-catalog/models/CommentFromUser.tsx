import UserNoteStars from '@/components/ui/UserNoteStars';
import { FakeUser } from '@/types/types';
import getRandomIndex from '@/utils/Utils';

type Props = {
  userId: number
};

const CommentFromUser = ({ userId }: Props) => {
  const users: FakeUser[] = [
    {
      id: 1,
      image: '',
      name: 'Jhon',
      avatar: 'https://i.imgur.com/LDOO4Qs.jpg',
      comment: 'Top',
    },
    {
      id: 2,
      image: '',
      name: 'Michel',
      avatar: '/avatar.png',
      comment: 'Merci super vendeur',
    },
  ];

  const userToSee = users.filter((user) => user.id === userId);

  return (
    <div className="mx-4 mb-4 flex space-x-3">
      <div>
        <img
          src={userToSee[0].avatar}
          alt="avatar"
          className="h-16 w-16 rounded-full object-contain"
        />
        <div className="flex flex-col ">
          <span>{userToSee[0].name}</span>
          <UserNoteStars note={getRandomIndex(3, 5)} />
          <p>{userToSee[0].comment}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CommentFromUser;
