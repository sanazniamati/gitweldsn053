import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Line, Text } from "react-konva";

const App = () => {
  return (
    <>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Line
            x={10}
            stroke={"green"}
            strokeWidth={3}
            points={[100, 10, 300, 10]}
          />
          <Text x={350} y={2} text={"strokeWidth : 3"} fontSize={20} />

          <Line
            x={10}
            stroke={"green"}
            strokeWidth={1.5}
            points={[100, 40, 300, 40]}
          />
          <Text x={350} y={30} text={"strokeWidth :1.5"} fontSize={20} />

          <Line
            x={10}
            stroke={"green"}
            strokeWidth={1.2}
            points={[100, 70, 300, 70]}
          />
          <Text x={350} y={60} text={"strokeWidth :1.2"} fontSize={20} />

          <Line
            x={10}
            stroke={"green"}
            strokeWidth={0.5}
            points={[100, 100, 300, 100]}
          />
          <Text x={350} y={90} text={"strokeWidth :0.5"} fontSize={20} />

          <Line
            x={10}
            stroke={"green"}
            strokeWidth={0.1}
            points={[100, 130, 300, 130]}
          />
          <Text x={350} y={120} text={"strokeWidth :0.1"} fontSize={20} />

          <Line
            x={10}
            stroke={"green"}
            strokeWidth={0.01}
            points={[100, 160, 300, 160]}
          />
          <Text x={350} y={150} text={"strokeWidth :0.01"} fontSize={20} />
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);