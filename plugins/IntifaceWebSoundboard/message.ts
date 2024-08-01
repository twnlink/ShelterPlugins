type Signal = {
  type: "signal";
};

export type ClientMessage =
  | {
      type: "connect";
      password: string;
    }
  | {
      type: "disconnect";
    }
  | {
      type: "signal";
    }
  | Signal;

export type ServerMessage =
  | { type: "ok" }
  | {
      type: "bye";
      why: "wrong_password" | "seat_taken";
    }
  | Signal;
