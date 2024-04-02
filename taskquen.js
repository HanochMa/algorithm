class TaskQuen {
    constructor(limit) {
        this.taskList = []
        this.limit = limit
        this.running = 0
    }
    addTask(task) {
        this.taskList.push(task)
        this.runTask()
    }
    runTask() {
        while (this.running < this.limit && this.taskList.length) {
            const task = this.taskList.shift()
            task().then(() => {
                this.running--
                this.runTask()
            })
            this.running++
        }
    }
}

function sendRequest(url) {
    return new Promise(resolve => {
        console.log(`Sending request to ${url}`);
        setTimeout(() => {
            console.log(`Request to ${url} completed`);
            resolve();
        }, Math.random() * 1000);
    });
}

const mytaskquen = new TaskQuen(10)

for(let i = 0; i<20; i++){
    mytaskquen.addTask(() => sendRequest('web'+ i))
}

