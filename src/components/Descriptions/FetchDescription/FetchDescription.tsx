import React from "react";
import "./FetchDescription.css";

const FetchDescription: React.FunctionComponent = () => {
  return (
    <div className="fetchDescription">
      <p>
        Use <b>https://rickandmortyapi.com/api/character</b> endpoint to fetch
        list of characters of the first page. See the{" "}
        <a
          className="link"
          href="https://rickandmortyapi.com/documentation/#rest"
          target="_blank"
          rel="noreferrer"
        >
          documentation
        </a>{" "}
        here. Display charachters in a table. For each charachter show the
        image, name, origin name, location name and episodes count.
      </p>
      <p>
        Use the <b>src/components/tests/Fetch/Fetch.tsx</b> component. It's
        displayed on the right side.
      </p>
    </div>
  );
};

export default FetchDescription;
