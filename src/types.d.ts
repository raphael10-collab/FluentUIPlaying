export type tabType = {
  id: string
  url: string
  canGo?: {
    back: boolean
    forward: boolean
  }
}

export dismissUrl, { ReactComponent as Dismiss } from "./assets/svg/dismiss.svg"
