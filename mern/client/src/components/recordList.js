import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Avatar from "./assets/images/me.jpg"
import "./assets/css/style.css"
import Covid from "../covid19/covid"

export default function RecordList() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);
      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      setName(records[0].name);
      setDescription(records[0].description);
      setAvatar(records[0].avatar);
    }
    getRecords();
    return; 
  }, []);

  const handleName= (event)=>{
    setName(event.target.value);
    setEdit(true);
  }

  const handleDescription =(event)=>{
    setDescription(event.target.value);
    setEdit(true);
  }
  const handleSave=()=>{
    const editedPerson = {
      name: name,
      description: description,
      avatar: avatar,
    };
    async function updateRecords() {
      await fetch(`http://localhost:5000/update/633bee58881589219430b518`, {
        method: "POST",
        body: JSON.stringify(editedPerson),
        headers: {
          'Content-Type': 'application/json'
        },
      });
    }
    updateRecords();
    setEdit(false);
    window.alert("Updated successfully!");
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-3 pr-0">
          <img src={Avatar} className="img-thumbnail" alt="Cinque Terre" width="304" height="236" />
        </div>
        <div className="col-md-9 mt-5 pl-0">
          <div>
            <input type="text" value={name} className="avatar" onChange={handleName} />
          </div>
          <textarea name="description" className="description mt-3 pl-4 pt-2 pr-3 pb-3" value={description} cols="90" rows="6" onChange={handleDescription}></textarea>
        </div>
        {
          edit?<button type="button" class="btn btn-success save_button" onClick={handleSave}>save</button>:
          <button type="button" class="btn btn-danger save_button disabled_btn" disabled>save</button>
        }
      </div>
      <Covid />
    </div>
  );
}
