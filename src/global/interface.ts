import { IToasterData } from "./toaster/interface"

export type IUserData = {
    token: string,
    userId: number | null,
    role: string
}
export interface IGlobalStore {
    user: IUserData,
    setUser: (data:IUserData) => void,
    toasterData: IToasterData,
    setToasterData: (data:IToasterData) => void,
    closeToaster: () => void
}