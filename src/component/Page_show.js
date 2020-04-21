import React, { useState, useEffect } from 'react'
import { firestore } from '../index'
import axios from 'axios'
import Editshow from './Editshow'
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './Bar';



const Pageshow = props => {



    const [editshow, setEditshow] = useState([{}])
  
  
    const retriveData = () => {
  
      firestore.collection("editshow").onSnapshot(snapshot => {
  
        console.log(snapshot);
  
        let myAni = snapshot.docs.map(d => {
  
          const { id, imgUrl1, placetName, district, province,  sector, time } = d.data()
          console.log(id, imgUrl1, placetName, district, province,  sector, time)
          return { id, imgUrl1, placetName, district, province,  sector, time }
  
        })
  
        setEditshow(myAni)
  
      })
    }
  
    const renderEditshow = () => {
  
      console.log(editshow)
  
      if (editshow && editshow.length) {
        return editshow.map((editshow, index) => {
          return (
       
                <Editshow editshow={editshow} index={index} />
        
          )
        })
      }
      
      else {
  
        return <li>ไม่มีจ้าาาาาาาาาาาาาา</li>
  
      }
    
    }
  
  
    useEffect(() => {
  
  
      retriveData()
  
  
    }, [])
  

  
    return (
  
      <div>
        <Bar/>
        <br />
        <ul>{renderEditshow()}</ul>
      </div>
  
  
    );
  }
  
  export default Pageshow;