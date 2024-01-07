import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm";

function Dialogs(props) {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageBody
    
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    
    return (
      <div>
          <div className={s.dialogs}>
              <div className={s.dialogsItem}>
                  {dialogsElements}
              </div>
              <div className={s.messages}>
                  <div>{messagesElements}</div>
                  <AddMessageForm onSubmit={addNewMessage}/>
              </div>
          </div>
      </div>
    );
}

export default Dialogs;