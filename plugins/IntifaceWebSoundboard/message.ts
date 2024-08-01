type Signal = {
  type: "signal";
  intensity?: number;
  from?: string;
};

export type ClientMessage =
  | {
      type: "connect";
      password: string;
    }
  | {
      type: "disconnect";
    }
  | Signal;

export type ServerMessage =
  | { type: "ok" }
  | {
      type: "bye";
      why: "wrong_password" | "seat_taken";
    }
  | Signal;
