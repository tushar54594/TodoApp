import React, { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function Input(props) {
  const inputBox = useRef();
  return (
    <div className="p-3 flex justify-around">
      <input
        type="text"
        placeholder="Enter your task"
        className="p-3 focus:outline-none w-[90%] border border-slate-400"
        ref={inputBox}
      />
      <div
        className="w-[50px] h-[50px] bg-[#3b233b] text-white text-3xl rounded-[50%] flex justify-center items-center cursor-pointer"
        onClick={() => {
          props.handler(inputBox.current.value);
          inputBox.current.value = "";
        }}
      >
        <AiOutlinePlus />
      </div>
    </div>
  );
}

export default Input;
