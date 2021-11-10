const Text = ({ title, subtitle }) => {
  return (
    <div className="flex flex-column flex-1 items-center justify-center">
      <p className="text-blueGray-900">{title}</p>
      <p className="text-blueGray-500">{subtitle}</p>
    </div>
  );
};

export default Text;
