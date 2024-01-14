import React, { useRef, useState } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../helper/userSlice";
import useDeleteTask from "../helper/useDeleteTask";
import { deleteTask } from "../helper/tasksSlice";

const TaskCard = ({ title, description, task_id }) => {
  const dispatch = useDispatch();
  const deleteMessageRef = useRef();
  const user = useSelector(getUser);

  const [modal, setModal] = useState(false);

  const deleteTaskHandler = async () => {
    try {
      const [status, message] = await useDeleteTask(
        { taskId: task_id },
        user?.accessToken
      );
      if (status == 200) {
        dispatch(deleteTask({ task_id: task_id }));
      } else {
        deleteMessageRef.current.innerText = message;
        deleteMessageRef.current.style.color = "red";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-1/4 border rounded-lg p-6 flex-1 basis-72">
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="mt-4">{description}</p>
      <div className="flex justify-start py-4 gap-3">
        <button
          type="submit"
          className="theme-background-green py-2 px-4 text-black font-bold rounded-lg uppercase  block"
        >
          Edit
        </button>
        <button
          onClick={() => setModal(true)}
          type="submit"
          className="theme-background-green py-2 px-4 text-black font-bold rounded-lg uppercase  block"
        >
          Delete
        </button>
      </div>
      {modal && (
        <Modal>
          <Modal.Title
            title={"Delete task"}
            onClose={() => setModal(false)}
          ></Modal.Title>
          <div className="p-6">
            <h2 className="text-center text-lg mb-4">
              Are you sure, you want to delet this task?
            </h2>
            <div>
              <span className="font-bold text-left">{title}</span>
              <br />
              <span className="text-left font-bold">{description}</span>
              <div className="mt-7 flex gap-3">
                <button
                  className="border py-1 px-4 rounded-lg"
                  onClick={() => deleteTaskHandler()}
                >
                  {" "}
                  Yes
                </button>
                <button
                  className="border py-1 px-4 rounded-lg"
                  onClick={() => setModal(false)}
                >
                  {" "}
                  No
                </button>
              </div>
            </div>
          </div>
          <div ref={deleteMessageRef}></div>
        </Modal>
      )}
    </div>
  );
};

export default TaskCard;
