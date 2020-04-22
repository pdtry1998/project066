import React from 'react'
import  { useState, useEffect } from 'react';
import Bar from './Bar';
import Editshow from './Editshow'
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
    const [placetName, SetplaceName] = useState('')
    const [district, Setdistrict] = useState('')
    const [province, Setprovince] = useState('')
    const [sector, Setsector] = useState('')
    const [time, Settime] = useState('')
    const [editshow, SetEditshow] = useState([{}])

    useEffect(() => {

        retriveData()

    }, [])

    const retriveData = () => {

        firestore.collection("Travel").onSnapshot(snapshot => {

            console.log(snapshot);

            let editshow = snapshot.docs.map(d => {
                const { id, imgUrl1, placetName, district, province,  sector, time } = d.data()
                console.log(id, imgUrl1, placetName, district, province,  sector, time )
                return {id, imgUrl1, placetName, district, province,  sector, time }
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
        firestore.collection("store").doc(id + '').set({ id, imgUrl1, placetName, district, province,  sector, time})
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
                                                <label htmlFor="district"> district</label>
                                                <input type="text"
                                                    name="district"
                                                    className="form-control"
                                                    id="district"
                                                    onChange={(e) => Setdistrict(e.target.value)} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="province">province</label>
                                                <input type="text"
                                                    name="province"
                                                    className="form-control"
                                                    id="province"
                                                    onChange={(e) => Setprovince(e.target.value)}  
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="sector">sector</label>
                                                <input type="text"
                                                    name="sector"
                                                    className="form-control"
                                                    id="sector"
                                                    onChange={(e) => Setsector(e.target.value)} 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="time">time</label>
                                                <input type="text"
                                                    name="time"
                                                    className="form-control"
                                                    id="time"
                                                    onChange={(e) => Settime(e.target.value)}  
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