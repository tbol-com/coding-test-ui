import React from "react";
import { Routes, Route } from "react-router-dom";
import TestLayout from "./components/TestLayout/TestLayout";
import Dashboard from "./components/Dashboard/Dashboard";
import Counter from "./components/tests/Counter/Counter";
import Quote from "./components/tests/Quote/Quote";
import Fetch from "./components/tests/Fetch/Fetch";
import Form from "./components/tests/Form/Form";

import NotFound from "./components/NotFound/NotFound";
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
