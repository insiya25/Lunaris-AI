import { createContext, useState } from "react";
import run from "../config/gemini";


export const Context = createContext()

const ContextProvider = (props) => {
    const [input, setInput] = useState("") // input to save the input data
    const [recentPrompt, setRecentPrompt] = useState("") // current gemini ans will be saved here and displayed in our main component
    const [prevPrompts, setPrevPrompts] = useState([]) // to store all inputs history and display it in the recent tab
    const [showResult, setShowResult] = useState(false) // if its true, hide the boxes in main comp and display the result
    const [loading, setLoading] = useState(false) // if true, it will display the loading animation, this will be false when result is displayed 
    const [resultData, setResultData] = useState("") // this is the response (result)


    // this func is to add a typing effect to the gemini response
    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord) // we can get prev value of a state like this
        }, 30 * index) // 75 is delay duration
    }


    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    const onSet = async (prompt) => {
        setResultData(""); // Resetting the resultData state
        setLoading(true); // Show loading animation
        setShowResult(true); // Show result section
        let response;

        // Fetch the response based on the provided prompt or input
        if (prompt !== undefined) {
            response = await run(prompt);
            setRecentPrompt(prompt);
        } else {
            setPrevPrompts((prev) => [...prev, input]);
            setRecentPrompt(input);
            response = await run(input);
        }

        // Handle code blocks with triple backticks
        let newResponse = response.replace(/```([\s\S]*?)```/g, (match, codeBlock) => {
            return `<pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; font-family: monospace; color: #333;">${escapeHtml(codeBlock)}</pre>`;
        });

        // Handle inline code with single backticks
        newResponse = newResponse.replace(/`(.*?)`/g, (match, inlineCode) => {
            return `<code style="background-color: #f1f1f1; padding: 2px 5px; border-radius: 4px; font-family: monospace; color: #d6336c;">${escapeHtml(inlineCode)}</code>`;
        });

        // Replace double asterisks for bold text
        newResponse = newResponse.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

        // Replace *word* with italic text
        newResponse = newResponse.replace(/\*(\w.*?)\*/g, "<i>$1</i>");

        // Handle asterisk followed by space and double asterisks (* **word**) for unordered lists
        newResponse = newResponse.replace(/\*\s\*\*(.*?)\*\*/g, "<br/>⚫ <b>$1</b>");

        // Handle single asterisks starting from a new line
        newResponse = newResponse.replace(/\*\s(.*?)$/gm, "<br/>⚫ $1");

        // Replace single asterisks not followed by space or word with a new line
        newResponse = newResponse.replace(/\*(?!\s|\w)/g, "<br/>");

        // Add a new line and space after colons
        newResponse = newResponse.replace(/:/g, ":<br/> ");

        // Convert numbering (e.g., 1., 2.) into ordered lists
        newResponse = newResponse.replace(/(\d+)\.\s/g, (match, p1) => {
            return p1 === "1" ? "<ol><li>" : "</li><li>";
        });

        // Close the ordered list at the end if any
        if (newResponse.includes("<ol>")) {
            newResponse += "</li></ol>";
        }

        // Split the response into words for the typing animation
        const newResponseArray = newResponse.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " "); // Pass each word to delayPara for typing effect
        }

        setLoading(false); // Hide loading animation
        setInput(""); // Reset input field
    };

    // Function to escape HTML characters for safe rendering
    const escapeHtml = (unsafe) => {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };



    // onSet("What is React JS?")

    // we will pass all the states above so we can access it in the main component
    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSet,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;