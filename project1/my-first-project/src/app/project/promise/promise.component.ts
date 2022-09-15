import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  promiseVal: any;

  constructor() { }

  dellAvailable(){
 return true;
  }
  
  hpAvailable(){
   
return false;
  
  }
  dell={
brand:"dell",
size:"2tb",
color:"black"
  }
  hp={
    brand:"hp",
    size:"2tb",
    color:"platenium"
      }
      Notavailbale={
        brand:"apple",
        size:"2tb",
        color:"grey"
          }
  ngOnInit(): void {
    // let buyLaptop= new Promise(function(resolve,reject){
    //   resolve("promise resolve")
    // })
    let buyLaptop= new Promise((resolve,reject)=>{
      if( this.dellAvailable()){
        resolve(this.dell)
      }
      else if(this.hpAvailable()){
resolve(this.hp)
      }else{
        reject("laptop is not availablke in the store")
      }
      // resolve("promise resolve")
      // reject("promise not resolve")
    })
    buyLaptop.then(res=>{
      this.promiseVal=res
      console.log("then code =<>",res)
    }).catch(res=>{
      this.promiseVal=res
      console.log("catch code",res)
    })
  }
// myFunction(){
//   console.log("return promise");
  
// }
}
