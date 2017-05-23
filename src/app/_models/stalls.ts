import { Photos } from './photos';

export interface Stalls {
 _id?: string;
 indId: string;
 stallName: number;
 cat_id: string;
 venue: String;
 googleAddr: String;
 availStatus: String;
 shortDescr: Number;
 dateFrom: Date;
 dateTo: Date;
 urlLink: String;
 hotNess: String;
 stallSpecs: {
   rentalPrice: String;
   fullDescr: String;
   size: String;
 };
  photoLinks: Array<Photos>;
}
