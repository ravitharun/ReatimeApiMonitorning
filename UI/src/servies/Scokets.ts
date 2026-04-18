import { io } from "socket.io-client";
import { Scoket_API_URL, userinfo } from "./apivesrion";
console.log(Scoket_API_URL, 'Scoket_API_URL');

export const socket = io(Scoket_API_URL, {
  query: {
    userId: JSON.parse(userinfo).userEmpId,
  },
  transports: ["websocket"],
  autoConnect: true,
});