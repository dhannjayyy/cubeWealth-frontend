import React, { useEffect } from "react";
import TaskCard from "../Components/TaskCard";
import Modal from "../Components/Modal";
import useFetchTasks from "../helper/useFetchTasks";
import { useDispatch, useSelector } from "react-redux";
import { addTasks, getTasks } from "../helper/tasksSlice";
import { getUser } from "../helper/userSlice";

const Tasks = () => {
  const tasksData = useSelector(getTasks);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const setTasks = async () => {
      const [status, response] = await useFetchTasks(user?.accessToken);
      if (status == 200) {
        dispatch(addTasks({ tasks: response.tasks }));
      }
    };

    setTasks();
  }, []);
  return (
    <div className="rounded-lg max-w-[1440px] w-90% mx-auto lg:mt-10 pb-10">
      <div className="flex justify-between items-center px-4">
        <h2 className="font-bold text-3xl text-center my-10">Tasks</h2>
        <button className="theme-background-green py-2 px-4 text-black font-bold rounded-lg uppercase  block">
          Add a task
        </button>
        {/* <Modal /> */}
      </div>
      <div className="flex gap-4 max-w-[1440px] w-[90%] flex-wrap mx-auto">
        {tasksData?.tasks?.length ? (
          tasksData?.tasks?.map((task, index) => {
            return (
              <TaskCard
                key={index}
                title={task.title}
                description={task.description}
              />
            );
          })
        ) : (
          <div className="h-[50vh] mx-auto">
            <span className="relative mx-auto block text-gray-400 font-bold text-2xl top-1/2">
              No tasks right now...Add some
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
