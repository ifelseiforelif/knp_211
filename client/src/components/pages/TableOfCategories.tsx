import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ICategory from "../../models/ICategory";
import sliceDescription from "../../utils/sliceDescription";

function TableOfCategories() {
  const [data, setData] = useState<Array<ICategory>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_PATH_TO_SERVER + "categories");
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
                <tr><th>Id</th><th>Назва</th><th>Опис</th><th></th><th></th></tr>
              </thead>
              <tbody>
                {data.map((el: ICategory) => {
                    return(
                      <tr key={el.id}>
                        <td>{el.id.slice(0,5) + "..."}</td>
                        <td>{el.name}</td>
                        <td>{sliceDescription(el.description)}</td>
                        <td>
                          <Link className="btn btn-sm btn-primary action-btn-sm" aria-current="page" to="/edit-category">
                            Змінити
                          </Link>
                        </td>
                        <td>
                          <a className="btn btn-sm btn-danger action-btn-sm">Видалити</a>
                        </td>
                      </tr>
                    );
                })}
              </tbody>
          </table>
      </div>      
    </>
  );
}

export default TableOfCategories;