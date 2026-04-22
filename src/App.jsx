import FormBarang from "./components/FormBarang";
import ListBarang from "./components/ListBarang";

export default function App() {
  return (
    <div className="container">
      <h2>E-Inventory Masjid</h2>
      <FormBarang />
      <ListBarang />
    </div>
  );
}