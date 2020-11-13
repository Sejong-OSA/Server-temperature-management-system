import { handleTemp, handleHum } from "./sensor";

let socket = null;

export const getSocket = () => socket;

export const initSocket = (aSocket) => {
  const { events } = window;
  socket = aSocket;
  socket.on(events.resTemp, handleTemp);
  socket.on(events.resHum, handleHum);
};
