import RedColourButton from "./RedColourButton";
import "./MixingBox.css";
import BlueColourButton from "./BlueColourButton";
import YellowColourButton from "./YellowColourButton";

export default function MixingBox() {
  return (
    <div className="mixing-box grid grid-cols-2 gap-24 grid-rows-1">
      <div className="button-1 col-span-1">
        <YellowColourButton />
      </div>

      <div className="button-2 col-span-1">
        <RedColourButton />
      </div>
    </div>
  );
}
