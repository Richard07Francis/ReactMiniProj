import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './styles.css';

export default function StarRating({noOfStars = 5}){

    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex===rating?0:getCurrentIndex);
        setHover(0);
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(){
        setHover(0);
    }

    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_,index)=>{
                index += 1
                return <FaStar
                className={index<=(hover||rating) ? 'active' : 'inactive'}
                key = {index}
                onClick={()=>handleClick(index)}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave()}
                />
            })
        }
    </div>
}