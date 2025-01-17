import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Command } from '../store/CliSlice';

const CLI = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.cli); 

    console.log(selector);
    
    
    const handleCommand = () => {
        if (input.trim() !== "") {
            dispatch(Command({ input }));
            setInput("");
        }
    };

    return (
        <div className="bg-black h-full flex flex-col justify-between">
            <div className="text-sm">
                <p className="text-green-700">Portfolio- <span className="text-yellow-500">CP03</span></p>
            </div>
            <div className="text-white overflow-y-scroll h-96">
                {selector.history.map((line, index) => (
                    <pre key={index} className="text-wrap text-gray-300 my-2">
                        {line}
                    </pre>
                ))}
                <div className="flex flex-col  bg-black">
                    <span className='flex'>$ <p className="text-green-700"> {selector.currentDir} / </p> </span> 
                    <textarea
                        type="text"
                        className="bg-black outline-none text-gray-300 w-full cursor-text h-96"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleCommand()}
                    />
                </div>
            </div>
        </div>
    );
};

export default CLI