import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContents } from "./actions/contents";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContents());
  }, [dispatch]);

  return <div className="App">Redux Setup tutorials</div>;
}

export default App;
