import { Stalls } from './stalls';

export interface Industries {
 _id?: string; // interfaces allow fields to be optional
 cat_id: string; 
 totalAds: number;   
 stalls: Array<Stalls>;
}
