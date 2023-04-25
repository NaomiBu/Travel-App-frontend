import { useState } from "react";


  export default function  CountryList() {
    const options = [
        { value: "FR", label: "France 🇫🇷" },
        { value: "ES", label: "Spain 🇪🇸" },
        { value: "US", label: "United States 🇺🇸" }
    ];
    const [value, setValue] = useState("");
  
    return (
      <form>

        <select value={value} onChange={(event) => setValue(event.target.value)}>
          {options.map((option, index) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>
    );
  }