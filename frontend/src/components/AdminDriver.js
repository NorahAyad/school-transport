import { useState, useEffect } from "react";
import axios from "axios";
import DriverItem from "./PageSchool/DriverItem";
function AdminDriver() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/drive/`)
      .then((res) => {
        console.log(res.data);
        setDrivers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      {drivers.map((drivers) => {
        return (
          <DriverItem
            key={drivers.id}
            drivers={drivers}
            setDrivers={setDrivers}
          />
        );
      })}
    </div>
  );
}

export default AdminDriver;
