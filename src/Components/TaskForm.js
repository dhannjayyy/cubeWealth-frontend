import React, { useRef, useState } from "react";
import useTaskCreation from "../helper/useTaskCreation";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../helper/userSlice";
import { addTasks, getTasks } from "../helper/tasksSlice";
import useFetchTasks from "../helper/useFetchTasks";

const TaskForm = () => {
  const user = useSelector(getUser);
  const currenTasks = useSelector(getTasks);
  const dispatch = useDispatch();
  const formResult = useRef();
  const [formState, setFormState] = useState({
    title: "",
    description: "",
  });

  const handleFormSubmitRequest = async (e) => {
    e.preventDefault();
    try {
      const [resultStatus, message] = await useTaskCreation(
        formState,
        user?.accessToken
      );
      console.log(resultStatus == 200, message);
      if (resultStatus == 200) {
        const [status, response] = await useFetchTasks(user?.accessToken);
        if (status == 200) {
          dispatch(addTasks({ tasks: response.tasks }));
        }

        setFormState({
          title: "",
          description: "",
        });
        formResult.current.innerText =
          "New task added. You can close the modal or add another task";
        formResult.current.style.color = "green";
      } else {
        formResult.current.innerText = message;
        formResult.current.style.color = "red";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormStateChange = (name, value) => {
    setFormState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={(e) => handleFormSubmitRequest(e)}>
      <div className="flex flex-col">
        <input
          type="text"
          required
          placeholder="Enter title"
          className="text-xl px-2 py-1 bg-slate-700 outline-none"
          id="title-input"
          value={formState.title}
          name="title"
          onChange={(e) => handleFormStateChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-2">
        <input
          type="text"
          required
          placeholder="Enter description"
          className="text-xl px-2 py-1 bg-slate-700 outline-none"
          id="description-input"
          value={formState.description}
          name="description"
          onChange={(e) => handleFormStateChange(e.target.name, e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="theme-background-green py-2 px-4 text-black font-bold rounded-lg uppercase mx-auto block mt-6"
      >
        Submit
      </button>
      <p ref={formResult} className="text-center font-bold mt-5"></p>
    </form>
  );
};

export default TaskForm;
