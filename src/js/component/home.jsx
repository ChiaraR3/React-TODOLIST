import React, { useEffect, useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState(["Task", "Task 2"]);
	const [newTask, setNewTask] = useState("");
	const [taskExists, setTaskExists] = useState(false);

	function newTaskChange(event) {
		setNewTask(event.target.value);
	}
	function addNewOne(event) {
		if (event.key === "Enter") {
			setTasks([...tasks, newTask]);
			setNewTask("");
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

	function validateInput(event) {
		let positiondos = tasks.findIndex(task => newTask === " ");
		if (positiondos === "") {
			alert("The to do cannot be empty");
		}
	}

	function deleteTask(indexToRemove) {
		setTasks(tasks.filter((task, index) => index !== indexToRemove));
	}

	return (
		<div className="text-center container">
			TO DO LIST
			<input
				type="text"
				placeholder="New Task"
				onChange={newTaskChange}
				onKeyDown={addNewOne}
				value={newTask}
			/>
			<ul className="tasks">
				{tasks.map((task, index) => (
					<li className="list" key={index}>
						<span>{task}</span>
						<button
							className="delete"
							onClick={() => {
								deleteTask(index);
							}}>
							x
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
