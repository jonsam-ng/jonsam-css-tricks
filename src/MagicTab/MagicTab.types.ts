export interface ITab {
  label: string | React.ReactNode,
  key: string | number,
}

export interface MagicTabProps {
  tabs: ITab[],
  onClick?: (key: string | number) => void,
}
