import { type ComponentProps } from "solid-js";

// @ts-expect-error bad framework
import styles from "./styles.scss";

const {
  ui: { Slider: ShelterSlider },
} = shelter;

type SliderProps = {
  valueFormatter?: (n: number) => string;
} & ComponentProps<typeof ShelterSlider>;
const Slider = (props: SliderProps) => {
  if (props.valueFormatter) {
    return (
      <div class={styles["sliderBox"]}>
        <div class={styles["sliderValue"]}>
          {props.valueFormatter(props.value)}
        </div>
        <div class={styles["slider"]}>
          <ShelterSlider {...props} />
        </div>
      </div>
    );
  }

  return (
    <div class={styles["slider"]}>
      <ShelterSlider {...props} />
    </div>
  );
};

export default Slider;
