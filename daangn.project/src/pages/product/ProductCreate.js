import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import { fetchPostByForm } from "../../common/fetch";
import { appendingFormData } from "../../common/CreateForm";
import { useNavigate } from "react-router-dom";

const ProductCreate = () => {
  const navigate = useNavigate();
  const [states, setStates] = useState({
    category: "SPORTS",
    title: "",
    description: "",
    images: [],
    previewImage: [],
  });

  const { category, title, description, images, previewImage } = states;

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

  const getPreviewImg = () => {
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

  const createPost = async (e) => {
    const data = {
      writer: "jsh1",
      productCategory: category,
      title,
      description,
      images,
    };

    const form = await appendingFormData(data);

    fetchPostByForm("http://localhost:8080/products", form)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "OK") {
          alert("?????? ?????????????????????.");
          navigate("/products");
        }
      });
  };

  const changeTitle = (e) => {
    setStates((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  };

  const changeDescription = (e) => {
    setStates((prev) => {
      return {
        ...prev,
        description: e.target.value,
      };
    });
  };

  return (
    <>
      <Header />
      <div id="container">
        <div className="wrap articles">
          <div className="select-box">
            <label htmlFor="select">???????????? ??????</label>
            <select id="select">
              <option>????????????1</option>
              <option>????????????2</option>
            </select>
          </div>
          <br />
          <form className="write">
            <p>
              <input
                autoComplete="off"
                id="title"
                placeholder="??? ??????"
                className="title"
                onChange={changeTitle}
              />
            </p>
            <p>
              <textarea
                name="text"
                id="content"
                placeholder="????????? ???????????????."
                className="smallplaceholder"
                onChange={changeDescription}
              ></textarea>
            </p>
            <br />
            <ol className="thumbnails">{getPreviewImg()}</ol>
          </form>
          <div className="pagination">
            <label className="input-file-button" htmlFor="input-file">
              <i className="fas fa-camera fa-2x"></i>
              <p>?????? ??????</p>
            </label>
            <input
              type="file"
              id="input-file"
              onChange={insertImg}
              style={{ display: "none" }}
            />

            <div className="pagination-cancel">
              <i className="fas fa-chevron-left fa-2x"></i>
              <p>????????????</p>
            </div>
            <div className="pagination-submit" onClick={createPost}>
              <i className="fas fa-check-square fa-2x"></i>
              <p>??????</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCreate;
