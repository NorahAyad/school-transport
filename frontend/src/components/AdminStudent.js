import axios from "axios";
function AdminStudent({ student, setStudents }) {
  const deleteStudent = () => {
    console.log(" this" + student.id);
    axios
      .delete(`http://localhost:8080/student/${student.id}`)
      .then((res) => {
        console.log(res);
        setStudents((students) => {
          return students.filter((element) => {
            return element.id !== student.id;
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="displayStudent">
      <h1> {student.fName + " " + student.lName}</h1>

      <button onClick={deleteStudent}> Delete </button>
    </div>
  );
}

export default AdminStudent;
