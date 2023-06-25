import './App.css';
import { Provider } from "react-redux";
import AllRoutes from './config/routes';
import store from "./../src/redux/store";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer />
        <AllRoutes />
      </Provider>
    </div>
  );
}

export default App;
