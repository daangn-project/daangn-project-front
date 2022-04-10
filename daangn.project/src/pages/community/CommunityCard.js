import { buildCommunityDetailsUrl } from "../../common/url-utils";
import { Link } from "react-router-dom";

const CommunityCard = (props) => {
  const { id, writer, communityCategory, description, time } = props;
  return (
    <li className="community-common container column mb-3">
      <Link to={buildCommunityDetailsUrl(id)}>
        <div className="card community-common">
          <div className="row card-body card-mediabody">
            <div>
              <button className="community-category mb-3">
                {communityCategory}
              </button>
            </div>
            <div className="community-card-description">
              <p>{description}</p>
            </div>
          </div>
          <div className="card-body community-card-body">
            <div className="community-card-info-bottom">
              {writer && <span>{writer} ∙ 서울시 마포구 성산2동</span>}
              <span>{time}</span>
            </div>
          </div>
          <hr />
          <div className="card-body community-card-commentbody">
            <div className="community-card-commentbody">
              <button className="community-comment-button">공감하기</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="community-comment-button">댓글 2</button>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CommunityCard;
