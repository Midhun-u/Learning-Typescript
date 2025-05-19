import type React from "react";

export interface InputType{

    type : "text" | "checkbox";
    className : string;
    placeholder ? : string;
    inputValue ? : string;
    onChangeEvent ? : (event : React.ChangeEvent<HTMLInputElement>) => void
    checked ? : boolean

}