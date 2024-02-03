import UserNoteStars from '@/components/UserNoteStars';

const UserAboutStatistics = () => {
  return (
    <div className="flex space-x-2">
      <UserNoteStars note={3} />
      <span>{500} évaluations</span>
    </div>
  );
};

export default UserAboutStatistics;
