import "./App.css";
import W12MHeader from "./components/Header/W12MHeader";
import W12MForm from "./components/Form/W12MForm";

function App() {
  return (
    <div className="container--form">
      <W12MHeader />
      <section className="section--form">
        <W12MForm />
      </section>
    </div>
  );
}

export default App;
