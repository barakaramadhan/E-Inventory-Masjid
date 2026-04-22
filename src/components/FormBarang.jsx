import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/inventory/inventorySlice";

export default function FormBarang() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ name, qty }));
    setName("");
    setQty("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nama Barang"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Kuantitas"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}