import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUserInfo } from "../common/jwt-utils";

export const CommentContainer = styled.div`
  margin-top: 20px;
  padding: 26px 0 0;
`;
const Comment = ({ postId, comments, handleCommentChange }) => {
  const navigate = useNavigate();
  const replyInputBox = useRef();
  const commentAddBtn = useRef();
  const commentAddCancelBtn = useRef();
  const userInfo = getUserInfo();
  console.log(userInfo);
  const [selectedCommentOrder, setSelectedCommentOrder] = useState(-1);

  function checkDeleteComment(order, parentNum, childCommentCount, id) {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      confirmDeleteComment(order, parentNum, childCommentCount, id);
    } else {
      return;
    }
  }

  function confirmDeleteComment(order, parentNum, childCommentCount, id) {
    // 부모 댓글인 경우
    if (order === parentNum) {
      if (childCommentCount === 0) {
        console.log(order, parentNum, childCommentCount, id);

        // 자식 댓글이 없으면 그냥 삭제
        fetch("http://localhost:8080/comment/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            navigate(0);
          })
          .catch((e) => {
            alert(e);
          });
      } else {
        // 자식 댓글이 있으면 (삭제된 메시지입니다.)로 표시해야 함
        console.log("자식이 있는 댓글을 삭제합니다.");
        fetch("http://localhost:8080/comment/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            navigate(0);
          })
          .catch((e) => {
            alert(e);
          });
      }
    } else {
      fetch("http://localhost:8080/comment/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          navigate(0);
        })
        .catch((e) => {
          alert(e);
        });
    }
  }

  function addComment() {
    let commentInput = document.getElementById("commentInput").value;
    let newComment = {
      writer: "jsh1",
      content: commentInput,
      communityId: postId,
      parentCommentNum: selectedCommentOrder,
    };
    console.log(newComment.parentCommentNum);
    fetch("http://localhost:8080/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((response) => {
        alert("댓글이 등록되었습니다.");
        handleCommentChange(response);
        navigate(0);
      })
      .catch((e) => {
        alert(e);
      });
  }

  function resetByOtherComment() {
    setSelectedCommentOrder(-1);
    const activeComment = document.getElementsByClassName("active");
    for (let i = 0; i < activeComment.length; i++) {
      activeComment[i].classList.remove("active");
    }
    replyInputBox.current.value = "";
    replyInputBox.current.placeholder = "댓글을 입력하세요.";
  }

  function resetByCancel(btn) {
    setSelectedCommentOrder(-1);
    const activeComment = document.getElementsByClassName("active");
    for (let i = 0; i < activeComment.length; i++) {
      activeComment[i].classList.remove("active");
    }
    replyInputBox.current.value = "";
    replyInputBox.current.placeholder = "댓글을 입력하세요.";
    btn.classList.remove("visible");
  }

  function commentReply(e) {
    resetByOtherComment();
    replyInputBox.current.placeholder = "대댓글을 입력하세요.";
    replyInputBox.current.focus();

    commentAddCancelBtn.current.classList.add("visible");
    setSelectedCommentOrder(Number(e.target.parentElement.parentElement.id));
    e.target.parentElement.parentElement.classList.add("active");
  }

  return (
    <CommentContainer>
      {comments?.map((comment) => (
        <div
          key={comment.commentOrder}
          id={comment.commentOrder}
          className={
            comment.commentOrder === comment.parentCommentNum
              ? "parent"
              : "child"
          }
        >
          <img
            src="https://cf-fpi.everytime.kr/0.png"
            className="picture medium"
            alt={comment.commentOrder}
          />
          <div className="profile">
            <h3 className="medium">{comment.writer}</h3>
            <time className="medium">방금</time>
          </div>
          {!comment.isDeleted && (
            <ul className="status">
              {comment.commentOrder === comment.parentCommentNum && (
                <li className="childcomment" onClick={commentReply}>
                  대댓글
                </li>
              )}
              <li className="commentvote">공감</li>
              {true && (
                <li
                  className="delete"
                  onClick={() =>
                    checkDeleteComment(
                      comment.commentOrder,
                      comment.parentCommentNum,
                      comment.childCommentCount,
                      comment.id
                    )
                  }
                >
                  삭제
                </li>
              )}
            </ul>
          )}
          {comment.isDeleted ? (
            <p className="large deleted">삭제된 메시지입니다.</p>
          ) : (
            <p className="large">{comment.content}</p>
          )}
        </div>
      ))}
      <form className="writecomment">
        <input
          ref={replyInputBox}
          type="text"
          maxLength="300"
          autoComplete="off"
          placeholder="댓글을 입력하세요."
          className="text"
          id="commentInput"
        />
        <ul id="commentInputOption" className="option">
          <li
            ref={commentAddCancelBtn}
            title="취소"
            className="cancel"
            onClick={resetByCancel}
          >
            취소
          </li>
          <li
            ref={commentAddBtn}
            title="완료"
            className="submit"
            onClick={addComment}
          ></li>
        </ul>
      </form>
    </CommentContainer>
  );
};

export default Comment;
