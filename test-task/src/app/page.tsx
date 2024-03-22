import TableLayout from "./components/TableLayout";
import DataSetList from "./components/DataSetList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DataSetList />
      <TableLayout />
    </main>
  );
}
