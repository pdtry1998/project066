import React, { useState, useEffect } from 'react'
import { firestore } from '../index'
import Editshow from './Editshow'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './Bar';



const Pageshow = props => {



  const [editshow, setEditshow] = useState([{}])


  const retriveData = () => {

    firestore.collection("editshow").onSnapshot(snapshot => {

      console.log(snapshot);

      let myAni = snapshot.docs.map(d => {

        const { id, imgUrl1, placetName, district, province, sector, time, reviews } = d.data()
        console.log(id, imgUrl1, placetName, district, province, sector, time, reviews)
        return { id, imgUrl1, placetName, district, province, sector, time, reviews }

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

      return <li>Empty</li>

    }

  }


  useEffect(() => {

            retriveData()

  }, [])



  return (

    <div>
      <Bar />
      <br />
      <ul>{renderEditshow()}</ul>
    </div>

  );
}

export default Pageshow;