    import React from 'react';

    import './add-worker-form.css';

    export default class AddWorkerForm extends React.Component{

        constructor(props)
        {
            super(props)
            this.state={
                position:['Frontend Разработчик', 'Backend разработчик', 'Аналитик', 'HR'],
                workerParams:{
                    collegues:[],
                    gender:"М",
                    position:"Frontend Разработчик",
                    driverLicense:"off",
                    additionalAtributes:[]
                },
                additionalAtributes:[]
            }
            this.handleChange=this.handleChange.bind(this);
            this.checkBoxEdit=this.checkBoxEdit.bind(this);
            this.addWorker=this.addWorker.bind(this);
            this.handleMultipleSelect=this.handleMultipleSelect.bind(this);
            this.addAdditionalAtribute=this.addAdditionalAtribute.bind(this);
            this.deleteAdditionalAtribute=this.deleteAdditionalAtribute.bind(this);
            this.editAdditionalAtribute=this.editAdditionalAtribute.bind(this);
        }

        addAdditionalAtribute(){
            const name = document.getElementById('newAtributeName');
            const type = document.getElementById('newAtributeType');
            let check=0;
            this.state.additionalAtributes.forEach((item)=>{
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
                this.setState(({additionalAtributes})=>{
                    const tempArray=[...additionalAtributes,
                        {
                        name:nameValue,
                        type:typeValue,
                        key:`${nameValue}-${typeValue}`,
                        value:''}];
                    return{
                        additionalAtributes:[...tempArray]
                    }
                })
            }
        }

        editAdditionalAtribute(e,index){
            this.setState(({workerParams,additionalAtributes})=>{
                let tempArray=[...additionalAtributes];
                tempArray[index].value=e.target.value;
                workerParams.additionalAtributes=tempArray;
                return{
                    additionalAtributes:[...tempArray],
                }
            })
        }

        deleteAdditionalAtribute(index){
            this.setState(({additionalAtributes,workerParams})=>{
                let tempArray=additionalAtributes.slice();
                tempArray.splice(index,1);
                workerParams.additionalAtributes=tempArray;
                return{
                    additionalAtributes:[...tempArray]
                }
            })
        }

        handleMultipleSelect(e){
            this.setState(({workerParams})=>{
                workerParams[e.target.name]=[...e.target.options].filter(option=>option.selected).map(option=>option.value);
            })
        }

        dateChange(e){
            let fired = document.getElementsByName('firedDate');
            fired[0].disabled=false;
            fired[0].min=e.target.value;
            const firedDate = new Date(fired[0].value);
            const employedDate = new Date(e.target.value);
            if (firedDate<employedDate)
            {
                fired[0].value=e.target.value;
            }
        }

        handleChange(e){
            this.setState(({workerParams})=>{
                workerParams[e.target.name]=e.target.value;
            })
        }

        checkBoxEdit(e){
            if (e.target.checked)
            {
                this.setState(({workerParams})=>{
                    workerParams[e.target.name]="on";
                })
            }
            else{
                this.setState(({workerParams})=>{
                    workerParams[e.target.name]="off";
                })
            }
        }

        addWorker(e){
            e.preventDefault();
            let workers = localStorage.getItem('workers');
            if (workers==null||workers==="[]")
            {
                let temp = this.state.workerParams;
                temp['id']=1;
                workers=JSON.stringify([temp]);
            }
            else {
                let temp = this.state.workerParams;
                let allworkers = JSON.parse(workers);
                allworkers.forEach((element,index) => {
                const temp = `${element.secondName} ${element.firstName} ${element.patronymic}`;
                const check= this.state.workerParams.collegues.find((item)=>{
                    if (item!==temp)
                    {
                        return false
                    }
                    else 
                    {
                        return element
                    }
                    })
                    if (check!==undefined)
                    {
                        allworkers[index].collegues.push(`${this.state.workerParams.secondName} ${this.state.workerParams.firstName} ${this.state.workerParams.patronymic}`);
                    }
                    });
                temp['id']=1+allworkers[allworkers.length-1].id;
                workers= JSON.stringify([...allworkers,temp]);
            }
            localStorage.setItem('workers',workers);
            this.props.stateChange(1);
        }

        render(){
            const workers = JSON.parse(localStorage.getItem('workers'));
            let collegue;
            if (workers!=null&&workers.length!==0)
            {
                collegue=(  
                    <div className="d-flex">
                        <label className="formLabel">Коллеги</label>
                    <select name="collegues" multiple onChange={this.handleMultipleSelect}>
                        {
                            workers.map((item)=>{
                                const temp = `${item.secondName} ${item.firstName} ${item.patronymic}`;
                                return(<option value={temp}>{item.secondName} {item.firstName} {item.patronymic}</option>)
                            })
                        }
                    </select>
                    </div>
                );
            }
            return(
                <div className="formDiv">
                <form onSubmit={this.addWorker} className="Addform">
                    <div className="d-flex">
                        <label className="formLabel">Фамилия:</label>
                        <input  name="secondName" type='text' onChange={this.handleChange} required></input>
                    </div>
                    <div className="d-flex">
                    <label className="formLabel">Имя:</label>
                        <input  name="firstName" type='text' onChange={this.handleChange} required></input>
                    </div>
                    <div className="d-flex">
                    <label className="formLabel">Отчество:</label>
                        <input  name="patronymic" type='text' onChange={this.handleChange}></input>
                    </div>
                    <div className="d-flex">
                    <label className="formLabel">Должность:</label>
                        <select  name="position" onChange={this.handleChange} required>
                            {
                            this.state.position.map((item)=>{
                                return(<option>{item}</option>)
                            })
                            }
                        </select>
                    </div>
                    <div className="d-flex">
                    <label className="formLabel">Дата рождения:</label>
                        <input  name="birthDate" type='date' onChange={this.handleChange} required></input>
                    </div>
                    <div className="d-flex">
                    <label className="formLabel">Пол:</label>
                        <label>М</label><input type="radio" name="gender" value="М"  onChange={this.handleChange} defaultChecked/>
                        <label>Ж</label><input type="radio" name="gender" value="Ж"  onChange={this.handleChange}/>
                    </div>
                    <div className="d-flex">
                    <label className="formLabel">Дата приёма на работу:</label>
                        <input  name="employedDate" onChange={(e)=>{
                            this.dateChange(e);
                            this.handleChange(e);
                            }} type='date' required></input>
                    </div>
                    <div className="d-flex">
                    <label className="formLabel">Дата увольнение:</label>
                        <input  name="firedDate" onChange={this.handleChange} type='date' required disabled></input>
                    </div>
                    <div className="d-flex">
                    <label className="formLabel">Наличие прав:</label>
                        <input  type="checkbox" onChange={this.handleChange} name="driverLicense"></input>
                    </div>
                    {collegue}
                    <h3 className="centered">Дополнительные атрибуты</h3>
                    {this.state.additionalAtributes.map((item,i)=>{
                        return(
                            <div className="d-flex" key={item.key}>
                                <label className="formLabel">{item.name}</label>
                                <input type={item.type} name={item.name} onChange={(e)=>this.editAdditionalAtribute(e,i)}/>
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
                    <button className="formBtn" type="submit">Добавить сотрудника</button>
                </form>
                </div>
            )
        }
    }