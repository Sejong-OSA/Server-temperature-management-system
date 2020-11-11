import { handleTempHum } from "./sensor";

let socket = null;

export const getSocket = () => socket;

export const initSocket = (aSocket) => {
  console.log("initsocket");
  const { events } = window;
  socket = aSocket;
  socket.on(events.resTempHum, handleTempHum);
};
