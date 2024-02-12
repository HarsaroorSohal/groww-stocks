export default function Loading() {
  return (
    <div className="mx-64 my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(20)].map((_, index) => (
        <div key={index} className="bg-gray-200 p-2 rounded-lg shadow-md">
          <div className="animate-pulse h-40 bg-gray-300 rounded"></div>
          <div className="mt-4">
            <div className="animate-pulse h-6 w-3/4 bg-gray-300 rounded mb-2"></div>
            <div className="animate-pulse h-4 w-full bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
