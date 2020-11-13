export interface ITab {
  label: string | React.ReactNode,
  key: string | number,
}

export interface MagicTabProps {
  tabs: ITab[],
  onTabClick?: (key: string | number) => void,
}
