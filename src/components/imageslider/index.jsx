import { useEffect, useState } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';
import './styles.css';

export default function ImageSlider({url,limit=5,page=1}){
    
    const [images,setImages] = useState([]);
    const [currSlide,setCurrSlide] = useState(0);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    async function fetchImages(getUrl){
        try{
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();
            if(data){
                setImages(data);
                setLoading(false);
            }
        }catch(e){
            setError(e.message);
            setLoading(false);
        }
    }

    function handlePrevious(){
        setCurrSlide(currSlide===0? images.length - 1: currSlide-1)
    }

    function handleNext(){
        setCurrSlide(currSlide===images.length - 1? 0: currSlide+1)
    }

    useEffect(()=>{
        if(url!=='') fetchImages(`${url}?page=${page}&limit=${limit}`);
    },[url])    

    if(loading){
        return <div>Loading data....</div>
    }
    if(error!==null){
        return <div>Error occured - {error}</div>
    }

    return <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
        {
            images && images.length ?
            images.map((imageItem,index) => (
                <img 
                key={imageItem.id} 
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currSlide===index?"current-image":"current-image hide-current-image"}
                />
            ))
            : null
        }
        <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
        <span className="circle-indicators">
            {
                images && images.length ?
                images.map((_,index) => <button
                key={index}
                className={currSlide===index?"current-indicator":"current-indicator inactive-indicator"}
                onClick={()=>setCurrSlide(index)}
                />)
                : null

            }
        </span>
    </div>
}