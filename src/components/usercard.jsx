export default function UserCard({ name, email }) {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto  bg-white shadow-lg shadow-gray-500 rounded-lg p-6 border border-gray-200 text-center hover:bg-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3 break-words">{name}</h2>
      <p className="text-lg text-gray-600 break-words">{email}</p>
    </div>
  );
}
