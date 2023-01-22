import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Line, Text, Group } from "react-konva";

const App = () => {
  const [strokeWidth, setStrokeWidth] = useState(3);
  const handelOnChange = (e) => {
    setStrokeWidth(e.target.value);
  };
  return (
    <>
      <input type={"number"} value={strokeWidth} onChange={handelOnChange} />
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Line
            x={10}
            y={7}
            stroke={"black"}
            strokeWidth={strokeWidth}
            points={[300, 0, 600, 0]}
          />
          <Text
            x={650}
            y={-1}
            text={`strokeWidth : ${strokeWidth}`}
            fontSize={20}
          />
          <Group y={50}>
            <Line
              x={10}
              stroke={"black"}
              strokeWidth={3}
              points={[100, 10, 300, 10]}
            />
            <Text x={350} y={2} text={`strokeWidth : 3`} fontSize={20} />
            <Line
              x={10}
              stroke={"black"}
              strokeWidth={1.5}
              points={[100, 40, 300, 40]}
            />
            <Text x={350} y={30} text={"strokeWidth :1.5"} fontSize={20} />

            <Line
              x={10}
              stroke={"black"}
              strokeWidth={1.2}
              points={[100, 70, 300, 70]}
            />
            <Text x={350} y={60} text={"strokeWidth :1.2"} fontSize={20} />

            <Line
              x={10}
              stroke={"black"}
              strokeWidth={0.5}
              points={[100, 100, 300, 100]}
            />
            <Text x={350} y={90} text={"strokeWidth :0.5"} fontSize={20} />

            <Line
              x={10}
              stroke={"black"}
              strokeWidth={0.1}
              points={[100, 130, 300, 130]}
            />
            <Text x={350} y={120} text={"strokeWidth :0.1"} fontSize={20} />

            <Line
              x={10}
              stroke={"black"}
              strokeWidth={0.01}
              points={[100, 160, 300, 160]}
            />
            <Text x={350} y={150} text={"strokeWidth :0.01"} fontSize={20} />
          </Group>
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
