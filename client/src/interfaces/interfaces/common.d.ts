import { Typography } from "@mui/material/styles/createTypography"
import { HtmlHTMLAttributes } from "react";

export interface CustomButtonProps {
    type?: string,
    title: string,
    backgroundColor: string,
    color: string,
    fullWidth?: boolean,
    icon?: ReactNode,
    disabled?: boolean,
    float?: string,
    
    handleClick?: () => void
}
export interface IEvent {
    id: number;
    title: string;
    date: string;
    type: "warning" | "success" | "error";
}

interface ListItemProps {
    checked: boolean;
    changed: (event: React.ChangeEvent<HTMLInputElement>) => void;
    remove: () => void;
    children: React.ReactNode;
    
  }

  interface CheckboxProps {
    checked: boolean;
    onChange: (boolean) => void;
  }

export interface NotifCardProps {
    title: string,
    body:string,
    backgroundColor: string,
    color: string,
    fullWidth?: boolean,
    icon?: ReactNode,
}
export interface NormalCardProps {
    title: HtmlHTMLAttributes,
    body:HtmlHTMLAttributes,
    backgroundColor: string,
    color: string,
    fullWidth?: boolean,
}

export interface ProfileProps {
    type: string,
    name: string,
    avatar: string,
    email: string,
    properties: Array | undefined
}

export interface PropertyProps {
    _id: string,
    title: string,
    description: string,
    location: string,
    price: string,
    photo: string,
    creator: string
}

export interface FormProps {
    type: string,
    register: any,
    onFinish: (values: FieldValues) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>,
    formLoading: boolean,
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined,
    handleImageChange: (file) => void,
    onFinishHandler: (data: FieldValues) => Promise<void> | void,
    propertyImage: { name: string, url: string },
}
