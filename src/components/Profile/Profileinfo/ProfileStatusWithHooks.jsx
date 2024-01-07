import React, {Fragment, useEffect, useState} from 'react';
import {updateStatus} from "../../../redux/profile-reducer";

const ProfileStatusWithHooks = (props) => {
    
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    
    useEffect(() => {
        setStatus(props.status);
    }, [props.state])
    
    const activateEditMode = () => {
        setEditMode(true);
    };
    
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    
    return (
      <Fragment>
          <div>
              {!editMode &&
                <div>
                    <b>Status: </b> <span onDoubleClick={activateEditMode}>{props.status || '---'}</span>
                </div>
              }
          </div>
          <div>
              {editMode &&
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>
              }
          </div>
      </Fragment>
    )
}

export default ProfileStatusWithHooks;