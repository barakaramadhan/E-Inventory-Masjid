import { useSelector } from "react-redux";

export default function ListBarang() {
  const items = useSelector((state) => state.inventory);

  return (
    <table>
      <thead>
        <tr>
          <th>Nama Barang</th>
          <th>Kuantitas</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.qty}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}