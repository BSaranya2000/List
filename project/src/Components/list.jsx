import React, { useEffect, useState } from "react";
import axios from "axios";
import "./list.css";
const List = () => {
    const [data,setdata] = useState([])
    const Api = async () => {
    await axios
        .get ("https://jsonplaceholder.typicode.com/albums")
        .then ((res) => {
            console.log(res, "res");
            setdata (res.data);
        })
        .catch ((err) => {
            console.log(err, "err");
        } )
    }
    useEffect (() => {Api ()
     
        }, [])
        return (
            <> <table className="table">
                <thead className="thaed">
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
                </thead>
            <tbody className="tbody">
            {data.map ((item,index)=> {
                console.log(item,index);
                return (<>
                
                    
                    <tr>
                        <td>{item.userId}</td>
    
                        <td>{item.id}</td>
                    
                        <td>{item.title}</td>
                    </tr>
                
               
    
                </>
                )
            })
    
            }
             </tbody>
                </table>
                </>
    )
        }

export default List;
