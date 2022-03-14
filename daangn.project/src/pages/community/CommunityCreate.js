import Header from "../../components/Header";
import { useState } from "react";
import React from "react";
import VoteWrapper from "../../components/VoteWrapper";
import { fetchPostByForm } from "../../common/fetch";
import { appendingFormData } from "../../common/CreateForm";
import { useNavigate } from "react-router-dom";

const CommunityCreate = ({ history }) => {
  const navigate = useNavigate();
  const [states, setStates] = useState({
    writer: "jsh1",
    category: "FOOD",
    title: "",
    description: "",
    images: [],
    previewImage: [],
    isVoteArticle: false,
    isMultipleChoice: false,
    inputNum: 2,
    inputData: [
      { id: "opt-1", content: "" },
      { id: "opt-2", content: "" },
    ],
  });

  const {
    writer,
    category,
    title,
    description,
    images,
    previewImage,
    isVoteArticle,
    inputNum,
    isMultipleChoice,
    inputData,
  } = states;

  console.log("rerender");
  const handleInputChange = (id, newInput) => {
    const newData = inputData.map((data) => {
      return data.id === id ? { id, content: newInput } : data;
    });
    setStates((prev) => {
      return {
        ...prev,
        inputData: [...newData],
      };
    });
  };

  const insertImg = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setStates((prev) => {
        return {
          ...prev,
          images: [...prev.images, e.target.files[0]],
        };
      });
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setStates((prev) => {
          return {
            ...prev,
            previewImage: [...prev.previewImage, previewImgUrl],
          };
        });
      }
    };
  };

  const deleteImg = (index) => {
    const imgArr = images.filter((el, idx) => idx !== index);
    const imgNameArr = previewImage.filter((el, idx) => idx !== index);

    setStates((prev) => {
      return {
        ...prev,
        images: [...imgArr],
        previewImage: [...imgNameArr],
      };
    });
  };

  const getPreviewImgs = () => {
    if (images === null || images.length === 0) {
      return null;
    } else {
      return images.map((el, index) => {
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
    setStates((prev) => {
      return {
        ...prev,
        isVoteArticle: false,
      };
    });
  }

  const setVoteInputNum = (num) => {
    setStates((prev) => {
      return {
        ...prev,
        inputNum: num,
      };
    });
  };

  const addVoteInput = (newInputData) => {
    setStates((prev) => {
      return {
        ...prev,
        inputData: [...prev.inputData, newInputData],
      };
    });
  };

  const deleteVoteInput = (id) => {
    const newInputData = [...inputData];
    const removedInput = newInputData.filter((ip) => ip.id !== id);
    setStates((prev) => {
      return {
        ...prev,
        inputData: [...removedInput],
      };
    });
  };

  const handleMultipleChoice = () => {
    setStates((prev) => {
      return {
        ...prev,
        isMultipleChoice: !prev.isMultipleChoice,
      };
    });
  };

  const createPost = async (e) => {
    let voteOptions = [];
    inputData?.forEach((input) => {
      voteOptions.push(input.content);
    });

    const data = {
      writer: writer,
      communityCategory: category,
      title,
      description,
      isMultipleVote: isMultipleChoice,
      voteOptions,
      isVoteArticle,
      images,
    };

    const form = await appendingFormData(data);

    fetchPostByForm("http://localhost:8080/communities", form)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "OK") {
          alert("글이 등록되었습니다.");
          navigate("/communities");
        }
      });
  };

  const setTitle = (title) => {
    setStates((prev) => {
      return {
        ...prev,
        title,
      };
    });
  };

  const setContent = (content) => {
    setStates((prev) => {
      return {
        ...prev,
        content,
      };
    });
  };

  const setIsVoteArticle = () => {
    setStates((prev) => {
      return {
        ...prev,
        isVoteArticle: true,
      };
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
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </p>
            <p>
              <textarea
                name="text"
                id="content"
                placeholder="내용을 입력하세요."
                className="smallplaceholder"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></textarea>
            </p>
            {isVoteArticle ? (
              <VoteWrapper
                inputNum={inputNum}
                inputData={inputData}
                handleInputChange={handleInputChange}
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

            <div className="pagination-vote" onClick={setIsVoteArticle}>
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
