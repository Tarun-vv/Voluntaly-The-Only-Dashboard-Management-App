function Button({ children, type }) {
  if (type === "add")
    return (
      <button className="p-2 text-lg text-white transition-all duration-100 bg-red-400 rounded-lg hover:bg-red-500 hover:text-white ">
        {children}
      </button>
    );

  return <button>{children}</button>;
}

export default Button;
