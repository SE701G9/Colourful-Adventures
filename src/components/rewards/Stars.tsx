import './Stars.css'

type StarsProps = {
      src: string;
      alt: string;
}

const Stars = ({src,alt} : StarsProps) => {

      return(
            <img 
            className="stars-image"
            src = {src}
            alt = {alt}/>
      );

}

export default Stars