import {Card, Col, Row } from 'react-bootstrap';

import {
    buildCommunityDetailsUrl
  } from '../../common/url-utils';
  import { Link } from 'react-router-dom';

const CommunityCard= (props) => {
  const {id, writer, title, communityCategory, description, time, thumbnailImg} = props;  
  return (
      <li className='container column'>
        <Link to={buildCommunityDetailsUrl(id)}>
          <div className="card community-common">
            {/* <div className="">
              <img src={thumbnailImg} alt={id} />
            </div> */}
            <div className="card-body card-mediabody">
              <h5 className="card-title">{title}</h5>
              <Row className="d-flex justify-content-between">
                <Col xs="9">
                  <div>
                    <div>
                      <span>{description}</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="card-body">
              <div className="pe-3 w-80">
                <div>
                  <span> 서울시 마포구 성산2동</span>
                </div>
                <div className="card-info-bottom">
                  {writer && 
                  <div>
                    <span> 작성자: {writer}</span>
                    <p>카테고리: {communityCategory}</p>
                  </div>
                  }
                </div>
                {time}
              </div>
            </div>
          </div>
        </Link>
      </li>
    )
}

export default CommunityCard;