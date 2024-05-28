import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import sliceDescription from "../../utils/sliceDescription";
import IUser from "../../models/IUser";

function TableOfUsers() {
  const [data, setData] = useState<Array<IUser>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_PATH_TO_SERVER + "users");
        setData(response.data);
      } 
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mb-4 rounded-3 ovx">
        <table className="table table-hover">
          <thead>
            <tr><th>Id</th><th>Ім'я</th><th>Логін</th><th>Email</th></tr>
          </thead>
          <tbody>
            {data.map((el: IUser) => {
              return(
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.login}</td>
                  <td>{el.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>      
    </>
  );
}

export default TableOfUsers;