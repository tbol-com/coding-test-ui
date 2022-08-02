import CounterDescription from "../components/Descriptions/CounterDescription/CounterDescription";
import QuoteDescription from "../components/Descriptions/QuoteDescription/QuoteDescription";
import FetchDescription from "../components/Descriptions/FetchDescription/FetchDescription";
import FormDescription from "../components/Descriptions/FormDescription/FormDescription";

export const tests = {
  counter: {
    title: "Counter",
    url: "counter",
    description: CounterDescription,
  },
  quote: {
    title: "Quote",
    url: "quote",
    description: QuoteDescription,
  },
  fetch: { title: "Fetch", url: "fetch", description: FetchDescription },
  form: { title: "Form", url: "form", description: FormDescription },
};
