import { environment } from "../settings/settings";

const debug = {
  globalState(json: object, flag: string, color: string) {
    return (
      environment == "dev" &&
      console.log(
        `%c${flag}`,
        `background: ${color} ; color: #fff;padding: 6px 10px; border-radius:10px`,
        json,
      )
    );
  },
  debugError: function (msg: string) {
    console.log("%c" + msg, "color:" + "tomato" + ";font-weight:bold;");
  },
  debugWarning: function (msg: string) {
    console.log("%c" + msg, "color:" + "yellow" + ";font-weight:bold;");
  },
  debugSuccess: function (msg: string) {
    console.log("%c" + msg, "color:" + "green" + ";font-weight:bold;");
  },
  debugInfo: function (msg: string) {
    console.log("%c" + msg, "color:" + "#4867e5" + ";font-weight:bold;");
  },
};

export { debug };
