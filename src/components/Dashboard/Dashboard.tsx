import React from "react";
import Tile from "../Tile/Tile";
import "./Dashboard.css";
import dummyTiles from "./data";

const Dashboard = () => {
  return (
    <div className="root">
      {dummyTiles.map((tile) => (
        <Tile title={tile.title} />
      ))}
    </div>
  );
};

export default Dashboard;
