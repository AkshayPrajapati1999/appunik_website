export interface IHeaderPanel {
    label: string;
    value: string;
    icon:string;
    iconinfo:string;
    lists: IHeaderPanelList[]
}
export interface IHeaderPanelList {
    image: string;
    imageInfo: string;
    list: string;
    to:string;
}
