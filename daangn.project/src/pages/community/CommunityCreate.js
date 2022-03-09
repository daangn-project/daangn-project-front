import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import VoteWrapper from "../../components/VoteWrapper";
import { fetchPostByForm } from "../../common/fetch";

const CommunityCreate = ({ history }) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [previewImage, setPreviewImage] = useState([]);

  const [isVoteArticle, setIsVoteArticle] = useState(false);
  const [inputNum, setInputNum] = useState(2);
  const [inputData, setInputData] = useState([
    { id: "opt-1", content: "" },
    { id: "opt-2", content: "" },
  ]);

  const [isMultipleChoice, setIsMultipleChoice] = useState(false);

  const insertImg = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImage([...image, e.target.files[0]]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setPreviewImage([...previewImage, previewImgUrl]);
      }
    };
  };

  const deleteImg = (index) => {
    const imgArr = image.filter((el, idx) => idx !== index);
    const imgNameArr = previewImage.filter((el, idx) => idx !== index);

    setImage([...imgArr]);
    setPreviewImage([...imgNameArr]);
  };

  const getPreviewImgs = () => {
    if (image === null || image.length === 0) {
      return null;
    } else {
      return image.map((el, index) => {
        return (
          <>
            <div className="thumbnails-del" onClick={() => deleteImg(index)}>
              X
            </div>
            <li
              key={index}
              className="thumbnails attached"
              style={{ backgroundImage: `url(${previewImage[index]})` }}
            ></li>
          </>
        );
      });
    }
  };

  function removeVote() {
    setIsVoteArticle(false);
  }

  const setVoteInputNum = (num) => {
    setInputNum(num);
  };
  const addVoteInput = (inputData) => {
    setInputData([...inputData]);
  };

  const deleteVoteInput = (id) => {
    const newInputData = [...inputData];
    const removedInput = newInputData.filter((ip) => ip.id !== id);
    setInputData([...removedInput]);
  };

  const handleMultipleChoice = () => {
    if (isMultipleChoice) setIsMultipleChoice(false);
    else setIsMultipleChoice(true);
  };

  const createPost = (e) => {
    const formData = new FormData();

    let voteOptions = []; // [{"content":"ABC"}, {"content":"XXX"}...]
    inputData?.map((input) => {
      voteOptions.push(input.content);
    });
    image?.map((img) => formData.append("images", img));
    // formData.append("voteSaveDto", JSON.stringify(voteData))
    formData.append("writer", "jsh1");
    formData.append("title", title);
    formData.append("communityCategory", "FOOD");
    formData.append("description", description);
    formData.append("isMultipleVote", isMultipleChoice);
    formData.append("voteOptions", voteOptions);
    formData.append("isVoteArticle", isVoteArticle);

    fetchPostByForm("http://localhost:8080/communities", formData)
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") return history.push("/");
      });
  };

  return (
    <>
      <Header />
      <div id="container">
        <div className="wrap articles">
          <div className="select-box">
            <label htmlFor="select">카테고리 선택</label>
            <select id="select">
              <option>카테고리1</option>
              <option>카테고리2</option>
            </select>
          </div>
          <br />
          <form className="write">
            <p>
              <input
                autoComplete="off"
                id="title"
                placeholder="글 제목"
                className="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </p>
            <p>
              <textarea
                name="text"
                id="content"
                placeholder="내용을 입력하세요."
                className="smallplaceholder"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </p>
            {isVoteArticle ? (
              <VoteWrapper
                inputNum={inputNum}
                inputData={inputData}
                setVoteInputNum={setVoteInputNum}
                addVoteInput={addVoteInput}
                deleteVoteInput={deleteVoteInput}
                handleMultipleChoice={handleMultipleChoice}
                removeVote={removeVote}
              />
            ) : null}

            <br />
            <ol className="thumbnails">{getPreviewImgs()}</ol>
          </form>
          <div className="pagination">
            <label className="input-file-button" htmlFor="input-file">
              <i className="fas fa-camera fa-2x"></i>
              <p>사진 추가</p>
            </label>
            <input
              type="file"
              id="input-file"
              onChange={insertImg}
              style={{ display: "none" }}
            />

            <div
              className="pagination-vote"
              onClick={() => setIsVoteArticle(true)}
            >
              <span id="btn_attach_vote" className="ico ico-vote">
                <i className="blind">attach vote</i>
              </span>
              <p>투표</p>
            </div>

            <div className="pagination-cancel">
              <i className="fas fa-chevron-left fa-2x"></i>
              <p>이전으로</p>
            </div>
            <div className="pagination-submit" onClick={createPost}>
              <i className="fas fa-check-square fa-2x"></i>
              <p>등록</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityCreate;
