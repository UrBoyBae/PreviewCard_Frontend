import { useEffect, useState } from "react";
import "../assets/css/Card.css";
import Button from './Button';

const Card = ({img, color, title, content, textColor, bgColor, border, mobile}) => {
  
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 500px)").matches
  )

  useEffect(() => {
    window.matchMedia("(max-width: 500px)").addEventListener('change', e => setMatches( e.matches ));
  }, []);

  const cardStyle = {
    backgroundColor: color,
    borderRadius: !matches  ?  border : mobile  
  }

  return (
    <div className="card" style={cardStyle}>
      <img src={img}/>
      <div className="title">{title}</div>
      <p>
        {content}
      </p>
      <Button textColor={textColor} bgColor={bgColor}/>
    </div>
  );
};

export default Card;
