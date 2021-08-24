import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState(["Task", "Task 2"]);
	const [newTask, setNewTask] = useState("");

	function newTaskChange(event) {
		setNewTask(event.target.value);
		console.log(event);
		console.log(newTask);
		console.log(setNewTask);
	}
	function addNewOne(event) {
		if (event.key === "Enter") {
			setTasks([...tasks, newTask]);
			setNewTask("");
		}
	}
	function deleteTask(indexToRemove) {
		setTasks(tasks.filter((task, index) => index !== indexToRemove));
	}

	return (
		<div className="text-center mt-5">
			<input
				type="text"
				placeholder="New Task"
				onChange={newTaskChange}
				onKeyDown={addNewOne}
				value={newTask}
			/>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>
						<span>{task}</span>
						<button
							onClick={() => {
								deleteTask(index);
							}}>
							X
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
