import DataSetList from "./components/DataSetList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-24">
      <h1 className="mb-10 font-bold text-2xl">
        Welcome to my Data Set visiuals
      </h1>
      <DataSetList />
    </main>
  );
}
