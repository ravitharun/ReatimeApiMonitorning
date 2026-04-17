import { socket } from "./Scokets";

let isRegistered = false;

export const registerCheckLogs = (callback: (data: any) => void) => {
  if (isRegistered) return;
  socket.off("CheckLogsNotif");
  socket.on("CheckLogsNotif", callback);

  isRegistered = true;
};