"use client";

import useSWR from "swr";
import fetchSuggestionFromChatGPT from "@/lib/fetchSuggestionFromChatGPT";
import { FormEvent, useEffect, useState } from "react";
import fetchImages from "@/lib/fetchImages";
import toast from "react-hot-toast";

function PromptInput() {
    const [input, setInput] = useState("");
    const [checkInput, setCheckInput] = useState(false);

    //fetching data from chatgpt
    const {
        data: suggestion,
        isLoading,
        mutate,
        isValidating,
    } = useSWR("suggestion", fetchSuggestionFromChatGPT, {
        revalidateOnFocus: false,
    });
    const { mutate: updateImages } = useSWR("images", fetchImages, {
        revalidateOnFocus: false,
    });

    const submitPrompt = async (useSuggestion?: boolean) => {
        const inputPrompt = input.toLowerCase().trim();
        setInput("");

        console.log(inputPrompt);
        // p is the prompt that will be sent to the API
        // if useSuggestion is true, then we use the suggestion
        const p = useSuggestion ? suggestion : inputPrompt;

        const notificationPrompt = p;
        const notificationPromptShort = notificationPrompt.slice(0, 20);

        const notification = toast.loading(
            `Generating image for "${notificationPromptShort}"...`
        );

        console.log("DEBUG HERE", p);

        const res = await fetch("/api/generateImage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: p }),
        });
        const dataPrompt = await res.json();

        if (dataPrompt.error) {
            toast.error(dataPrompt.error, {
                id: notification,
            });
        } else {
            toast.success(
                `AI D A L L E Image generated for "${notificationPromptShort}"!`,
                {
                    id: notification,
                }
            );
        }
        updateImages();
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setInput("");
        await submitPrompt();
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setInput(event.target.value);
        setCheckInput(event.target.value.length > 0);
    };

    return (
        <div className="m-10">
            <form
                className="flex flex-col border rounded-md shadow-md lg:flex-row shadow-slate-400/10 lg:divide-x "
                onSubmit={handleSubmit}>
                <textarea
                    value={input}
                    onChange={handleInputChange}
                    placeholder={
                        (isLoading &&
                            "ChatGPT is thinking of suggestion......") ||
                        suggestion ||
                        "Enter a prompt....."
                    }
                    className="flex-1 p-4 rounded-md outline-none"
                />
                <button
                    disabled={!input}
                    type="submit"
                    className={`p-4 font-bold ${
                        input
                            ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white transition-color duration-200"
                            : "text-gray-300 cursor-not-allowed"
                    }`}>
                    Generate
                </button>
                <button
                    onClick={() => submitPrompt(true)}
                    disabled={isLoading || isValidating}
                    type="button"
                    className="p-4 font-bold text-white duration-200 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 translate-colors disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400">
                    Use Suggestion
                </button>
                <button
                    disabled={checkInput}
                    onClick={mutate}
                    type="button"
                    className={`p-4 font-bold duration-200 ${
                        checkInput
                             ? "bg-gray-400 text-gray-300 cursor-not-allowed"
                            : "bg-white text-violet-500 hover:bg-violet-500 hover:text-white hover:shadow-md"

                    }`}>
                    New Suggestion
                </button>
            </form>

            {input ? (
                <p className="pt-2 pl-2 italic font-light">
                    Suggestion:{" "}
                    <span className="text-violet-500">
                        {isLoading ? "ChatGPT is thinking...." : suggestion}
                    </span>
                </p>
            ) : null}
        </div>
    );
}

export default PromptInput;
