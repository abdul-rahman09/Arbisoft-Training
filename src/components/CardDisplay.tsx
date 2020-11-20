import React, { FC } from "react";
import Form from "components/Form";
import Edit from "components/EditForm";
import { FieldWrapper, CardWrapper } from "style";
import { TodoItem } from "components/models";

interface IPost {
  title: string;
  data: any;
}

interface ICardInterfaceProps {
  title: string;
  showForm: boolean;
  data: Array<TodoItem>;
  closeF: () => void;
  updateEditText: Function;
  textData: string;
  setText: Function;
  editData: string;
  addItem: Function;
  saveEditItem: Function;
  editItem: Function;
  post: IPost;
}

const CardDisplay: FC<ICardInterfaceProps> = ({
  title,
  data,
  saveEditItem,
  closeF,
}) => {
  return (
    <>
      <CardWrapper>
        <h6>{title}</h6>
        <div>
          {data.map((item: TodoItem) => (
            <Edit
              saveEditItem={saveEditItem}
              key={item.id}
              close={props.closeF}
              setText={props.updateEditText}
              showEdit={item.showEdit}
              editData={props.editData}
              onTouch={() => props.editItem(item)}
              data={item.text}
            />
          ))}
          {props.showForm ? (
            <Form
              post={props.post}
              textData={props.textData}
              close={props.closeF}
              setText={props.setText}
            />
          ) : (
            <FieldWrapper onClick={() => props.addItem()}>
              + Add a card
            </FieldWrapper>
          )}
        </div>
      </CardWrapper>
    </>
  );
};

export default CardDisplay;
