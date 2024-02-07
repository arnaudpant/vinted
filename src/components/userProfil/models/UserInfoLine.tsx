const UserInfoLine: React.FC<{
  children: React.ReactNode;
  ComponentPicture: React.ReactNode;
}> = ({ ComponentPicture, children }) => {
  return (
    <div className="flex items-center space-x-2 ">
      <div>{ComponentPicture}</div>
      <div>{children}</div>
    </div>
  );
};

export default UserInfoLine;
