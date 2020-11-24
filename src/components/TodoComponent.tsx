import React, { useState, useEffect, FC } from "react";
import { TodoItem } from "components/models";
import {
  FieldWrapper,
  InputWrapper,
  CrossButtonWrapper,
  StyledButton,
} from "style";

interface CardInterface {
  item: TodoItem;
  closePressed: Function;
  editItem: any;
  saveEditItem: Function;
  setData: Function;
  data: { showForm: boolean; text: string; isEdit: boolean };
}

const Card: FC<CardInterface> = ({
  item,
  saveEditItem,
  editItem,
  closePressed,
  setData,
  data,
}) => {
  return (
    <div key={item.id}>
      {item.showEdit ? (
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
      ) : (
        <FieldWrapper
          onClick={() => {
            setData({ ...data, text: item.text, showForm: false });
            editItem(item);
          }}
        >
          {item.text}
        </FieldWrapper>
      )}
    </div>
  );
};
export default Card;
