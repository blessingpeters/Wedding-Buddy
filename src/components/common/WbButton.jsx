/* eslint-disable react/prop-types */
const WbButton = ({ text, size = 'normal', variant = 'filled', className, onClick }) => {
    let baseClasses = variant === 'filled'
    ? "bg-burgundy-100 text-white border border-burgundy-100  hover:bg-burgundy-50"
    : "text-burgundy-100 border border-burgundy-100";

    let sizeClasses = {
        small: "py-2 px-4 text-sm",
        normal: "py-4 px-8 text-lg",
        large: "py-6 px-12 text-xl",
    }[size];

  return (
    <button
      className={`${baseClasses} box-border rounded-md transition duration-300" ${className} ${sizeClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default WbButton;

