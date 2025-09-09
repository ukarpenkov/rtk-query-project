import { useGetAllGoodsQuery } from "./redux";

function App() {
  const { data = [], isLoading } = useGetAllGoodsQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
