import UserNoteStars from '@/components/UserNoteStars';
import React from 'react';

const UserAboutStatistics = () => {
  const numberStars = 4;
  const numberEvaluations = 543;
  return (
    <div className="flex space-x-2">
      <UserNoteStars note={numberStars} />
      <span>{numberEvaluations} évaluations</span>
    </div>
  );
};

export default UserAboutStatistics;
