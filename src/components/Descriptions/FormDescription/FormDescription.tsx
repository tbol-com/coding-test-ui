import React from "react";

const FormDescription: React.FunctionComponent = () => {
  return (
    <div className="formDescription">
      <p>Create a form with the following fields</p>
      <ul>
        <li>title: text, max 30 charachters</li>
        <li>price: number, max value 1,000,000</li>
        <li>description: text</li>
        <li>image: text in url format</li>
        <li>
          category: select with the following options
          <ul>
            <li>Clothing</li>
            <li>Jewelery</li>
            <li>Electronics</li>
          </ul>
        </li>
      </ul>
      <p>
        Description and image are optional fields, all other fields are
        required. Have validation for the form. Submit it to{" "}
        <i>https://fakestoreapi.com/products</i> with POST method. See the API{" "}
        <a
          href="https://fakestoreapi.com/docs"
          target="_blank"
          rel="noreferrer"
        >
          documentation here
        </a>
      </p>
      <p>
        In case of success show the following message `Product has been added`.
        In case of error show corresponding error message
      </p>
      <p>
        Use the <b>src/components/tests/Form/Form.tsx</b> Component. It's
        displayed on the right side.
      </p>
    </div>
  );
};

export default FormDescription;