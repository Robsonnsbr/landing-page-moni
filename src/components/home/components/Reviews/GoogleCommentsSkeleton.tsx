const GoogleCommentsSkeleton = () => {
  return (
    <div className="space-y-4 p-4  w-full border rounded-lg shadow-sm">
      <h3 className="text-center text-deepIndigoBlue"> REVIEWS</h3>
      {[...Array(6)].map((_, index) => (
        <div key={index} className="flex space-x-3 ">
          <div className="w-10 h-10 bg-deepIndigoBlue rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-deepIndigoBlue rounded w-1/3" />
            <div className="h-3 bg-deepIndigoBlue rounded w-1/2" />
            <div className="h-3 bg-deepIndigoBlue rounded w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoogleCommentsSkeleton;
