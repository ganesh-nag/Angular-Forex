import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse  } from '@angular/common/http';
import {Conversion} from './conversion.model';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
  export class ConversionService{

    constructor(private http:HttpClient) {}
    //private userUrl = 'http://localhost:8765/Currency-ConversionService/currency-converter/from/AUD/to/INR/quantity/1000';
    private userUrl = '/convert';
    

    public convert(_conversion:Conversion){
      alert('in getconversion service' + this.userUrl);

        let params = new HttpParams();
        params = params.set('from', _conversion.from);
        params = params.set('to', _conversion.to);
        params = params.set('quantity', _conversion.quantity);
        alert(params.get('from'));
        alert(this.userUrl +"/Currency-ConversionService/currency-converter" 
        + "/from/" +_conversion.from 
        + "/to/" +_conversion.to
        + "/quantity/" +_conversion.quantity);
        
        return this.http.get<Conversion>(this.userUrl +"/Currency-ConversionService/currency-converter" 
                                                      + "/from/" +_conversion.from 
                                                      + "/to/" +_conversion.to
                                                      + "/quantity/" +_conversion.quantity);
        
    }

  }