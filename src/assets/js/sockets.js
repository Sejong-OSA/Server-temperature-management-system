import { handleTemp, handleHum } from "./sensor";
import { BELedOnOff } from "./actuator";

let socket = null;

export const getSocket = () => socket;

export const initSocket = (aSocket) => {
  const { events } = window;
  socket = aSocket;
  socket.on(events.resTemp, handleTemp);
  socket.on(events.resHum, handleHum);
  socket.on(events.setLed, BELedOnOff);
};
