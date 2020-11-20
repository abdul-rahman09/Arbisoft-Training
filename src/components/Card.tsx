import React, { useState, useEffect, FC } from "react";
import Presentation from "./CardDisplay";
import { TodoItem } from "components/models";

interface CardInterface {
  title: string;
  data: Array<TodoItem>;
  newItem: any;
  getData: any;
  postData: any;
  showEditItem: Function;
  closePressed: Function;
  setShowForm: Function;
  showForm: boolean;
  setTextData: Function;
  textData: string;
  editData: string;
  setEditData: Function;
  editItem: any;
  saveEditItem: Function;
}

const Card: FC<CardInterface> = (props: CardInterface) => {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <Presentation
      saveEditItem={props.saveEditItem}
      title={props.title}
      post={props.postData}
      editData={props.editData}
      closeF={props.closePressed}
      textData={props.textData}
      data={props.data}
      addItem={() => props.setShowForm(true)}
      editItem={props.editItem}
      showForm={props.showForm}
      updateEditText={(evt: any) => props.setEditData(evt.target.value)}
      setText={(evt: any) => props.setTextData(evt.target.value)}
    />
  );
};
export default Card;
