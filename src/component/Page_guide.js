import React from 'react'
import Bar from './Bar';
import Topguide from './Topguide';
import Topguide2 from './Topguide2';
import Footer from './Footer'
import Pageguide3 from './Pageguide3';


const PageGuide = props => {
    return (
        <div>
            <Bar />
            <Topguide />
            <Topguide2 />
            <div>
                <Pageguide3 />
                <Footer />
            </div>
        </div>
    )
}

export default PageGuide;