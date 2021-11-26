const Alert = ({ text }) => {
  return (
    <div className="animate-pulse border border-red-400 rounded bg-red-500 text-red-800 font-bold p-4 absolute flex flex-1 items-center justify-center top-20 left-1/2">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="fill text-red-400 h-6 w-6 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
      {text}
    </div>
  );
};

export default Alert;
