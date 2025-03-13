import { create } from "zustand";
import { ISignUpData,  ISignUpErrorData,  ISignUpStore } from "./interface";

export const useSignUpStore = create<ISignUpStore>((set) => ({
    //  for storing, setting and clearing the signup data in the form
   data: {email:"",password:""},

   setData: (data:ISignUpData) => {
    set((state:ISignUpStore) => ({
        data: {...state.data , ...data}
    }));
   },

   clearData: () => {
    set(() => ({
        data: {email:"",password:""}
    }))
   },
   
//    for handling the errors, essentially the form validation
   errorData: {email:"",password:""},

   setSignUpErrorData: (errorData:ISignUpErrorData) => {
    set((state:ISignUpStore) => ({
        errorData: {...state.errorData,...errorData}
    }));
   },
   clearSignUpErrorData: () => {
    set({errorData:{email:"",password:""}})
   }
}))