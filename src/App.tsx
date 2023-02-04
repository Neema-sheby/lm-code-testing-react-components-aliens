///////////////////////////////////////////////////////////////////////////////////////////////////

import "./App.css";
import W12MHeader from "./components/Header/W12MHeader";
import W12MForm from "./components/Form/W12MForm";
import { useState } from "react";
import { Data } from "./components/Form/FormDataInterface";

///////////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  const [data, setData] = useState<Data>({
    species: "",
    planet: "",
    numOfBeings: "",
    select: "",
    text: "",
  });

  const dataHandler = (output: Data) => {
    setData(output);
    console.log(data);
  };

  return (
    <div className="container--form">
      <W12MHeader />
      <section className="section--form">
        <W12MForm onSubmit={dataHandler} />
      </section>
    </div>
  );
}

export default App;
