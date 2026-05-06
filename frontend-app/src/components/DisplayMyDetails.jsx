const DisplayMyDetails =(props)=> {
   return ( 
    <>
    <ol>
        <li>{props.mydata.Name}</li>
        <li>{props.mydata.RollNo}</li>
        <li>{props.mydata.Role}</li>
        <li>{props.mydata.College}</li>
    </ol>
    </>
   )
}
export default DisplayMyDetails;