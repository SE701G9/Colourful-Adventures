import "./ColourButton.css";

type colourProps = {
    colour?: string;
}

export default function ColourButton({colour}: colourProps) {
    const defaultClassName = "colour-button"
    const colourClassName = colour ? `${defaultClassName} bg-${colour}` : defaultClassName;
    return <button className={colourClassName}></button>;
  }