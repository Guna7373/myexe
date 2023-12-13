import "./App.css";
import Customeradd from "./Customeradd";
// import Customerview from './Customerview';
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>redux add</h1>
        <Customeradd />
        {/* <Customerview/> */}
      </div>
    </Provider>
  );
}

export default App;
