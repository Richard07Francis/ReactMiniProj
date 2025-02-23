import MenuItem from "./menuitem";

export default function MenuList({ list=[], status={} }) {
    return (<ul className="menu-list-container">
        {
            list && list.length ?
            list.map(listItem => <MenuItem item={listItem} status={status} />)
            : null
        }
    </ul>
    );
}