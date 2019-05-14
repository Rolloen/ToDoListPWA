// async function getTasks(newTask) {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     var myInit = {
//         method: 'GET',
//         headers: myHeaders,
//         cache: 'default'
//     };
//     try {
//         fetch("http://localhost:3000/tasks", myInit).then((data) => {
//             return data.text()

//         }).then((text) => {
//             console.log(JSON.parse(text));

//         });
//     } catch (error) {
//         console.error(error);
//     }
// }
async function saveTask(newTask) {
    try {
        return fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(newTask)
        }).then((data) => {
            return data.text()
        }).then((text) => {
            const event = new CustomEvent('dataChanged', {
                detail: JSON.parse(text)
            });
            document.dispatchEvent(event);
            return 'done';
        }).catch((error) => {
            console.error(error);
            return error;
        });

    } catch (error) {
        console.error(error);
    }
}

async function finishTask(task) {

    try {
        fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(task)
        }).then((data) => {
            const event = new CustomEvent('taskFinished', {
                detail: task.id
            });
            document.dispatchEvent(event);

        }).then((text) => {
            // const event = new CustomEvent('taskFinished', {
            //     detail: JSON.parse(text)
            // });
            // document.dispatchEvent(event);

        });
    } catch (error) {
        console.error(error);
    }
}


export {
    saveTask,
    finishTask
}