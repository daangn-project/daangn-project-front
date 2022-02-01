import {Card, Col, Row } from 'react-bootstrap';
import {
    buildProductDetailsUrl,
  } from '../../common/url-utils';
  import { Link } from 'react-router-dom';

const ItemPostCard= ({id, writer, title, location, description, time, price, chat, heart}) => {
    return (
      <li className='baby-product'>
        <Link to={buildProductDetailsUrl(id)}>
          <div className="card card-common">
            <div className="card-imgbox">
              <Link to={buildProductDetailsUrl(id)}>
                <img src="https://images.unsplash.com/photo-1642156205878-6a28a2d8b5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt={id} />
              </Link>
            </div>
            <div className="card-body card-mediabody">
              <h5 className="card-title">{title}</h5>
              <Row className="d-flex justify-content-between">
                <Col xs="9">
                  <Card.Text>
                  <span>
                    {description}
                  </span>
                  <span>
                    {price ? price : "가격 협의"}
                  </span>
                  </Card.Text>
                </Col>
              </Row>
            </div>
            <div className="card-body card-bodyinfo d-flex align-items-center border-bottom">
              <div className="pe-3 w-80">
                <div className="d-flex align-items-center justify-content-between">
                  <span> 서울시 마포구 성산2동</span>
                </div>
                <div>
                  <span> 작성자: {writer}</span>
                </div>
                <div>
                    관심 58 채팅 21
                </div>
              </div>
            </div>
          </div>
        </Link>
      </li>
    )
}

export default ItemPostCard;