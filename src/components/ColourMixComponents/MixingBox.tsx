import OrangeColourButton from "./OrangeColourButton";
import "./MixingBox.css";
import BlueColourButton from "./BlueColourButton";
import YellowColourButton from "./YellowColourButton";
import ColourButton from "./ColourButton";
import { useState } from "react";

export default function MixingBox() {

  const [areColoursMixed, setColoursMixed] = useState<boolean>(false);

  const mixColours = () => {
    setColoursMixed(true)
  }

  return (
    <div className="mixing-box" onClick={mixColours} >
      {!areColoursMixed ? 
        <div className="mixing-box grid grid-cols-2 gap-16 grid-rows-1">
          {/* yellow */}
          <div className="button-1 col-span-1">
            <ColourButton colour="[#F2C029]" />
          </div>

          {/* red */}
          <div className="button-2 col-span-1">
            <ColourButton colour="[#f22929]" />
          </div>
        </div> 
        : 
        <div className="colours-mixed">
          <div className="button-3">
            <OrangeColourButton />
          </div>
        </div>
      }
      
    </div>
  );
}
