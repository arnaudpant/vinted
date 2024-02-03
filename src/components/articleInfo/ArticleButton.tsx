type ArticleButtonProps = {
  backgroundColor: string;
  textColor: string;
  label: string;
};

const ArticleButton = ({
  backgroundColor,
  textColor,
  label,
}: ArticleButtonProps) => {
  return (
    <button
      className={`rounded border border-vintedGreen bg-vintedGreen py-2 ${backgroundColor} ${textColor}`}
    >
      {label}
    </button>
  );
};

export default ArticleButton;
