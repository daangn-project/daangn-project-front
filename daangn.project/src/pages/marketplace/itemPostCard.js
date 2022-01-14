import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import {
    buildProductDetailsUrl,
  } from '../../common/url-utils';
  import { Link } from 'react-router-dom';

const ItemPostCard= () => {
    return (
        <Link to={buildProductDetailsUrl("상품1")}>
        <div className="card card-common">
        <div className="cart-imgbox">
          <Link to={buildProductDetailsUrl("상품1")}>
            <img src="https://images.unsplash.com/photo-1642156205878-6a28a2d8b5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
            style={{width:'300px',height:'100px'}}/>
          </Link>
        </div>
        <div className="card-body card-mediabody">
          <h5 className="card-title">상품1</h5>
          <Row className="d-flex justify-content-between">
            <Col xs="9">
              <Card.Text>
                <Image
                  src="https://images.unsplash.com/photo-1642156205878-6a28a2d8b5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                  className="me-2"
                  style={{ width: '32px', height: '32px' }}
                  roundedCircle
                />
                <Link
                  to={buildProductDetailsUrl("사용자1")}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  @사용자1
                </Link>
              </Card.Text>
            </Col>
          </Row>
        </div>
        <div className="card-body card-bodyinfo d-flex align-items-center border-bottom">
          <div className="pe-3 w-80">
            <div className="d-flex align-items-center justify-content-between">
              <h4>
                KRW{' '}
                 10,000원
              </h4>
            </div>
          </div>
            </div>
        </div>
        </Link>
    )
}

export default ItemPostCard;