import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useNavigate } from 'react-router-dom'

const MemeCard = (props) => {
const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Button variant="primary"  onClick={(e)=> navigate(`/edit?url=${props.img}`) } >Edit</Button>
    </Card.Body>
  </Card>

    
  )
}

export default MemeCard