const DisplayStudentDetails = (props) => {
  return (
    <>
    <div style={divStylings.container}>
      <div style={divStylings.details}>{props.students.name}</div>
      <div style={divStylings.details}>{props.students.rollNo}</div>
    </div>
    </>
  );
};


const divStylings={
    details:{
       color:"white" 
    },
    container:{
        margin:"30px",
        border:"2px solid black",
        padding:"20px"
    }
}

export default DisplayStudentDetails;
