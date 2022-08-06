import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContents } from "./actions/contents";
import Content from "./components/Content";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContents());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Redux Setup tutorials</h1>
      <Content />
    </div>
  );
}

export default App;
