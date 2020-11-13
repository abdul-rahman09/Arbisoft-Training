
export interface Props {
    firstName: string,
    middleName: string,
    lastName: string,
    setFirstName: Function,
    setMiddleName: Function,
    setLastName: Function,
}

export interface TodoItem {
    id: number;
    text: string;
}