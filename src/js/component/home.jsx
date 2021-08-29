import React, { useEffect, useState } from "react";
import TaskList from "./TaskList.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState(["task", "task 2"]);
	const [newTask, setNewTask] = useState("");
	const [taskExists, setTaskExists] = useState(false);

	function newTaskChange(event) {
		setNewTask(event.target.value);
	}
	function addNewOne(event) {
		if (event.key === "Enter") {
			let position = tasks.findIndex(task => task === newTask);
			if (position === -1) {
				setTasks([...tasks, newTask]);
				setNewTask("");
			} else {
				setTaskExists(true);
			}
		}
	}

	useEffect(() => {
		let position = tasks.findIndex(task => task === newTask);
		if (position === -1) {
			setTaskExists(false);
		} else {
			setTaskExists(true);
		}
	}, [newTask]);

	function deleteTask(indexToRemove) {
		setTasks(tasks.filter((task, index) => index !== indexToRemove));
	}

	return (
		<div className="text-center container">
			<h1>TO DO LIST</h1>
			<input
				className={taskExists ? "warning" : " "}
				type="text"
				placeholder="New Task"
				onChange={newTaskChange}
				onKeyDown={addNewOne}
				value={newTask}
			/>
			<ul className="tasks">
				{tasks.map((task, index) => (
					<TaskList
						key={index}
						task={task}
						newTask={newTask}
						index={index}
						deleteTask={deleteTask}
					/>
				))}
			</ul>
		</div>
	);
};

export default Home;
