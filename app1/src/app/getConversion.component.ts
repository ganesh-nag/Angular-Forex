import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{Conversion} from './conversion.model';
import{ConversionService} from './conversion.service';


@Component({
  selector: 'conversion-page',
    templateUrl: './getConversion.component.html'
    
  })
  
export class GETConversionComponent {
conversion:Conversion = new Conversion();
conversion1:Conversion;
constructor(private router:Router, private conversionService:ConversionService){}

myvar:any;
convert():void{
  alert('in getconversion component'); 
this.conversionService.convert(this.conversion)
.subscribe(data => {
  this.myvar = data;
  console.log(this.myvar);
  alert(this.myvar);   
});

}

}