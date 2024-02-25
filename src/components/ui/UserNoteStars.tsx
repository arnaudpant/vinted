import { Star } from 'lucide-react';
import React from 'react';

const UserNoteStars: React.FC<{ note: number }> = ({ note }) => {
  const NOTE_MAX = 5;
  const NOTE_MIN = 1;
  if (note > NOTE_MAX || note < NOTE_MIN) return null;
  return (
    <div className="flex">
      {Array.from({ length: note }, (_, index) => {
        return <Star color="orange" fill="orange" key={index} />;
      })}
    </div>
  );
};

export default UserNoteStars;
