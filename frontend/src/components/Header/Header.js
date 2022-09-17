import React, { useEffect, useState } from 'react'
import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
function Header() {


    const [Userdetails, setUserdetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        console.log("userInfo",userInfo);
        if (userInfo) {
          navigate("/frontpage");
          setUserdetails(JSON.parse(userInfo));
        } else {
          navigate("/");
        }
      }, [navigate]);



      const logout = async()=>{
        if(window.confirm(`Want to logout?`) ){
            localStorage.clear() 
            navigate('/')
        }
        
      }




    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand >
                    
                    Shops
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="m-auto">
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form> */}
                    </Nav>

                    <Nav >

                        <Nav.Link href="/frontpage" >
                            {/* {Userdetails.name} */}
                            </Nav.Link>
                        <NavDropdown  title= {Userdetails.name} id="navbarScrollingDropdown">
                            <Link to='/login'/>
                            {/* <NavDropdown.Item href="">{Userdetails.name}</NavDropdown.Item> */}
                            <NavDropdown.Item onClick={logout }>Logout</NavDropdown.Item>
                               
                               
                               
                               {/* // localStorage.removeItem("userInfo");g
                             
                                // window.confirm(`Sure to Delete?`) 
                                //    localStorage.clear() 
                                // navigate('/') */}
                            
                           

                            <NavDropdown.Divider />

                        </NavDropdown>

                    </Nav>
                    <></>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
