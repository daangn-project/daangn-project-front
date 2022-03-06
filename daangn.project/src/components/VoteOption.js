import { useEffect, useState } from "react";

const VoteOption = ({ip, handleInputChange, handleInputRemove}) => {
    const [content, setContent] = useState('');

    function inputChange(e){
        setContent(content => e.target.value, handleInputChange(ip.id, e.target.value));
    }

    function deleteInput(e){
        handleInputRemove(e.target.parentElement);
    }
    
    return(
        <li id = {ip.id}>
            <span><input type="text" name="poll_choice" placeholder="투표항목" autoComplete="off" value={content || ''} onChange={inputChange}/></span>
            <em id="poll_choice_x_2" onClick={deleteInput}><span className="blind" onClick={deleteInput}>reset</span></em>
        </li>
    )
}

export default VoteOption;