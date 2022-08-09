import React from "react";
import { Routes, Route } from "react-router-dom";
import TestLayout from "./TestLayout/TestLayout";
import Dashboard from "./TestComponents/Dashboard/Dashboard";
import Counter from "../Counter/Counter";
import Quote from "../Quote/Quote";
import Fetch from "../Fetch/Fetch";
import Form from "../Form/Form";

import NotFound from "./NotFound/NotFound";
import { tests } from "./utils/constants";

import "./App.css";

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route
      path={tests.counter.url}
      element={
        <TestLayout test={tests.counter}>
          <Counter />
        </TestLayout>
      }
    />
    <Route
      path={tests.quote.url}
      element={
        <TestLayout test={tests.quote}>
          <Quote />
        </TestLayout>
      }
    />
    <Route
      path={tests.fetch.url}
      element={
        <TestLayout test={tests.fetch}>
          <Fetch />
        </TestLayout>
      }
    />
    <Route
      path={tests.form.url}
      element={
        <TestLayout test={tests.form}>
          <Form />
        </TestLayout>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
