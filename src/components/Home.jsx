import React from 'react'
import bannerImage from "../assets/banner.jpg"
import CardComponent from './Card'

const Home = () => {
  return (
    <>
     <div className='' style={{width: "95vw", margin: "auto"}}>
       {/* Banner Image */}
       <div className='' style={{width: "100%", height: "400px"}}>
            <img src={bannerImage} alt="banner image" className='' style={{width: "100%", height: "100%", objectFit: "cover"}}/>
        </div>
        {/* <div className=" container-fluid mt-4">
            <div className="row g-3">
                <div className="col-md-4">
                <CardComponent title="Mission"
                 subTitle="Our Mission"
                 backgroundColor="bg-primary"
                 text="To be the lead pharmaceutical company of the country as a manufacturer of high quality affordable medicines." />
                </div>
                <div className="col-md-4">
                <CardComponent 
                title="Vision"
                subTitle="Our Vision"
                backgroundColor="bg-danger"
                 text="To Add value to our society and act as  a driving force of our humanity with help of highest level of innovation and technology." />
                </div>
                <div className="col-md-4">
                <CardComponent
                subTitle="We Are Leading"
                backgroundColor="bg-success" 
                title="Why Us?" text="Weare one of the leading pharmaceutical companies of the country dedicated solely for the people in need." 
                link={true}
                />
                </div>
            </div>
      </div>
        */}
        <div className=" mt-4" style={{ overflowX: 'hidden' }}>
    <div className="row g-2">
        <div className="col-md-4">
            <CardComponent 
                title="Mission"
                subTitle="Our Mission"
                backgroundColor="bg-primary"
                text="To be the lead pharmaceutical company of the country as a manufacturer of high quality affordable medicines." 
            />
        </div>
        <div className="col-md-4">
            <CardComponent 
                title="Vision"
                subTitle="Our Vision"
                backgroundColor="bg-danger"
                text="To Add value to our society and act as a driving force of our humanity with help of highest level of innovation and technology." 
            />
        </div>
        <div className="col-md-4">
            <CardComponent
                subTitle="We Are Leading"
                backgroundColor="bg-success"
                title="Why Us?"
                text="We are one of the leading pharmaceutical companies of the country dedicated solely for the people in need."
                link={true}
            />
        </div>
    </div>
</div>
          </div>
    </>
  )
}

export default Home