function Logo({ width }) {
  return (
    <div>
      <img
        src="/hero.png"
        alt=""
        style={{
          width: `${width}%`,
          marginBottom: "30px",
          marginRight: "auto",
          display: "inline-block",
        }}
      />
    </div>
  );
}

export default Logo;
