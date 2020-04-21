import React from 'react'
import  { useState, useEffect } from 'react';
import Bar from './Bar';
import editshow from './editshow'
import { Form } from 'react-bootstrap'
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";
import { firestore } from '../index'
import { makeStyles } from '@material-ui/core/styles';



const PageChange = props => {

    const [id,setId] = useState(0)
    const [imgUrl1, SetImgUrl1] = useState('')
    const [productName, SetProductName] = useState('')
    const [price, SetPrice] = useState('')
    const [detail, SetDetail] = useState('')
    const [nameUser, setNameUser] = useState('')
    const [telephone, setTelephone] = useState('')
    const [facebook, setFacebook] = useState('')
    const [line, setLine] = useState('')
    const [editshow, SetEditshow] = useState([{}])

    useEffect(() => {

        retriveData()

    }, [])

    const retriveData = () => {

        firestore.collection("Travel").onSnapshot(snapshot => {

            console.log(snapshot);

            let editshow = snapshot.docs.map(d => {
                const { id, imgUrl1, productName, price, detail,  nameUser, telephone, facebook, line } = d.data()
                console.log(id, imgUrl1, productName, price, detail,  nameUser, telephone, facebook, line)
                return {id, imgUrl1, productName, price, detail,  nameUser, telephone, facebook, line}
            })

            SetEditshow(editshow)
          

        })
    }

    const renderEditshow= () => {
        console.log(editshow)
        if (editshow && editshow.length) {
            return editshow.map((editshow, index) => {
                return (

                    <editshow key={index} editshow={editshow}
                    />

                )
            })

        }
        else {

            return <li>No Show</li>

        }
    }

    const addEditshow = () => {

        let id = (editshow.length === 0) ? 1 : editshow[editshow.length - 1].id + 1
        firestore.collection("store").doc(id + '').set({ id, imgUrl1, productName, price, detail,  nameUser, telephone, facebook, line})
        alert("You Add Finish")
    }

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

   
      
      
     
    return (
        <div>
            <Bar />
            <div>
            
                <MDBNavbar color="cyan" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text">กรอกข้อมูลสินค้า</strong>
                    </MDBNavbarBrand>
                </MDBNavbar>
                
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <div>
                                <div>
                                    <div className="col-6 mt-5 mx-auto card">
                                    
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="imgUrl1">Image 1 : รูปภาพ</label>
                                                <input type="text"
                                                    name="imgUrl1"
                                                    className="form-control"
                                                    id="imgUrl1"
                                                    onChange={(e) => SetImgUrl1(e.target.value)} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="imgUrl2">PRODUCT NAME</label>
                                                <input type="text"
                                                    name="imgUrl2"
                                                    className="form-control"
                                                    id="imgUrl2"
                                                    onChange={(e) => SetProductName(e.target.value)} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="imgUrl3">PRICE</label>
                                                <input type="text"
                                                    name="imgUrl3"
                                                    className="form-control"
                                                    id="imgUrl3"
                                                    onChange={(e) => SetPrice(e.target.value)}  
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="strain">DETAIL</label>
                                                <input type="text"
                                                    name="strain"
                                                    className="form-control"
                                                    id="strain"
                                                    onChange={(e) => SetDetail(e.target.value)} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="nameUser">USER NAME</label>
                                                <input type="text"
                                                    name="nameUser"
                                                    className="form-control"
                                                    id="nameUser"
                                                    onChange={(e) => setNameUser(e.target.value)}  
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="telephone">Telephone</label>
                                                <input type="text"
                                                    name="telephone"
                                                    className="form-control"
                                                    id="telephone"
                                                    onChange={(e) => setTelephone(e.target.value)} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="facebook">Facebook</label>
                                                <input type="text"
                                                    name="facebook"
                                                    className="form-control"
                                                    id="facebook"
                                                    onChange={(e) => setFacebook(e.target.value)}  
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="line">Line</label>
                                                <input type="text"
                                                    name="line"
                                                    className="form-control"
                                                    id="line"
                                                    onChange={(e) => setLine(e.target.value)} 
                                            />
                                            </div>
                                        </form>
                                        <div className="text-center">
                                            <Button color="primary" style={{ margin:20, padding: 10}} onClick={addEditshow}>EDIT</Button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>    
                
            






            </div>
        </div>
    )
}

export default PageChange;