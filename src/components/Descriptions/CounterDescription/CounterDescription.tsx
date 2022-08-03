import React from "react";

const CounterDescription: React.FunctionComponent = () => {
  return (
    <div>
      <p>
        Open the Counter Component -
        <b>src/components/tests/Counter/Counter.tsx</b>
      </p>
      <p>It's is displayed on the right side.</p>

      <ul>
        <li>Improve the code quality by using the latest React features.</li>

        <li>
          Prevent the counter from going below zero. When anyone tries to reduce
          the counter below zero show a banner with the following message `
          Counter value can't be negative`.`
        </li>
      </ul>
    </div>
  );
};

export default CounterDescription;
