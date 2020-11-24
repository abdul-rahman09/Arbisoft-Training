import React, { useState, useEffect, FC } from "react";
import { TodoItem } from "components/models";
import {
  FieldWrapper,
  InputWrapper,
  CrossButtonWrapper,
  StyledButton,
} from "style";
type TdataType = { showForm: boolean; text: string; isEdit: boolean };

interface ITodoInterface {
  item: TodoItem;
  closePressed: (evt: React.MouseEvent) => void;
  editItem: (obj: TodoItem) => void;
  saveEditItem: (obj: string) => void;
  setData: (obj: TdataType) => void;
  data: TdataType;
}

const Card: FC<ITodoInterface> = ({
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
          <CrossButtonWrapper
            onClick={(evt: React.MouseEvent) => closePressed(evt)}
          >
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
