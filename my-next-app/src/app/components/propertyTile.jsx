import "./style.css";

export default function PropertyTile({ data, tileIndex = 0 }) {
  const colorClasses = ["tile-red", "tile-green", "tile-blue", "tile-yellow", "tile-pink"];
  const tileClass = colorClasses[tileIndex % colorClasses.length];

  return (
    <div className={`property-tile ${tileClass}`}>
      <span className="property-name">{data.name}</span>
      <span className="property-value">{data.value}</span>
    </div>
  );
}