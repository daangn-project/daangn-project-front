import { Button, Card, Col, Row } from "react-bootstrap";

import { buildCommunityDetailsUrl } from "../../common/url-utils";
import { Link } from "react-router-dom";

const CommunityCard = (props) => {
  const {
    id,
    writer,
    title,
    communityCategory,
    description,
    time,
    thumbnailImg,
  } = props;
  return (
    <li className="community-common container column mb-3">
      <Link to={buildCommunityDetailsUrl(id)}>
        <div className="card community-common">
          <div className="row card-body card-mediabody">
            <div>
              <p className="community-category">{communityCategory}</p>
            </div>
            <div className="community-card-description">
              <p>{description}</p>
            </div>
          </div>
          <div className="flex card-body community-card-body">
            <div className="community-card-info-bottom">
              <span> 서울시 마포구 성산2동</span>
              {writer && <span> ⎮ 작성자 : {writer}</span>}
            </div>
            <div className="community-card-time">
            <span className="community-card-time">{time}</span>
            </div>
          </div>
        <hr/>
          <div className="card-body community-card-body">
          <div className="community-card-comment">
            <button className="community-comment-button">공감하기</button>&nbsp;
            <button className="community-comment-button">댓글달기</button>
            </div>
            </div>
        </div>
      </Link>
    </li>
  );
};

export default CommunityCard;
