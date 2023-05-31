import "./ColourButton.css";

type secondaryColourProps = {
  onclick: () => void;
};

export default function GreenColourButton({ onclick }: secondaryColourProps) {
  return (
    <button
      className="colour-button  bg-[#82BF45] hover:bg-[#5F8C32]"
      onClick={onclick}
    ></button>
  );
}
