import React, { useState, useEffect, FC } from "react";
import { TodoItem } from "components/models";
import {
  FieldWrapper,
  CardWrapper,
  InputWrapper,
  CrossButtonWrapper,
  StyledButton,
} from "style";

interface CardInterface {
  title: string;
  todos: Array<TodoItem>;
  getData: any;
  postData: any;
  closePressed: Function;
  editItem: any;
  saveEditItem: Function;
}

const Card: FC<CardInterface> = ({
  title,
  todos,
  getData,
  saveEditItem,
  editItem,
  postData,
  closePressed,
}) => {
  const [data, setData] = useState({
    showForm: false,
    text: "",
    isEdit: false,
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <CardWrapper>
      <h6>{title}</h6>
      <div>
        {todos.map((item: TodoItem) => (
          <div key={item.id}>
            {!item.showEdit && (
              <FieldWrapper onClick={()=> {setData({ ...data, text: item.text, showForm:false }); editItem(item)}}>{item.text}</FieldWrapper>
            )}
            {item.showEdit && (
              <>
                <InputWrapper
                  onChange={(evt: any) =>
                    setData({ ...data, text: evt.target.value })
                  }
                  value={data.text}
                />
                <StyledButton
                  className="btn btn-success"
                  onClick={(evt: any) => saveEditItem(data.text)}
                >
                  Save
                </StyledButton>
                <CrossButtonWrapper onClick={(evt) => closePressed(evt)}>
                  X
                </CrossButtonWrapper>
              </>
            )}
          </div>
        ))}
        {data.showForm ? (
           <div>
            <InputWrapper onChange={(evt: any) => setData({ ...data, text: evt.target.value })} value={data.text}/>

            <StyledButton className="btn btn-success" onClick={()=> {postData(data.text);setData({ ...data, showForm: false, text: "" }) }}>Add Card</StyledButton>
            <CrossButtonWrapper onClick={() => setData({ ...data, showForm: false, text: "" })}>X</CrossButtonWrapper>
           </div>
        ) : (
          <FieldWrapper onClick={() => {setData({ ...data, showForm: true, text: "" }); closePressed()}}>
            + Add a card
          </FieldWrapper>
        )}
      </div>
    </CardWrapper>
  );
};
export default Card;
