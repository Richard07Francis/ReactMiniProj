import { useState } from "react";
import MenuList from "./menulist";
import {FaMinus, FaPlus} from 'react-icons/fa';

export default function MenuItem({ item }) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
    function handleToggleChildren(getCurrentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
    });
    }

    console.log(displayCurrentChildren);
    

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
                
                {
                    item.children && item.children && item.children.length > 0 && displayCurrentChildren[item.label]?
                    <MenuList list={item.children} />
                    : null
                }
            </li>
}