export const PaymentIcon = ({ className = "h-5 w-5" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M2 9H22" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
};

export const TransitIcon = ({ className = "h-5 h-5" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="4"
        y="3"
        width="16"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M4 8H20" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="18" r="1.5" fill="currentColor" />
      <circle cx="16" cy="18" r="1.5" fill="currentColor" />
    </svg>
  );
};

export const AccessControlIcon = ({ className = "h-5 w-5" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2C13.1 2 14 2.9 14 4V6H10V4C10 2.9 10.9 2 12 2Z"
      fill="currentColor"
    />
    <rect
      x="5"
      y="6"
      width="14"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M12 13V16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PriceIcon = ({ className = "h-5 w-5" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 1L3 6V18L12 23L21 18V6L12 1Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M12 8V16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9 12H15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ConvenienceIcon = ({ className = "h-5 w-5" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3 12H21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 3V21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const SecurityIcon = ({ className = "h-5 w-5" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L4 5V11C4 16.52 7.58 21.74 12 23C16.42 21.74 20 16.52 20 11V5L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M10 14L12 16L16 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BatteryIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Battery body */}
    <rect
      x="2"
      y="7"
      width="18"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />

    {/* Battery terminal */}
    <rect x="20" y="10" width="2" height="4" rx="1" fill="currentColor" />

    {/* Inner level (you can customize this) */}
    <rect x="4" y="9" width="10" height="6" rx="1" fill="currentColor" />
  </svg>
);
