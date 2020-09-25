import React, { useState } from 'react';
import Video from './Video';
import { Container, ListGroup,Row,Col } from 'react-bootstrap';
const List = (props) =>{

    const [videoid,setVideoid] = useState()    
    
    

    
    const handleChangeVideo = (e,key) => {
        e.preventDefault();
        console.log(key)
        setVideoid(key)
        
    }

    return(
        <Container className="top">
            <Row>
                <Col sm={4}>
                    <h4>LIST OF VIDEOS</h4>
                <ListGroup>
      { props.data ? (
                <div>{props.data.items.map((info)=>(
                    
                    <ListGroup.Item  key={info.id.videoId} onClick={(e) => handleChangeVideo(e,info.id.videoId)}>
                    <Container>
                        <Row>
                            <Col sm={4}>
                            <img
        alt=""
        src={info.snippet.thumbnails.default.url}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
                            </Col>
                            <Col>
                            {info.snippet.title}
                            </Col>
                        </Row>
                    </Container>
                   </ListGroup.Item>
                ))}</div>
                ) : (<div></div>) }  
                
                
            </ListGroup>
                </Col>
                <Col sm={8}>

                    
                    <Video videoid={videoid} />
                </Col>
            </Row>
    
        </Container>
    )

}

export default List;