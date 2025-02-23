const Line = ({ rotation = 0, position = {}, className = "" }) => {
  const x = 10;
  const y = 10;
  const width = 80;
  const height = 2;
  const borderRadius = 1;

  return (
    <div style={{ position: "absolute", ...position }} className={className}>
      <svg
        width={width + 20}
        height={width + 20}
        viewBox={`0 0 ${width + 20} ${width + 20}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={`rotate(${rotation}, 50, 50)`}>
          <rect
            x={x}
            y={y}
            width={width}
            height={height}
            rx={borderRadius}
            ry={borderRadius}
            className={`fill-mediumBlueGray ${className ? className : ""}`}
          />
          <rect
            x={x}
            y={y}
            width={height}
            height={width}
            rx={borderRadius}
            ry={borderRadius}
            className={`fill-mediumBlueGray ${className}`}
          />
        </g>
      </svg>
    </div>
  );
};

export default Line;
