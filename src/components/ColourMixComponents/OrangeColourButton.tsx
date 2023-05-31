import "./ColourButton.css";

type secondaryColourProps = {
  onclick: () => void;
};
export default function OrangeColourButton({ onclick }: secondaryColourProps) {
  return (
    <button
      className="colour-button  bg-[#f37b06] hover:bg-[#D46C04]"
      onClick={onclick}
    ></button>
  );
}
