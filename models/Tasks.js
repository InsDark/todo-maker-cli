import Task  from "./Task.js";
import color from "colors";
export default class Tasks {
    
    list = {};

    get listTasks() {
        const listArr = [];
        Object.keys(this.list).forEach(key => {
            const task = this.list[key];
            listArr.push(task);
        })
        return listArr
    }

    constructor () {
        this.list = {};
    }
    makeTask(desc = '') {
        const task = new Task(desc)
        this.list[task.id] = task;
    }
    render(tasks) {
        let i = 0;
        tasks.forEach((task => {
            i++
            const status =  task.completeOn ? `${'complete'.grenn}` : `${'missing'.red}`;
            console.log( `${i.toString().green}. ` + `${task.desc} | ${status}`);
        }))
    }

    completed(tasks) {
        const tasksCompleted = tasks.filter((task => task.completeOn !== null))
        
        if(tasksCompleted == []) {
            return console.log('You dont have task completed'.red)
        }
        let i = 0;
        tasksCompleted.forEach((task => {
            i++
            console.log( `${i.toString().green}.  ${task.desc} | ${'completed '.green}`);
        }))
    } 

    pendients(tasks) {
        const pendientedTasks = tasks.filter((task => task.completeOn == null))
        console.log(pendientedTasks)
        if(pendientedTasks == []) {
            return console.log('You dont have task pendient'.green)
        }
        let i = 0;
        pendientedTasks.forEach((task => {
            i++
            const status =  pendientedTasks.completeOn ? `${'pendient'.red}` : `${'missing'.red}`;
            console.log( `${i.toString().green}. ` + `${task.desc} | ${status}`);
        }))
    }
    
}