import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
function Adminheader() {


    const [Admindetails, setAdmindetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const adminInfo = localStorage.getItem("adminInfo");
        if (adminInfo) {
          navigate("/usermanagements");
          setAdmindetails(JSON.parse(adminInfo));
        } else {
          navigate("/admin");
        }
      }, [navigate]);



      const adminlogout = async()=>{
        if(window.confirm(`Want to logout?`) ){
            localStorage.clear() 
            navigate('/admin')
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
                       
                    </Nav>

                    <Nav >

                        
                        <NavDropdown title="Hi Admin" id="navbarScrollingDropdown">
                            <Link to='/login'/>
                            {/* <NavDropdown.Item href="">{Admindetails.name} Profile</NavDropdown.Item> */}
                            <NavDropdown.Item onClick={adminlogout}>Logout</NavDropdown.Item>
                                {/* localStorage.clear();
                                navigate('/admin') */}

                            

                            <NavDropdown.Divider />

                        </NavDropdown>

                    </Nav>
                    <></>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Adminheader
