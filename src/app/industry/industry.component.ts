import { Component, OnInit } from '@angular/core';
import { Industries } from '../_models/industries';
import { IndustryService } from '../_services/industry.service';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css'],
  providers: [IndustryService]
})

export class IndustryComponent implements OnInit {
  private industries: Industries[] = [];
  private totAds = [];    
    
  constructor(private indService: IndustryService) { }

  ngOnInit() {  
        this.loadAllIndustries();
        //this.getIndTotAds(); 
    }

private loadAllIndustries() {
        this.indService
            .getIndustries()
            .then(industries => { this.industries = industries; });
    }

/*private getIndTotAds() {
        this.indService
            .getIndTotalAds()
            .then(totAds => { this.totAds = totAds; });
    }    */
}


