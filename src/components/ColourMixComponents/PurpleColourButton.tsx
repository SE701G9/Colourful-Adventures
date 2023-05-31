import "./ColourButton.css";

type secondaryColourProps = {
  onclick: () => void;
};

export default function PurpleColourButton({ onclick }: secondaryColourProps) {
  return (
    <button
      className="colour-button  bg-[#6c358e] hover:bg-[#46225C]"
      onClick={onclick}
    ></button>
  );
}
