import { AlertColor } from "@mui/material"

export type IToasterData = {
    open: boolean,
    message: string | null,
    severity: AlertColor | undefined
}

export interface IToaster {
    data: IToasterData,
    close: (value:boolean) => void
}