const CategoryFastfood = ({ backgroundColor = '#636363', iconColor = 'white' }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_428_1378)">
        <circle cx="12" cy="12" r="12" fill={backgroundColor} />
        <path
          d="M15.9666 19.1998H17.0531C17.603 19.1998 18.0546 18.7743 18.12 18.2376L19.2 7.45071H15.9273V4.7998H14.6379V7.45071H11.3848L11.5811 8.98235C12.7004 9.28999 13.7477 9.84635 14.376 10.4616C15.3186 11.3911 15.9666 12.3533 15.9666 13.9242V19.1998ZM4.80005 18.5453V17.8907H14.6379V18.5453C14.6379 18.8987 14.3433 19.1998 13.9637 19.1998H5.45459C5.09459 19.1998 4.80005 18.8987 4.80005 18.5453ZM14.6379 13.9634C14.6379 8.72708 4.80005 8.72708 4.80005 13.9634H14.6379ZM4.80005 15.2725H14.6182V16.5816H4.80005V15.2725Z"
          fill={iconColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_428_1378">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CategoryFastfood;
