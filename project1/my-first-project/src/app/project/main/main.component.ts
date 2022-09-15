import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userlist:any=[];
  myData:any;
  nameSearch:any=''
  enterYourName:string="enter user name";
  search:any;
  rowData:any=[];
  value:any;
  name: any;
  constructor() { }

  ngOnInit(): void {
  }
  
  addUser(user:any){
    if(user.value.length>0){
      this.userlist.push(user.value);
      user.value="";
    }
    
console.log(user)
  }
  Delete(deleteme:any,){
    this.userlist.splice(deleteme,1);
  }
 
data=[{
  sno:1,
  name:'rahul',
  age:23

},
{ sno:2, name:"raj",age:29

},
{ sno:3,name:"hisekh",age:20

},
{ sno:4,name:"hit",age:22

}]


}
    

  

  
  


