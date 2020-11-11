/* eslint-disable no-undef */

import { handleTempHum } from "./sensor";

let socket = null;

export const getSocket = () => socket;

export const initSocket = (aSocket) => {
  console.log("initsocket");
  const { events } = window;
  console.log(events);
  socket = aSocket;
  socket.on(events.resTempHum, handleTempHum);
  // socket.on(events.playerUpdate, handlePlayerUpdate);
};
