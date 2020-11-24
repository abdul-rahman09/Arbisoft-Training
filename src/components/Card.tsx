import React, { useState, useEffect, FC } from "react";
import { TodoItem } from "components/models";
import TodoComponent from "containers/TodoContainer";
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
}

const Card: FC<CardInterface> = ({
  title,
  todos,
  getData,
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
  }, [getData]);

  function addItem() {
    postData(data.text);
    setData({ ...data, showForm: false, text: "" });
  }

  function showForm() {
    setData({ ...data, showForm: true, text: "" });
    closePressed();
  }

  return (
    <CardWrapper>
      <h6>{title}</h6>
      <div>
        {todos.map((item: TodoItem) => (
          <TodoComponent
            setData={setData}
            data={data}
            key={item.id}
            item={item}
          />
        ))}
        {data.showForm ? (
          <div>
            <InputWrapper
              onChange={(evt: any) =>
                setData({ ...data, text: evt.target.value })
              }
              value={data.text}
            />

            <StyledButton className="btn btn-success" onClick={addItem}>
              Add Card
            </StyledButton>
            <CrossButtonWrapper
              onClick={() => setData({ ...data, showForm: false, text: "" })}
            >
              X
            </CrossButtonWrapper>
          </div>
        ) : (
          <FieldWrapper onClick={showForm}>+ Add a card</FieldWrapper>
        )}
      </div>
    </CardWrapper>
  );
};
export default Card;
