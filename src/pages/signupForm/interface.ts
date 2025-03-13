export type ISignUpData = {
    email: string | FormDataEntryValue | null,
    password:string | FormDataEntryValue | null;
}

export type ISignUpErrorData = {
    email: string,
    password:string
}

export interface ISignUpStore{
    data: ISignUpData,
    setData: (data:ISignUpData) => void
    clearData: () => void

    // making store for error 
    errorData: ISignUpErrorData,
    setSignUpErrorData: (errorData:ISignUpErrorData) => void
    clearSignUpErrorData: () => void
}