import ProductList from "./components/ProductList";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ProductList />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;