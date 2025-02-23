import { useState } from "react";
import MenuList from "./menulist";
import {FaMinus, FaPlus} from 'react-icons/fa';

export default function MenuItem({ item, status }) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
    function handleToggleChildren(getCurrentLabel){
        setDisplayCurrentChildren(status);
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
        });
        status = displayCurrentChildren;
    }
    
    return  <li>
                <div  className="menu-item">
                    <p>{item.label}</p>
                    {
                        item && item.children && item.children.length > 0 ? <span onClick={()=>handleToggleChildren(item.label)}>
                            {
                                displayCurrentChildren[item.label] ? <FaMinus color="white" size={25}/> : <FaPlus color="white" size={25}/>
                            }
                        </span> : null
                    }
                </div>
                <div className={displayCurrentChildren[item.label] ? "show" : "hide"} >
                {
                    item.children && item.children && item.children.length > 0?
                    <MenuList list={item.children} status={displayCurrentChildren} />
                    : null
                }
                </div>
            </li>
}