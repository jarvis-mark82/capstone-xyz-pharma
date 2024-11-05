import bg from "../assets/award.jpg"

const flexItemStyle = {
    padding: '20px',
    border: '1px solid #ccc',
    flex: '0 0 calc(50% - 10px)',

  };
  const bgImage = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'left',
    color: 'white',
  }

const About = () => {
  return (
    <>
    <div className="container-fluid" style={bgImage}>
        <h4> Awards & Achievements</h4>
        <ul className="text-capitalize text-left">
            <li > Excellence Award By The Quality Circle Forum of India(QCFI)</li>
            <li > Corporate Citizen award 2016 by Indian Drug Manufacturers Associations</li>
            <li > The Prestigious Annual 'Innovator Award' From BioNJ, New Jersey </li>
            <li > Cardinal Supply chain Excellence Award for 2015</li>
        </ul>
    </div>

    {/* About Card */}
    <div className="">
        <h6 className="p-3" style={{backgroundColor: "#E7E9EB"}}>Contact us</h6>
        <div class="d-flex justify-content-between text-left gap-3">
            <div class="flex-item text-left" style={flexItemStyle}>
                <h4> Head Office</h4>
                <div>XZY Pharma Limited</div>
                <div>Embassy Tower</div>
                <div>M.G Road, Bengaluru - 56002</div>
                <br />
                <div>Phone: ++91987643210</div>
                <div>Fax: +9191234567890</div>
                <br />
                <div> contact@xyzpharma.com</div>


            </div>
            <div class="flex-item text-left" style={flexItemStyle}> 
                <h4> Business Hours</h4>
                <p>We operate 24X7</p>
                <br></br>
                <p> From 8:00 a.m To 8:00 p.m</p>
            </div>
        
        </div>

    </div>
    </>
    
  )
}

export default About