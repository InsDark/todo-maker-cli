import {  getAuth, getTaskToComplete, getTaskToDelete, inquirerMenu, pauseInterface, readInput } from './helpers/interface.js';
import { readDB, saveFile } from './helpers/saveFile.js';

import Tasks from './models/Tasks.js';

const main = async () => {

    let opt = ''
    const tasks = new Tasks();
    do  {
        tasks.list = readDB()
        console.clear()
        opt = await inquirerMenu();
        switch(opt) {
            case '1' : 
                const desc = await readInput('Description: ');
                tasks.makeTask(desc)
                saveFile(tasks.listTasks)
            break;

            case '2' : 
                tasks.render(tasks.list)
            break;
            case '3': 
                tasks.completed(tasks.list)
            break;
            case '4': 
            tasks.pendients(tasks.list)
            break;
            case '5': 
                const taskIdCompleted = await getTaskToComplete(tasks.list, 'Select task to complete', null)
                tasks.list.forEach(task => {
                    if(task.id == taskIdCompleted) {
                        task.completeOn = true
                    }
                })
                
                saveFile(tasks.listTasks)

            break
            case '6': 
            
            const taskIdDelete = await getTaskToDelete(tasks.list, 'Select task to delete: ')
                const tasksNotDeleted = tasks.listTasks.filter(task => task.id !== taskIdDelete);
                const auth = await getAuth();
                if(!auth) break;

                tasks.list = tasksNotDeleted
                saveFile(tasks.list)
            break;
        }

        await pauseInterface()
    } while (opt !== '0')
} 
const confirmer = async () => {
    const question = [

    ]
}
main()