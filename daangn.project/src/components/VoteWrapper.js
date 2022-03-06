import VoteOption from "./VoteOption";
import { useEffect, useState } from "react";
const VoteWrapper = ({inputNum, inputData, setVoteInputNum,  addVoteInput, deleteVoteInput, handleMultipleChoice, removeVote}) => {
    const addBtn = document.getElementById('btn_add_poll_choice');

    // 항목 추가 버튼을 눌렀을 때 VoteOption 추가
    function addVoteOption(e) {
        setVoteInputNum(inputNum + 1);
        const newId = `opt-${inputNum+1}`;
        const newInput = {
            id: newId,
            content: ''
        }
        addVoteInput([...inputData, newInput]);
    }


    // 투표 삭제 버튼을 눌렀을 때 remove
    function deleteVote(){
        removeVote();
    }

    function handleInputChange(id, content){ // inputData의 내용을 수정
        for(let i = 0; i < inputData.length; i++){
            if(inputData[i].id === id){
                inputData[i].content = content;
            }
        }
        addVoteInput(inputData);
    }

    function handleInputRemove(option){
        deleteVoteInput(option.id)
    }

    function isMultipleChoice(e){
        const multichk = e.target
        if(multichk.value === 'N'){
            multichk.value = 'Y';
            multichk.classList.add("check");
        }
        else {
            multichk.value = 'N';
            multichk.classList.remove("check");
        }
        handleMultipleChoice();
    }

    return(
        <div id="poll" className="poll-area">
            <p className="noti-from-op ico-star">글 등록 이후에는 수정할 수 없습니다.</p>
            <ul className="poll-list">
                {inputData.map((ip) => {
                    return(<VoteOption key={ip.id} ip={ip} handleInputChange={handleInputChange} handleInputRemove={handleInputRemove}/>)
                })}

                <li id="btn_add_poll_choice" className="add"><button type="button" id="btn_add_choice" className="btn-add" onClick={addVoteOption}>항목 추가</button></li>
                
            </ul> 
                
            <div className="fnc">
                <div className="allow">
                    <span className="check-bx">
                        <div>
                            <i className="fas fa-check-square fa-2x" value="N" onClick={isMultipleChoice}></i>
                            <label htmlFor="is_multi_poll" className="inp-lb">복수 선택 허용</label>
                        </div>
                    </span>
                </div> 

                <div className="delete">
                    <button type="button" id="btn_poll_delete" className="btn-delete" onClick={deleteVote}>투표 삭제</button>
                </div>
            </div>
        </div>
            
    )
}

export default VoteWrapper;


