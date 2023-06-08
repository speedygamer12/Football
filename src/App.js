import './App.css';
import { Provider } from "react-redux";
import AllRoutes from './config/routes';
import store from "./../src/redux/store";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AllRoutes />
      </Provider>
    </div>
  );
}

export default App;
