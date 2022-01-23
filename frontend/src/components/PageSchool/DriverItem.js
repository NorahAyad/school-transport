import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
function DriverItem({ drivers, setDrivers }) {
  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      token: state.userReducer.token,
    };
  });

  const deleteDriver = () => {
    console.log(" this" + drivers.id);
    const config = {
      headers: { Authorization: `Bearer ${state.token}` },
    };
    axios
      .delete(`http://localhost:8080/driver/${drivers.id}`, config)
      .then((res) => {
        console.log(res.data);
        setDrivers(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been delete",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="displayStudent">
      <li className="table-row">
        <div className="col col-1" data-label="Job Id">
          {drivers.id}
        </div>
        <div className="col col-1" data-label="Job Id">
          {drivers.user.username}
        </div>
        <div className="col col-1" data-label="Customer Name">
          {drivers.fName + " " + drivers.lName}
        </div>
        <div className="col col-1" data-label="Amount">
          {drivers.phone}
        </div>
        <div className="col col-1" data-label="Payment Status">
          {drivers.student.map((e) => {
            return <div> {e.fName + " " + e.lName}</div>;
          })}{" "}
        </div>
        <div className="col col-1" data-label="Payment Status">
          {" "}
          <button className="field" onClick={deleteDriver}>
            {" "}
            Delete{" "}
          </button>{" "}
        </div>
      </li>
    </div>
  );
}

export default DriverItem;
