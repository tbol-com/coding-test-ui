import React from "react";
import "./Tile.css";

interface TileProps {
  title: string;
}

const Tile: React.FC<TileProps> = ({ title }: TileProps) => {
  return <div className="tile">{title}</div>;
};

export default Tile;
