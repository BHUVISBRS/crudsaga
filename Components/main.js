
import React, { useState } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBCollapse } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import { Button } from 'bootstrap';


// function Page() {
//     const [showBasic, setShowBasic] = useState(false)
//     return (
//         <div>
//             <div>
//                 <MDBNavbar expand="lg" light bgColor='primary'>
//                     <MDBContainer fluid>
//                         <MDBNavbarBrand className='text-white'>
//                             <span style={{ marginRight: "10px" }}>
//                                 <MDBIcon fas icon='book-open'>
//                                 </MDBIcon>
//                             </span>
//                             Contact
//                         </MDBNavbarBrand>
//                         <MDBNavbarToggler
//                             aria-controls='navbar'
//                             aria-expanded='false'
//                             aria-label='Toggle navigation'
//                             className='text-white'
//                             onClick={() => setShowBasic(!showBasic)}>
//                             <MDBIcon fas icon='bars' />
//                         </MDBNavbarToggler>
//                         <MDBCollapse navbar show={showBasic}>
//                             <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
//                                 <MDBNavbarItem >
//                                     <MDBNavbarLink className='nav-link'>
//                                         <NavLink to="/" className="text-white">
//                                             Home
//                                         </NavLink>
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>



//                                 <MDBNavbarItem >

//                                     <MDBNavbarLink className='nav-link'>
//                                         <NavLink to='/about' className="text-white">
//                                             About
//                                         </NavLink>
//                                     </MDBNavbarLink>
//                                 </MDBNavbarItem>
//                             </MDBNavbarNav>
//                         </MDBCollapse>

//                     </MDBContainer>
//                 </MDBNavbar>


//             </div>
//         </div>
//     )
// }

// export default Page;



