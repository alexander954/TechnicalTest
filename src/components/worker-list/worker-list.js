import React from 'react';
import WorkerListItem from '../worker-list-item/worker-list-item.js'

import './worker-list.css';

const WorkerList = ({onDelete,onEdit,showOne}) =>{
    let elements
    if (localStorage.getItem('workers')!=null&&localStorage.getItem('workers')!=="[]")
    {
    elements = JSON.parse(localStorage.getItem('workers')).map((item)=>{
        const {id, ...props} = item;

        return (
            <li className="list" key={id}>
                <WorkerListItem
                     {...props}
                     onDelete={()=>onDelete(id)}
                     onEdit={()=>onEdit(id)}
                     showOne={()=>showOne(id)}/>
            </li>
        )
    })
}
    return (
        <ul>
            {elements}
        </ul>
    )

}



export default WorkerList