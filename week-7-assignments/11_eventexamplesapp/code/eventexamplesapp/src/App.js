import React from "react";
import Counter from "./components/Counter";
import WelcomeButton from "./components/WelcomButton";
import SyntheticEvent from "./components/SyntheticEvent";
import CurrencyConverter from "./components/CurrencyConverter";

function App()
{
  return (
    <div className="app">
      <h1>React event Example</h1>
      <section>
        <h2>Counter Example</h2>
        <Counter/>
      </section>

      <section>
        <h2>Welcome button</h2>
        <WelcomeButton/>
      </section>

      <section>
        <h2>Synthetic Event </h2>
        <SyntheticEvent/>
      </section>

      <section>
        <h2>Currency converter</h2>
        <CurrencyConverter/>
      </section>
    </div>
  );
}
export default App;