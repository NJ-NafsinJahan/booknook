export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gray-700 border-t-fuchsia-500 rounded-full animate-spin mx-auto"></div>

        <p className="text-white mt-4 text-sm">Loading, please wait...</p>
      </div>
    </div>
  );
}
