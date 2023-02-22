import { Provider } from "react-redux";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Preview from "./components/Preview";
import store from "./redux/store";
import './styles/styles.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <section>
        <InputForm />
        <Preview />
      </section>
    </Provider>
  );
}

export default App;
