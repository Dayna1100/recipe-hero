import React, { useState, useEffect } from "react";
import rainbowData from "./Components/rainbow.json";

const Rainbow = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    setColors(rainbowData.colors);
  }, []);

  const addColor = (color) => {
    setColors([...colors, color]);
  };

  const removeColor = (index) => {
    const newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
  };

  return (
    <div>
      <h1>Rainbow Component</h1>
      <div className="colors">
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color, width: "50px", height: "50px" }}
            onClick={() => removeColor(index)}
          ></div>
        ))}
      </div>
      <button onClick={() => addColor("red")}>Add Color</button>
      <img alt="rainbow"
        src="./images/bread.jpg"
        style={{ display: colors.length > 0 ? "block" : "none" }}
      />
    </div>
  );
};

export default Rainbow;