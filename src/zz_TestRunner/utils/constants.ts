import CounterDescription from "../Descriptions/CounterDescription/CounterDescription";
import QuoteDescription from "../Descriptions/QuoteDescription/QuoteDescription";
import FetchDescription from "../Descriptions/FetchDescription/FetchDescription";
import FormDescription from "../Descriptions/FormDescription/FormDescription";

export const tests = {
  counter: {
    title: "Numbers",
    url: "counter",
    description: CounterDescription,
  },
  quote: {
    title: "Kanye",
    url: "quote",
    description: QuoteDescription,
  },
  fetch: { title: "Morty", url: "fetch", description: FetchDescription },
  form: { title: "Items", url: "form", description: FormDescription },
};
