const LoadingCircularProgress = () => {
  return (
      <div className=" h-12 w-12 animate-spin">
        <svg width="48px" height="48px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" ><circle cx="50" cy="50" fill="none" stroke="#017782" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="matrix(1,0,0,1,0,0)"  ></circle></svg>
      </div>
  );
};

export default LoadingCircularProgress;
