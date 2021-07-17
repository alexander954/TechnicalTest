import React from 'react';
import './edit-worker-form.css';

export default class EditWorkerForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            workers: JSON.parse(localStorage.getItem('workers')),
            index: JSON.parse(localStorage.getItem('workers')).findIndex((item)=>{
                if(this.props.id!==item.id)
                {
                    return false
                }
                else {
                    return item
                }
            }),
            position:['Frontend Разработчик', 'Backend разработчик', 'Аналитик', 'HR'],
            currentWorker:""
        }
        this.state.currentWorker=`${this.state.workers[this.state.index].secondName} ${this.state.workers[this.state.index].firstName} ${this.state.workers[this.state.index].patronymic}`;
        this.handleEdit=this.handleEdit.bind(this);
        this.saveChanges=this.saveChanges.bind(this);
        this.dateChange=this.dateChange.bind(this);
        this.handleMultipleSelect = this.handleMultipleSelect.bind(this);
        this.addAdditionalAtribute = this.addAdditionalAtribute.bind(this);
        this.editAdditionalAtribute=this.editAdditionalAtribute.bind(this);
        this.deleteAdditionalAtribute=this.deleteAdditionalAtribute.bind(this);
        this.checkBoxEdit = this.checkBoxEdit.bind(this);
    }
    
    handleEdit(e){
        if ((e.target.name==="secondName"||e.target.name==="firstName"||e.target.name==="patronymic"))
        {
            let workersArray = [...this.state.workers];
            workersArray.forEach((item,highIndex)=>{
                if(item.id!==this.props.id){
                    item.collegues.forEach((collegue,lowIndex)=>{
                    if (collegue===this.state.currentWorker)
                    {
                        switch(e.target.name)
                        {
                            case "secondName":
                            {
                                workersArray[highIndex].collegues[lowIndex]=`${e.target.value} ${workersArray[highIndex].collegues[lowIndex].split(' ')[1]} ${workersArray[highIndex].collegues[lowIndex].split(' ')[2]||""}`;
                                break
                            }
                            case "firstName":
                            {
                                workersArray[highIndex].collegues[lowIndex]=`${workersArray[highIndex].collegues[lowIndex].split(' ')[0]} ${e.target.value} ${workersArray[highIndex].collegues[lowIndex].split(' ')[2]||""}`;
                                break
                            }
                            case "patronymic":
                            {
                                workersArray[highIndex].collegues[lowIndex]=`${workersArray[highIndex].collegues[lowIndex].split(' ')[0]} ${workersArray[highIndex].collegues[lowIndex].split(' ')[1]} ${e.target.value}`;
                                break
                            }
                            default:
                            {
                                break
                            }
                        }
                        return
                    }
                    }) 
                }
            })
            this.setState(()=>{
            return {workers:workersArray}
                }
            );
        }
            this.setState(({workers,index})=>{
                let workersArray=workers.slice();
                workersArray[index][e.target.name]=e.target.value;
                return{
            workers:workersArray
                }
            })
            this.setState(()=>{
                return{
                    currentWorker:`${this.state.workers[this.state.index].secondName} ${this.state.workers[this.state.index].firstName} ${this.state.workers[this.state.index].patronymic}`
                }
            })
    }
    saveChanges(){
        let workersArray = this.state.workers.slice();
            workersArray.forEach((item,index)=>{    
                if (workersArray[this.state.index]!==item)
                {                              //Изменение коллег среди других коллег -> при добавлени или удалении из коллег у изменненых коллег должен появиться/удалиться данный сотрудникиз коллег
                    const collegue = `${item.secondName} ${item.firstName} ${item.patronymic}`;
                    const haveThatCollegue = workersArray[this.state.index].collegues.find((item)=>{
                    if (item!==collegue)
                    {
                        return false
                    }
                    else {
                        return item
                    } 
                })
                    const collegueHaveThatWorker = item.collegues.findIndex((item)=>{
                        if (item===this.state.currentWorker)
                        {
                        return item
                        }
                        else return false
                    })
                    if (haveThatCollegue!==undefined)
                    {
                        if (collegueHaveThatWorker===-1)
                        {
                            workersArray[index].collegues.push(this.state.currentWorker);
                        }
                    }
                    else{
                        if (collegueHaveThatWorker!==-1)
                        {
                            workersArray[index].collegues.splice(collegueHaveThatWorker,1);
                        }
                    }
                }
        })
        this.setState(()=>{
        return{
            workers:workersArray
        }
    })
        localStorage.setItem('workers',JSON.stringify(this.state.workers));
        this.props.stateChange(3);
    }

    dateChange(e){
        let fired = document.getElementById('date');
        fired.min=e.target.value;
        const employedDate = new Date(e.target.value);
        const firedDate = new Date(fired.value);
        if (firedDate>employedDate)
        {
            fired.value=e.target.value;
        }
    }
    checkBoxEdit(e){
        if (e.target.checked)
        {
            this.setState(({workers,index})=>
            {
                let workersArray =workers.slice();
                workersArray[index][e.target.name]="on";
                return {
                    workers:workersArray
                }
            })
        }
        else{
            this.setState(({workers,index})=>
            {
                let workersArray =workers.slice();
                workersArray[index][e.target.name]="off";
                return {
                    workers:workersArray
                }
            })
        }

    }
    handleMultipleSelect(e){
        this.setState(({workers,index})=>
        {
            let workersArray = workers.slice();
            workersArray[index][e.target.name]=[...e.target.options].filter(option=>option.selected).map(option=>option.value)
            return{
                workers:workersArray
            }
        });
    }
    resetSelect(){
        let select = document.getElementById('selectColleguesForm');
        select.value=null;
        this.setState(({workers,index})=>{
            let workersArray=workers.slice();
            workersArray[index]['collegues']=[];
            return{
                workers:workersArray
            }
    })
    }
    addAdditionalAtribute(){
        const name = document.getElementById('newAtributeName');
        const type = document.getElementById('newAtributeType');
        let check=0;
        this.state.workers[this.state.index].additionalAtributes.forEach((item)=>{
            if (item.name===name.value&&item.type===type.value)
            {
                check=1;
                return
            }
        })
        if (check===0)
        {
            const nameValue = name.value;      // Для сброса значения инпута
            const typeValue = type.value;      // Для сброса зачения селекта
            name.value="";
            type.options[0].selected=true;
            let workersArray = this.state.workers.slice();
            let tempArray = [...workersArray[this.state.index].additionalAtributes,{
                    name:nameValue,
                    type:typeValue,
                    key:`${nameValue}-${typeValue}`,
                    value:''}];
            workersArray[this.state.index].additionalAtributes=[...tempArray];
            this.setState(()=>{
                return{
                    workers:[...workersArray]
                }
            })
        }
    }
    editAdditionalAtribute(e,i){
        this.setState(({workers,index})=>{
            let workersArray = workers.slice();
            workersArray[index].additionalAtributes[i].value=e.target.value;
            return{
                workers:[...workersArray]
            }
        })
    }
    deleteAdditionalAtribute(i){
        let workersArray = this.state.workers.slice();
        workersArray[this.state.index].additionalAtributes.splice(i,1);
        this.setState(()=>{
            return{
                workers:[...workersArray]
            }
        })
    }

    render(){
    let collegues=(
        <div className="d-flex">
                    <label className="formLabel">Коллеги</label>
                    <div className="collegueFormWBtn">
                <select id="selectColleguesForm" name="collegues" multiple={true} onChange={this.handleMultipleSelect}>
                    {
                        // eslint-disable-next-line array-callback-return
                        this.state.workers.map((item)=>{
                            const temp = `${item.secondName} ${item.firstName} ${item.patronymic}`;
                            if (temp!==this.state.currentWorker)
                            {
                                const check = item.collegues.find((item)=>{
                                        if (item!==this.state.currentWorker)
                                        {
                                            return false
                                        }
                                        else{
                                            return item
                                        }
                                    });
                                
                                if (check===undefined)
                                {
                                    return(<option selected={false} type="text">{temp}</option>)
                                }
                                else{
                                    return(<option selected={true} type="text">{temp}</option>)
                                } 
                        }
                    }
                    )
                    }
                </select>
                <button type="button" onClick={()=>this.resetSelect()}>Сбросить выбранное</button>
                </div>
                </div>
    );
        return(
            <div className="formDiv">
                <form className="Addform" onSubmit={()=>this.saveChanges()}>
                    <div className="d-flex">
                        <label className="formLabel">Фамилия:</label>
                        <input type='text' name="secondName" defaultValue={this.state.workers[this.state.index].secondName} onChange={this.handleEdit} required></input>
                    </div>
                    <div className="d-flex">
                        <label className="formLabel">Имя:</label>
                        <input type='text' name="firstName" defaultValue={this.state.workers[this.state.index].firstName} onChange={this.handleEdit} required></input>
                    </div>
                    <div className="d-flex">
                        <label className="formLabel">Отчество:</label>
                        <input type='text' name="patronymic" defaultValue={this.state.workers[this.state.index].patronymic} onChange={this.handleEdit} required></input>
                    </div>
                    <div className="d-flex">
                        <label className="formLabel">Должность:</label>
                        <select  name="position"  defaultValue={this.state.workers[this.state.index].position} onChange={this.handleEdit} required>
                        {
                        this.state.position.map((item)=>{
                            return(<option>{item}</option>)
                        })
                        }
                        </select>
                    </div>
                    <div className="d-flex">
                        <label className="formLabel">Дата рождения:</label>
                        <input type='date' name="birthDate" defaultValue={this.state.workers[this.state.index].birthDate} onChange={this.handleEdit} required></input>
                    </div>
                    <div className="d-flex">
                        <label className="formLabel">Пол:</label>
                        <label>М</label><input name="gender" type="radio" defaultValue="М" defaultChecked={(this.state.workers[this.state.index].gender==="М")} onChange={this.handleEdit}/>
                        <label>Ж</label><input name="gender" type="radio" defaultValue="Ж" defaultChecked={(this.state.workers[this.state.index].gender==="Ж")} onChange={this.handleEdit}/>
                    </div>
                    <div className="d-flex">
                        <label className="formLabel">Дата приёма на работу:</label>
                        <input name="employedDate" type='date' defaultValue={this.state.workers[this.state.index].employedDate} onChange={(e)=>{
                        this.dateChange(e);
                        this.handleEdit(e);
                        }
                        } required></input>
                    </div>
                    <div className="d-flex">
                        <label className="formLabel">Дата увольнение:</label>
                        <input id="date" name="firedDate" type='date' min={this.state.workers[this.state.index].employedDate} defaultValue={this.state.workers[this.state.index].firedDate} onChange={this.handleEdit} required></input>
                    </div>
                    <div className="d-flex">
                        <label className="formLabel">Наличие прав:</label>
                        <input name="driverLicense" type="checkbox" defaultChecked={(this.state.workers[this.state.index].driverLicense==="on")} onChange={this.checkBoxEdit}></input>
                    </div>
                    {collegues}
                    <h3 className="centered">Дополнительные атрибуты</h3>
                    {this.state.workers[this.state.index].additionalAtributes.map((item,i)=>{
                        return(
                            <div className="d-flex" key={item.key}>
                                <label className="formLabel">{item.name}</label>
                                <input type={item.type} name={item.name} defaultValue={item.value} onChange={(e)=>this.editAdditionalAtribute(e,i)}/>
                                <button type="button" onClick={()=>this.deleteAdditionalAtribute(i)}>Удалить</button>
                            </div>)}
                        )}
                    <div className="d-flex">
                        <input className="newAtributesElement" type="text" id="newAtributeName" placeholder="Название атрибута"></input>
                        <select className="selectNewAtributes" id="newAtributeType">
                            <option value="text">строка</option>
                            <option value="number">число</option>
                            <option value="date">дата</option>
                        </select>
                        <button type="button" onClick={()=>{this.addAdditionalAtribute()}}>Добавить атрибут</button>
                    </div>
                    <button className="formBtn" type="submit">Сохранить изменения</button>
                </form>
            </div>
    )
    }
}
