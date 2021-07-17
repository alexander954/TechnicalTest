import React from 'react';

import './show-worker-form.css';

const ShowWorkerForm = ({id,stateChange})=>{
    const workers = JSON.parse(localStorage.getItem('workers'));
    const index = workers.findIndex((item)=>{
        return id===item.id
    });
    const {birthDate,driverLicense,employedDate,firedDate,secondName,gender,patronymic,position,firstName} = workers[index];

    let checkedGM=false,checkedGF=false;
    if (gender==="М")
    {
        checkedGM=true;
    }
    else {
        checkedGF=true;
    }
    let checkDL=false;
    if (driverLicense==="on")
    {
        checkDL=true;
    }
    const collegues=(
        <div className="d-flex">
                    <label className="formLabel">Коллеги</label>
                <div className="colleguesDiv">
                    {
                        workers[index].collegues.map((item,index)=>{
                            return(<input key={index} type="text" defaultValue={item} readOnly></input>)
                        })
                    }
                </div>
                </div>
    );
    let additionalAttributes = [(
        <h3 className="centered">Дополнительные атрибуты</h3>
    )];
    workers[index].additionalAtributes.forEach((item)=>
    {
        additionalAttributes.push(
            <div className="d-flex">
                <label className="formLabel">{item.name}</label>
                <input type="text" value={item.value} readOnly></input>
            </div>
        );
    })
    if (additionalAttributes.length===1)
    {
        additionalAttributes = [(<h3 className="centered">Нет дополнительных атрибутов</h3>)];
    }
    return(
        <div className="formDiv">
            <div className="Addform">
                <div className="d-flex">
                    <label className="formLabel">Фамилия:</label>
                    <input type='text' value={secondName} readOnly></input>
                </div>
                <div className="d-flex">
                <label className="formLabel">Имя:</label>
                    <input type='text' value={firstName} readOnly></input>
                </div>
                <div className="d-flex">
                <label className="formLabel">Отчество:</label>
                    <input type='text' value={patronymic} readOnly></input>
                </div>
                <div className="d-flex">
                <label className="formLabel">Должность:</label>
                <input type='text' value={position} readOnly></input>
                </div>
                <div className="d-flex">
                <label className="formLabel">Дата рождения:</label>
                    <input type='date' value={birthDate} readOnly></input>
                </div>
                <div className="d-flex">
                <label className="formLabel">Пол:</label>
                    <label>М</label><input type="radio" value="М" checked={checkedGM} readOnly/>
                    <label>Ж</label><input type="radio" value="Ж" checked={checkedGF} readOnly/>
                </div>
                <div className="d-flex">
                <label className="formLabel">Дата приёма на работу:</label>
                    <input type='date' value={employedDate} readOnly></input>
                </div>
                <div className="d-flex">
                <label className="formLabel">Дата увольнение:</label>
                    <input type='date' value={firedDate} readOnly></input>
                </div>
                <div className="d-flex">
                <label className="formLabel">Наличие прав:</label>
                    <input  type="checkbox" checked={checkDL} readOnly></input>
                </div>
                {collegues}
                {additionalAttributes}
                <button className="formBtn" onClick={()=>stateChange(2)}>Вернуться</button>
            </div>
            </div>
    )
}

export default ShowWorkerForm 