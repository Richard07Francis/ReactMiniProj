import { useState } from "react";
import data from "./data";
import './style.css';

 export default function Accordian(){
    
    const [selected,setSelected] = useState(null);
    const [enableMultiSelection,setEnableMultiSelection] = useState(false);
    const [multiple,setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId===selected ? null : getCurrentId);
    }
    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];
        const findIdx = cpyMultiple.indexOf(getCurrentId);

        if(findIdx===-1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIdx,1);
        setMultiple(cpyMultiple);
    }

    function toggleSelect(){
        setMultiple([]);
        setSelected(null);
        setEnableMultiSelection(!enableMultiSelection);
    }

    return <div className="wrapper">
        <button onClick={()=>toggleSelect()}>{enableMultiSelection ? "Disable" : "Enable"} Multi Selection</button>
        <div className="accordian">
            {
                data && data.length > 0 
                ? data.map(dataItem=> <div className="item">
                    <div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMultiSelection 
                        ? multiple.indexOf(dataItem.id)!==-1 && (
                            <div className="content">{dataItem.answer}</div>
                        )
                        : selected === dataItem.id && (
                            <div className="content">{dataItem.answer}</div>
                        )
                    }
                </div> )
                : <div>No Data Found!</div>
            }
        </div>
    </div>
}