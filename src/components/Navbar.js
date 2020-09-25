import React from 'react';
import { Navbar, Form, FormControl,Button } from 'react-bootstrap';
const NavBar = () =>{

    return(
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe3WnqGRiHCRyYG242wqzKMBZ9WfszX6FU5Q&usqp=CAU"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Learn Today
    </Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" size="sm"/>
      <Button variant="outline-primary" size="sm">Search</Button>
    </Form>
  </Navbar>
    )

}

export default NavBar;