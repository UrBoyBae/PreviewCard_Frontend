import { useState } from 'react';
import '../assets/css/Button.css';

const Button = ({textColor, bgColor}) => {
    const [isHover, setIsHover] = useState();
    const onHover = () => {
        setIsHover(true);
    }
    const notHover = () => {
        setIsHover(false);
    }

    const styleButton = {
        color : isHover != true  ? textColor : 'hsl(0, 0%, 95%) '   ,
        backgroundColor : isHover != true ? 'hsl(0, 0%, 95%)' : bgColor ,
        border: isHover != true ? '2px solid hsl(0, 0%, 95%)' : '2px solid hsl(0, 0%, 95%)'
    }

    return(
        <div>
            <button className='button' style={styleButton} onMouseEnter={onHover} onMouseLeave={notHover} >
                Learn More
            </button>
        </div>
    );
}

export default Button;