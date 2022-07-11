import { Header } from "./components/Header";
import { NotificationButton } from "./components/NotificationButton";
import { SalesCard } from "./components/SalesCard";

const App = () => (
  <>
    <Header />
    <main>
      <section id="sales">
        <div className="dsmeta-container"></div>
        <SalesCard/>
      </section>
    </main>
  </>
);

export default App;
