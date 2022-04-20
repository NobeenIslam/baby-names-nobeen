interface GenderControlsProps {
  isAllActive: string;
  isMaleActive: string;
  isFemaleActive: string;
  isSalihActive: string;
  setButtonSelect: (arg0: boolean[]) => void;
  setActiveCss: (arg0: string[]) => void;
}

function GenderControls(props: GenderControlsProps): JSX.Element {
  return (
    <>
      <button
        className={props.isAllActive}
        onClick={() => {
          props.setButtonSelect([false, false, false]);
          props.setActiveCss(["active", "", "", ""]);
        }}
      >
        All
      </button>
      <button
        className={props.isMaleActive}
        onClick={() => {
          props.setButtonSelect([true, false, false]);
          props.setActiveCss(["", "active", "", ""]);
        }}
      >
        Male
      </button>
      <button
        className={props.isFemaleActive}
        onClick={() => {
          props.setButtonSelect([false, true, false]);
          props.setActiveCss(["", "", "active", ""]);
        }}
      >
        Female
      </button>
      <button
        className={props.isSalihActive}
        onClick={() => {
          props.setButtonSelect([false, false, true]);
          props.setActiveCss(["", "", "", "active"]);
        }}
      >
        Salih
      </button>
    </>
  );
}

export default GenderControls;
