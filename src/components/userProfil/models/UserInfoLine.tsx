const UserInfoLine: React.FC<{
  children: React.ReactNode;
  ComponentPicture: React.ReactNode;
}> = ({ ComponentPicture, children }) => {
  return (
    <div className="flex items-center space-x-3 space-y-1">
      {ComponentPicture}
      {children}
    </div>
  );
};

export default UserInfoLine;
