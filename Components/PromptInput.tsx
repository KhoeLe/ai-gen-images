"use client";

import { useState } from "react";

function PromptInput() {
    const [input, setInput] = useState("");

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        setInput("");
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setInput(event.target.value);
    };

    return (
        <div className="m-10">
            <form
                className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x "
                onSubmit={handleSubmit}>
                <textarea
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enter a prompt....."
                    className="flex-1 p-4 outline-none rounded-md"
                />
                <button
                    disabled={!input}
                    type="submit"
                    className={`p-4 font-bold ${
                        input
                            ? "bg-violet-500 text-white transition-color duration-200"
                            : "text-gray-300 cursor-not-allowed"
                    }`}>
                    Generate
                </button>
                <button
                    type="button"
                    className="p-4 bg-violet-400 text-white translate-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400">
                    Use Suggestion
                </button>
                <button
                    type="button"
                    className="p-4 bg-white text-violet-500 translate-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400">
                    New Suggestion
                </button>
            </form>
        </div>
    );
}

export default PromptInput;
