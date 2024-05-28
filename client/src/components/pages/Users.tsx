import { useEffect, useState } from "react";
import axios from "axios";
import TableOfUsers from "./TableOfUsers";
import IUser from "../../models/IUser";

function Users() {
    const [users, setUsers] = useState<Array<IUser>>([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_PATH_TO_SERVER + "users")
        .then(r => {
            setUsers(r.data);
        })
    }, []);

    return (
        <>
            <div className="col col-sm-9 mx-auto">
                <h2 className="mt-5 mb-3">Користувачі</h2>
                <TableOfUsers/>
            </div>
        </>
    );
}

export default Users;