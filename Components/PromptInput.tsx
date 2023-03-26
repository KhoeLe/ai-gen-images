"use client";

import fetchSuggestionFromChatGPT from "@/lib/fetchSuggestionFromChatGPT";
import { useState } from "react";
import useSWR from "swr";

function PromptInput() {
    const [input, setInput] = useState("");

    //fetching data from chatgpt
    const {data : suggestion, isLoading, mutate, isValidating } =  useSWR('/api/suggestion' , fetchSuggestionFromChatGPT , {revalidateOnFocus: false})

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        setInput("");
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setInput(event.target.value);
    };
    console.log(suggestion)


    return (
        <div className="m-10">
            <form
                className="flex flex-col border rounded-md shadow-md lg:flex-row shadow-slate-400/10 lg:divide-x "
                onSubmit={handleSubmit}>
                <textarea
                    value={input}
                    onChange={handleInputChange}
                    placeholder={(isLoading && "ChatGPT is thinking of suggestion......") ||suggestion ||"Enter a prompt....."}
                    className="flex-1 p-4 rounded-md outline-none"
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
                    disabled={isLoading || isValidating}
                    type="button"
                    className="p-4 font-bold text-white duration-200 bg-violet-400 translate-colors disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400">
                    Use Suggestion
                </button>
                <button
                    onClick={mutate}
                    type="button"
                    className="p-4 font-bold duration-200 bg-white text-violet-500 translate-colors disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400">
                    New Suggestion
                </button>
            </form>

            {input ? (
                <p className="pt-2 pl-2 italic font-light">
                    Suggestion: {" "}
                    <span className="text-violet-500">
                        {isLoading ? "ChatGPT is thinking...." : suggestion}
                    </span>
                </p>
            ) : null}

        </div>
    );
}

export default PromptInput;
