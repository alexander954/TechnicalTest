import React from 'react';
import './worker-list-item.css'


export default class WorkerListItem extends React.Component{

    render(){
        const {secondName,firstName,birthDate,onDelete,onEdit,showOne} = this.props;


        return(
            <div className="list-item">
                <h3 className="list-item-element">
                    {secondName} {firstName} {birthDate}
                </h3>
                <div>
                    <button className="list-item-element" onClick={showOne}>Посмотреть</button>
                    <button className="list-item-element" onClick={onEdit}>Редактировать</button>
                    <button className="list-item-element" onClick={onDelete}>Удалить</button>
                </div>
            </div>
        )
        }
}