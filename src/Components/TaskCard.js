import React from "react";

const TaskCard = ({ title, description }) => {
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
          type="submit"
          className="theme-background-green py-2 px-4 text-black font-bold rounded-lg uppercase  block"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
