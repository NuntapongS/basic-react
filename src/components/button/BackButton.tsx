type navigateButtonProps = {
  onClick: () => void;
};

const NavigateBackButton = (props: navigateButtonProps) => {
  return (
    <button
      className="flex justify-center items-center bg-white text-text-back w-[184px] h-12 rounded-full border-4 border-border-back"
      onClick={props.onClick}
    >
      Back
    </button>
  );
};

export default NavigateBackButton;
