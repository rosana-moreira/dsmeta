import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/Header";
import { SalesCard } from "./components/SalesCard";

const App = () => (
  <>
    <ToastContainer />
    <Header />
    <main>
      <section id="sales">
        <div className="dsmeta-container"></div>
        <SalesCard />
      </section>
    </main>
  </>
);

export default App;
