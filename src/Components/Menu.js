import PropTypes from "prop-types";

const Menu = ({ setVisibleMenu }) => {
  return (
    <div className="w-7/12 h-96 m-auto bg-gray-600 opacity-75 absolute flex flex-column flex-1 md:hidden left-20 top-40">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 fill text-gray-50"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => {
          setVisibleMenu(false);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

Menu.propTypes = {
  setVisibleMenu: PropTypes.func,
};

Menu.defaultProps = {
  setVisibleMenu: () => {
    console.log("Menu.js setVisibleMenu collapsed");
  },
};

export default Menu;
