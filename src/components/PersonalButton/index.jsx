export default function PersonalButton({
  action = () => {},
  label = "Personal text"
}) {
  return (
    <button
      className="bg-gray-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      onClick={action}
    >
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21 20l-4.35-4.35A7.935 7.935 0 0018 10a8 8 0 10-8 8 7.935 7.935 0 005.65-2.35L20 21l1-1zM4 10a6 6 0 1112 0 6 6 0 01-12 0z" />
      </svg>
      <span>{label}</span>
    </button>
  );
}
