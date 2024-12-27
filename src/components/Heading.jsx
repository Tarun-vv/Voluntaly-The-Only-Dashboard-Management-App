function Heading({ children, type, marginBottom }) {
  if (type === "h2")
    return (
      <h2 className={`text-3xl font-semibold mb-${marginBottom}`}>
        {children}
      </h2>
    );

  if (type === "h3") {
    return <h3 className="text-xl">{children}</h3>;
  }
}

export default Heading;
