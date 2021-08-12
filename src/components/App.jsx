import "./App.css";
import { useReducer } from "react";

const initialState = {
  motor: "OFF",
  gear: 0,
  speed: 0,
};

function reducer(previousState, action) {
  switch (action.type) {
    case "start":
      if (Math.random() < 0.5) {
        alert("Your Boat's Motor has started");
        return {
          motor: "ON",
          gear: 0,
          speed: previousState.speed,
        };
      } else {
        alert("Your Boat's Motor has not started");
        return {
          motor: initialState.motor,
          gear: 0,
          speed: 0,
        };
      }

    case "stop":
      alert("Your Boat's Motor has stopped");
      return {
        motor: initialState.motor,
        gear: initialState.gear,
        speed: previousState.speed,
      };

    case "gearUp":
      if (previousState.gear === 5) {
        return previousState;
      }
      if (previousState.motor === "ON") {
        return {
          gear: previousState.gear + 1,
          motor: previousState.motor,
          speed: previousState.speed,
        };
     }

      return previousState;

    case "gearDown":
      if (previousState.gear === -2) {
        return previousState;
      }
      if (previousState.motor === "ON") {
        return {
          gear: previousState.gear - 1,
          motor: previousState.motor,
          speed: previousState.speed,
        };
      }

      return previousState;

    case "speedUp":
      if (previousState.motor === "ON" && previousState.gear !== 0)
        return {
          motor: previousState.motor,
          gear: previousState.gear,
          speed: previousState.speed + previousState.gear * 10,
        };

    case "speedDown":
      if (previousState.motor === "ON" && previousState.gear !== 0)
        return {
          motor: previousState.motor,
          gear: previousState.gear,
          speed: previousState.speed - previousState.gear * 10,
        };


    default:
      alert("Unknown action!!");
      return previousState;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("State is ", state);

  return (
    <div className="Game_App">
      <h1>BOAT GAME</h1>
      MOTOR: {state.motor}
      <div>
        <button onClick={() => dispatch({ type: "start" })} className="btn_start">🔑</button>
        <button onClick={() => dispatch({ type: "stop" })} className="btn_stop">🛑</button>
      </div>
      {/* DISTANCE: {state.distance}
      <button onClick={() => dispatch({ type: "distance"})} className="btn_distance">check</button> */}
      <div className="boatData">
        <span className="gear">GEAR: {state.gear}</span>
        <span className="speed">SPEED: {state.speed}</span>
      </div>
      <button onClick={() => dispatch({ type: "gearUp" })} className="btn_GUp">GEAR ➕</button>
      <button onClick={() => dispatch({ type: "gearDown" })} className="btn_GDown">GEAR ➖</button>
      <button onClick={() => dispatch({ type: "speedUp" })} className="btn_SUp"> SPEED ➕</button>
      <button onClick={() => dispatch({ type: "speedDown" })} className="btn_SDown">SPEED ➖</button>
    </div>
  );
}

export default App;
