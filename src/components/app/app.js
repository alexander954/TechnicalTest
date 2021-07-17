import React from 'react';
import AddWorkerForm from '../add-worker-form/add-worker-from.js';
import WorkerList from '../worker-list/worker-list.js';
import ShowWorkerForm from '../show-worker-form/show-worker-form.js';
import EditWorkerForm from '../edit-worker-form/edit-worker-form.js';

import './app.css';

export default class App extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state={
                state:0,  //0-просомтр всех записей, 1-добавление, 2-просмотр одной, 3-редактирование
                id:0
            }
        this.stateChange = this.stateChange.bind(this);;
        this.onDelete = this.onDelete.bind(this);
        this.onEdit=this.onEdit.bind(this);
        this.showOne=this.showOne.bind(this);
    }
    
    stateChange(newState){
        this.setState(({state})=>{
            if (newState===state)
            {
                return {
                    state:0
                }
            }
            else {
            return {
                state:newState
            }
        }
        })
    }
    onDelete(id){
        let workers = JSON.parse(localStorage.getItem('workers'));
        const index = workers.findIndex((item)=>{
            return id===item.id 
        });
        workers.forEach((item,highIndex) => {                                 //Удаление из коллег других работников
            if (highIndex!==index)
            {
                if (item.hasOwnProperty('collegues'))
                {
                    item.collegues.forEach((item,lowIndex)=>{
                        if (item===`${workers[index].secondName} ${workers[index].firstName} ${workers[index].patronymic}`)
                        {
                            workers[highIndex].collegues.splice(lowIndex,1);
                        }
                    })
                }
            }
        });
        workers.splice(index,1);
        localStorage.setItem('workers',JSON.stringify([...workers]));
        this.stateChange(0);
    }

    onEdit(id){
        let workers = JSON.parse(localStorage.getItem('workers'));
        const index = workers.findIndex((item)=>{
            return id===item.id 
        });
        this.setState(()=>{
            return{
                id:workers[index].id
            }
        }
        );
        this.stateChange(3);
    }

    showOne(id){
        let workers = JSON.parse(localStorage.getItem('workers'));
        const index = workers.findIndex((item)=>{
            return id===item.id 
        });
        this.setState(()=>{
            return{
                id:workers[index].id
            }
        }
        );
        this.stateChange(2);
    }

    render(){
        let code;
        if (this.state.state===0)
        {
            code=(
                <div className="maindiv">
                     <h2 className="centered">Реестр сотрудников</h2>
                    <WorkerList
                    onDelete={this.onDelete}
                    onEdit={this.onEdit}
                    showOne={this.showOne}
                    />
                    <div className="centered"><button onClick={()=>this.stateChange(1)}>Добавить сотрудника</button></div>
                </div>
                );
        }
        else if (this.state.state===1)
        {
           code =(
                <div className="maindiv">
                    <h2 className="centered">Реестр сотрудников</h2>
                    <AddWorkerForm
                    stateChange={this.stateChange}/>
                </div>
            );
        }
        else if (this.state.state===2)
        {
            code =(
                <div className="maindiv">
                    <h2 className="centered">Реестр сотрудников</h2>
                    <ShowWorkerForm
                    id={this.state.id}
                    stateChange={this.stateChange}/>
                </div>
            );
        }
        else if (this.state.state===3)
        {
            code =(
                <div className="maindiv">
                    <h2 className="centered">Реестр сотрудников</h2>
                    <EditWorkerForm
                    id={this.state.id}
                    stateChange={this.stateChange}/>
                </div>
            );
        }
        return code
    }
}