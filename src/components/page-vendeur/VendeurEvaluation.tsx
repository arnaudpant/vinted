import CommentFromUser from '../page-catalog/models/CommentFromUser';
import UserNoteStars from '../ui/UserNoteStars';

type Props = {
  stars: number;
  evaluations: number;
};

const VendeurEvaluation = ({ stars, evaluations }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl font-semibold">{stars ?? 0}</h2>
        <div className="flex">
          <UserNoteStars note={stars ?? 0} />
        </div>
        <p>({evaluations})</p>
        <hr className="my-4" />
      </div>
      <CommentFromUser userId={1} />
      <CommentFromUser userId={2} />
    </>
  );
};

export default VendeurEvaluation;
