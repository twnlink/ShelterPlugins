import { ButtplugClientDevice } from "buttplug";
import * as Buttplug from "buttplug";

const {
  solid: { createSignal },
} = shelter;

const [devices, setDevices] = createSignal<ButtplugClientDevice[]>([]);
const [selectedDevice, setSelectedDevice] = createSignal<
  Buttplug.ButtplugClientDevice | undefined
>();

export { devices, setDevices, selectedDevice, setSelectedDevice };
