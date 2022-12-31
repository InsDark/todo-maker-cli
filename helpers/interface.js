import inquirer from 'inquirer';
import color from'colors';
const questions = [
    {
        type: 'list', 
        name: "option",
        message: "What do you want to do?",
        choices: [{
            value: '1', 
            name: '1. Make task'
        },
        {
            value: '2', 
            name: '2. List tasks'
        }, 
        {
            value: '3', 
            name: '3. List completed tasks'
        }, 
        {
            value: '4', 
            name: '4. List pendiented tasks'
        },
        {
            value: '5', 
            name: '5. Complete task'
        },
        {
            value: '6', 
            name: '6. Delete task'
        }, 
        {
            value: '0', 
            name: '0. End'
        }]
    }
]
export const inquirerMenu = async() => { 
        console.log('================================'.green)
        console.log('        Select an option'.green)
        console.log('================================ \n'.green )

    const {option} = await inquirer.prompt(questions)
    return option;
}

export const pauseInterface = async () => {
    const question = {
        type: 'input',
        name: 'enter',
        message: `Press ${'ENTER'.green} to continue`
    }

    console.log('\n')
    await inquirer.prompt(question)
}

export const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0) {
                    return "Please enter a value"
                } 
                return true;
            }
        }
    ]

    const {desc} = await inquirer.prompt(question);
    return desc
}

export const getTaskToComplete = async (taskList, desc, status) => {
    
    const missingTasks= taskList.filter(task => task.completeOn == status)

    const choices = []
    let i = 0
    missingTasks.forEach(task => {
        i++;
        choices.push({value: task.id, name: `${i.toString().green}. ${task.desc}` })
    })

    const question = [
        {
            type: 'list',
            name: 'taskId',
            message: desc, 
            choices
        }
    ]
    const {taskId} = await inquirer.prompt(question)
    return taskId;
} 
export const getTaskToDelete =  async (tasksList, msg) => {

    const choices = []
    let i = 0
    tasksList.forEach(task => {
        i++;
        choices.push({value: task.id, name: `${i.toString().green}. ${task.desc}` })
    })

    const question = [
        {
            type: 'list',
            name: 'taskId',
            message: msg, 
            choices
        }
    ]
    const {taskId} = await inquirer.prompt(question)
    return taskId;
}

export const getAuth = async (desc) => {
    const question = [ {
        type: 'confirm',
        name: 'confirmer',
        message: desc
    }]
    const {confirmer} = await inquirer.prompt(question)
    return confirmer
}