import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState("Task, Task 2");
	const [newTask, setNewTask] = useState("");

	function NewTaskChange(event) {
		setNewTask(event.target.value);
	}
	function AddNewOne(event) {
		if (event.key.toLowerCase() === "enter");
		setTasks([...tasks, newTask]);
		setNewTask(" ");
	}
	function deleteTask(indexToRemove) {
		setTasks(tasks.filter((task, index) => index !== indexToRemove));
	}

	return (
		<div className="text-center mt-5">
			<input
				type="text"
				placeholder="New Task"
				onChange={NewTaskChange}
				onKeyPress={AddNewOne}
				value={newTask}
			/>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>{task}
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
