const CategoryChinesefood = ({ backgroundColor = '#636363', iconColor = 'white' }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_428_1375)">
        <circle cx="12" cy="12" r="12" fill={backgroundColor} />
        <path
          d="M18.8999 5.8501L9.8999 6.9076V8.1001H18.8999V8.8501H9.8999V12.6001H18.8999C18.8999 13.9576 18.4724 15.1951 17.6399 16.3126C16.8074 17.4301 15.7274 18.2476 14.3999 18.7876V20.1001H8.3999V18.7876C7.0799 18.2476 5.9924 17.4226 5.1599 16.3126C4.3274 15.2026 3.8999 13.9576 3.8999 12.6001H6.1499V6.6001L18.8999 5.1001V5.8501ZM6.8999 7.2601V8.1001H7.6499V7.1851L6.8999 7.2601ZM6.8999 8.8501V12.6001H7.6499V8.8501H6.8999ZM9.1499 12.6001V8.8501H8.3999V12.6001H9.1499ZM9.1499 8.1001V7.0126L8.3999 7.0801V8.1001H9.1499Z"
          fill={iconColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_428_1375">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CategoryChinesefood;
