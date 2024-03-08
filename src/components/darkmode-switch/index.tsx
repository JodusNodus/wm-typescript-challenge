import { useDarkMode } from "context/darkModeContext";

export const DarkModeSwitch = ({
  onClick,
  className = "",
}: {
  className?: string;
  onClick: () => void;
}) => {
  const { isDarkModeEnabled, setDarkMode } = useDarkMode();
  return (
    <button
      className={`flex justify-between ${className}`}
      type="button"
      data-testid="darkmode-switch"
      onClick={() => {
        onClick();
        setDarkMode(!isDarkModeEnabled);
      }}
    >
      <span className="md:sr-only">
        Switch to {isDarkModeEnabled ? "light" : "dark"} mode.
      </span>
      <svg
        className="dark:hidden"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
          className="fill-gray-700 stroke-gray-700"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="hidden dark:block"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
          className="fill-white stroke-white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
