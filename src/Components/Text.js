const Text = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col flex-1 items-center relative top-20">
      <p className="text-gray-900 font-bold text-5xl">{title}</p>
      <p className="text-blue-600 text-3xl">{subtitle}</p>
    </div>
  );
};

export default Text;
