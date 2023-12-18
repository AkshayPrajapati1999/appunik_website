export interface IHireDataList {
  mobile: IHireDataListDetail[];
  web: IHireDataListDetail[];
  experience: IHireDataListDetail[];
}
export interface IHireDataListDetail {
  image: string;
  imageInfo: string;
  title: string;
  description: string;
}
