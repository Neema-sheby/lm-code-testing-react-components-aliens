import { useState } from "react";
import Input from "./Input";

const W12MForm = () => {
  const [value, setValue] = useState<string>("");

  return (
    <section className="w12MForm">
      <form>
        <Input
          id="Species-name"
          label="Species Name"
          type="text"
          value={value}
          onChange={(e) => {
            console.log(e.target.value);
            setValue(e.target.value);
          }}
        />
      </form>
    </section>
  );
};

export default W12MForm;
