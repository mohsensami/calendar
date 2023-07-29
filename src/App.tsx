import "./App.css";
import Blog from "./containers/Blog";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <Blog />;
    </Provider>
  );
}

export default App;
