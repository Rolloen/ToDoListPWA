

async function getTasks(newTask) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        cache: 'default'
    };
    try {
        fetch("http://localhost:3000/tasks", myInit).then((data) => {
            return data.text()

        }).then((text) => {
            console.log(JSON.parse(text));

        });
    } catch (error) {
        console.error(error);
    }
}

async function saveTask(newTask) {
    try {
        fetch("http://localhost:3000/tasks", {
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
        }).catch((error) => {
            console.error(error);

        });

    } catch (error) {
        console.error(error);
    }
}

export {
    saveTask
}