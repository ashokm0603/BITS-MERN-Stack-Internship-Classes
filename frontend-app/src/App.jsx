import DisplayStudentDetails from "./components/DisplayStudentDetails";

const App = () => {
  let studentDetails = [
    { name: "ravi", rollNo: "Hu2025" },
    { name: "ramu", rollNo: "Hu2025" },
    { name: "ramu", rollNo: "Hu2025" },
    { name: "ramu", rollNo: "Hu2025" },
  ];
  return (
    <div style={{display:"flex" , justifyContent:"space-evenly",backgroundImage:"linear-gradient(red, blue)"}}>
      {studentDetails.map((std) => (
        <DisplayStudentDetails students={std} />
      ))}
    </div>
  );
};

export default App;
