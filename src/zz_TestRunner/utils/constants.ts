import NumbersDescription from "../Descriptions/NumbersDescription/NumbersDescription";
import QuoteDescription from "../Descriptions/QuoteDescription/QuoteDescription";
import MortyDescription from "../Descriptions/MortyDescription/MortyDescription";
import ItemsDescription from "../Descriptions/ItemsDescription/ItemsDescription";

export const tests = {
  numbers: {
    title: "Numbers",
    url: "numbers",
    description: NumbersDescription,
  },
  quote: { title: "Quote", url: "quote", description: QuoteDescription },
  morty: { title: "Morty", url: "morty", description: MortyDescription },
  items: { title: "Items", url: "items", description: ItemsDescription },
};
