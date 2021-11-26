const Link = ({ text }) => {
  return (
    <p className="hidden md:flex text-gray-50 font-bold transform transition duration-300 hover:translate-y-2">
      <a href="google.com">{text}</a>
    </p>
  );
};

export default Link;
