import React, { useEffect, useState } from 'react';
import { Button, Container,Modal } from 'react-bootstrap';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import StarRatings from 'react-star-ratings';
const Video = (props) =>{
    
    const [show, setShow] = useState(false);
    const [rating, setRating] = useState(1)
  const handleClose = () => {
      setShow(false)
        setRating(0)
    }
  const handleShow = () => setShow(true);

    const [startAt,setStartAt] = useState(0)
    const [lapTime,setLapTime] = useState(0)
    const [end,setEnd] = useState(false)
    const [time,setTime] = useState()
    const [id,setId] = useState('SM1HwOjeRGE')
    useEffect(()=>{
        setId(props.videoid)
    })
  
    const opts = {
        
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          
        },
      };
      useEffect(() =>{
        setTime(millisToMinutesAndSeconds(lapTime))
      },[lapTime])
      const now = () =>{
        return (new Date()).getTime();
      }

      const handlePlay = () => {
          console.log('Playings')
          setStartAt(now())
          console.log(startAt)
      }

      const handlePause = () => {
          console.log('Paused')
          
          setLapTime(startAt ? lapTime + now() - startAt : lapTime)
          console.log(lapTime)
      }

      const handleEnd = () =>{
          console.log('End')
          setLapTime(startAt ? lapTime + now() - startAt : lapTime)
          console.log("TOTAL : ",lapTime)
          
          handleShow()
          setEnd(true)
          setStartAt(0)
          
      }
      const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return `${minutes} :${(seconds < 10 ? "0" : "")}${seconds}`;
    }

      const handleChangeState = () =>{
         // console.log("Change")
      }

        const changeRating = (x) =>{
            setRating(x)
        }
      const handleReplay = () => {
          
          setStartAt(0)
          setLapTime(0)
         
          setEnd(false) 
      }
      if(end){
          return(

              <Container className="contain">
                  <h1 className="pt-5">You Just Completed</h1>
                  <h5>TIME </h5> 
                  <h3>{time}</h3>
                  <Button variant="danger" onClick={handleReplay}><FontAwesomeIcon icon={faReply} /> Replay</Button>
                  <Button className="m-2" variant="warning" onClick={handleReplay}><FontAwesomeIcon icon={faDoorOpen} />EXIT</Button>
              
                  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Rate US</Modal.Title>
        </Modal.Header>
        <Modal.Body>We hope that you have enjoyed watching the video
        <StarRatings
          
          starRatedColor="blue"
          rating={rating}
          changeRating={changeRating}
          numberOfStars={6}
          name='rating'
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
              </Container>
          )
      }
    return(
        <Container>
            <YouTube className="player" videoId={id} 
            onPlay={handlePlay}
            onPause={handlePause}
            onEnd={handleEnd}
            onStateChange={handleChangeState}
            opts={opts}/>
        </Container>
    )

}

export default Video;