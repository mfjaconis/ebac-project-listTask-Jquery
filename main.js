listTasks = []

$(document).ready(() => {

    $('form').on('submit', (e) => {
        e.preventDefault()
        
        
        dataListTask()
    })
    returnTask()
    completeTask()  
    
})


function dataListTask() {
    const inputTask = $('#inputTask').val()
    const addTask = $('ol')

    const taskExists = listTasks.some(item => {
        const taskText = item.find('p').text().trim().toLowerCase()
        return taskText === inputTask.toLowerCase()
    })
  
        
        if(taskExists){
            alert('Tarefa já cadastrada')
        }   
        else{
            const listItem = $(`
                <li>
                    <p>${inputTask}</p>
                    <a id="complete-task">
                        <img src="./image/verificado.png" alt="">
                    </a>
                    <a id="return-task" class="disableButton">
                        <img src="./image/turn-back.png" alt="">
                    </a>
                </li>
                `).appendTo(addTask)
        
                listTasks.push(listItem)
        }
        
    $('#inputTask').val('')
    
}


function completeTask(){

        $('ol').on('click', '#complete-task', function(e) {
            e.preventDefault()
            
            const listItem = $(this).closest('li')
            listItem.addClass('task-completed')
            listItem.find('#complete-task').addClass('disableButton')
            listItem.find('#return-task').removeClass('disableButton')
        })
}

function returnTask(){
    
            $('ol').on('click', '#return-task', function(e) {
                e.preventDefault()

                const listItem = $(this).closest('li')
                listItem.removeClass('task-completed')
                listItem.find('#return-task').addClass('disableButton')
                listItem.find('#complete-task').removeClass('disableButton')
            })
}

