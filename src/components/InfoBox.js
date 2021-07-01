import "../App.css"

    const InfoBox = ({info}) => {

      // const area = (`${info.location.region}, ${info.location.city} - ${info.location.postalCode}`)
      
      return (
        <div id="output" className ="infoBox">
          <div>
            <ul id="headings">
                <h5>IP Address</h5>
                <h5>ISP</h5>                                                        
                <h5>Location</h5>                           
                <h5>TimeZone Address</h5>   
            </ul>
                
            { info.location &&  
            <ul id="information">
              <li>{info.ip}</li>
              <li>{info.isp}</li>
              <li>{info.location.city + ", " + info.location.region + " " + info.location.postalCode}</li>
              {/* <li>{area}</li> */}
              <li>{info.location.timezone}</li>
              
            </ul>
            } 
          </div>   
        </div>
      );
    }
    
    export default InfoBox 
    
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    //  // const [Address, setAddress] = useState("8.8.8.8")
    //  const [information, setInformation] = useState([]);
    //  useEffect(() => {
    //    fetch("https://geo.ipify.org/api/v1?apiKey=at_9266dgV17onwJseGusY9R1eYLhtne&ipAddress=8.8.8.8")
    //    .then((result) => {
    //      result.json().then((resp) => {
    //      setInformation(resp)
    //      })
    //    })
    //  }, [])
    //  let allData = Object.values(information);
    //  console.log(allData);
    //  // let latitude = info.location.lat;
    //  // let longitude = info.location.lng;
    //  // console.log(longitude, latitude);
   
    //  return (
    //  <div> 
    //      <h6>IPADDRESS</h6>
    //      <h6>LOCATION</h6>
    //      <h6>TIMEZONE</h6>
    //      <h6>ISP</h6>
    //      { allData.map((data) =>
    //       <ul>
               
    //            <li>{data.ip}</li>
               
    //            <li>{data.location}</li>
               
    //            <li>{data.timezone}</li>
               
    //            <li>{data.isp}</li>
    //        </ul>
       
    //      )}
       
    //    </div>   )}
    
    
    


// export default InfoBox
