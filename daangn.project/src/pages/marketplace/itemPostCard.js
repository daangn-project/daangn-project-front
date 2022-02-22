import {Card, Col, Row } from 'react-bootstrap';
import {
    buildProductDetailsUrl,
  } from '../../common/url-utils';
  import { Link } from 'react-router-dom';

const ItemPostCard= (props) => {
  const {id, writer, title, location, description, time, price, thumbnailImg, chat, heart} = props;  
  return (
      <li className='baby-product'>
        <Link to={buildProductDetailsUrl(id)}>
          <div className="card card-common">
            <div className="card-imgbox">
              <img src={thumbnailImg} alt={id} />
            </div>
            <div className="card-body card-mediabody">
              <h5 className="card-title">{title}</h5>
              <Row className="d-flex justify-content-between">
                <Col xs="9">
                  <div>
                    <div>
                      <span>{description}</span>
                    </div>
                    <div>
                      <span>{price ? price + "원" : "가격 협의"}</span>
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
                  </div>
                  }
                  <div>
                    <span> 관심: 10</span>
                    <span> 채팅: 0</span>
                  </div>
                </div>
                {time}
              </div>
            </div>
          </div>
        </Link>
      </li>
    )
}

export default ItemPostCard;