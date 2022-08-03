import React from "react";
import "./FetchDescription.css";

const FetchDescription: React.FunctionComponent = () => {
  return (
    <div className="fetchDescription">
      <p>
        This is a <i>GET</i> endpoint
        <br />
        <div className="box">"https://rickandmortyapi.com/api/character"</div>
        <br />
        that returns the <i>Rick and Morty</i> characters list
      </p>
      <span>Format: </span>
      <p className="box">
        <samp>
          &#123; "info": &#123; "count": 826, "pages": 42, "next":
          "https://rickandmortyapi.com/api/character/?page=2" "prev": null
          &#125;, "results": [ // ... ] &#125;
        </samp>
      </p>

      <p>
        {" "}
        See the{" "}
        <a
          className="link"
          href="https://rickandmortyapi.com/documentation/#rest"
          target="_blank"
          rel="noreferrer"
        >
          documentation here.
        </a>{" "}
      </p>
      <p>
        Display characters in a table. For each charachter show the{" "}
        <b>image, name, origin name, location name</b> and <b>episodes count</b>
        .
      </p>
      <p>
        Use the <b>src/components/tests/Fetch/Fetch.tsx</b> component. It's
        displayed on the right side.
      </p>
    </div>
  );
};

export default FetchDescription;
