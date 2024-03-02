import UserNoteStars from '@/components/ui/UserNoteStars';
import getRandomIndex from '@/utils/Utils';

const UserAboutStatistics = () => {
  return (
    <div className="flex space-x-2">
      <UserNoteStars note={4} />
      <span>{getRandomIndex(1, 40)} évaluations</span>
    </div>
  );
};

export default UserAboutStatistics;
