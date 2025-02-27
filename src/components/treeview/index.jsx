import MenuList from "./menulist";
import './styles.css';

export default function TreeView({ menus = [] }) {
    
    return <div className="tree-view-container">
        <MenuList list={menus} />
    </div>
}