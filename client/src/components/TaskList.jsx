import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import axios from 'axios'

const TaskList = () => {

    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])

    // const handleOnChange = e => {
    //     setTask(e.target.value)
    // }

    const getTaskList = () => {
        axios.get('http://localhost:4000/tasks')
            .then(response => response.data)
            .then(list => setTaskList(list))

    }

    useEffect(() => {
        getTaskList()
    }, [])


    const onDeleteClick = taskid => {
        axios.delete(`http://localhost:4000/deleteTask/${taskid}`)
        getTaskList()
    }

    const onSubmitClick = () => {
        axios.post('http://localhost:4000/addTask', {
            task: task
        })
        getTaskList()
        setTask('')
    }


    return (
        <>
            <Container>


                <h1>TaskList</h1>
                <div className='input ui'>
                    <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="your task..." />
                </div>
                <button className='ui primary button' onClick={() => onSubmitClick()}>Submit</button>
                <hr />

                <div className="ui cards">
                    {taskList && taskList.map((tasks) => {
                        return <div className="card" key={tasks.taskid}>
                            <div className="content">
                                <div className="meta">
                                    {tasks.taskcol}
                                </div>
                                <div className="extra content">
                                    <div className="ui two buttons">
                                        <div className="ui basic green button" >Done</div>
                                        <div className="ui basic red button" onClick={() => onDeleteClick(tasks.taskid)}>Delete</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    })}
                </div>
            </Container>
        </>
    )
}

export default TaskList
