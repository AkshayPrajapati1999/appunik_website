export interface IServiceWork {
    to: string | undefined;
    imageInfo: string | undefined;
    index: number;
    image: string;
    details: string;
    experience: string;
    opening: string;
    title: string;
    id: number;
    info1: string,
    info2: string,
    info3: string,
    info4: string,
    info5: string,
}

export interface IServiceDetail {
    // id: number;
    imageInfo:string;
    image: string;
    title: string;
    info1: string,
    info2: string,
    info3: string,
    info4: string,
    info5: string,
    to:string,

}

export interface IServiceBanner{
    image1:string;
    image2:string;
    logo: string;
    detail:string;
    title:string;
    info:string;
    titleInfo:string;
}
export interface IServiceInfo{
    title:string,
    subTitle:string,
    image:string,
    buttonInfo:string,
}
export interface IServiceCounter{
    title:string;
    columns: IServiceCounterColumn[];
}
interface IServiceCounterColumn {
    
    image: string;
    value: string;
    lists:IServiceCounterColumnLists[];
  }
interface IServiceCounterColumnLists {
    list:string
  }


