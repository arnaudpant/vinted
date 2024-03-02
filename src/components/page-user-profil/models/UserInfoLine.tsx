const UserInfoLine: React.FC<{
  children: React.ReactNode;
  ComponentPicture: React.ReactNode;
}> = ({ ComponentPicture, children }) => {
  return (
    <div className="my-2 flex items-center gap-2">
      {ComponentPicture}
      {children}
    </div>
  );
};

export default UserInfoLine;
