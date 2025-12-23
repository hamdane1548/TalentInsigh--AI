import {Component, OnInit} from '@angular/core';
import {Supabase} from '../../service/supabase';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   email : string="";
   password :string="";
   message : string = "";
   constructor(private subapse : Supabase) {
   }
   async Login_user(){
      alert(this.email)
      alert(this.password)
      const {data,error}=await  this.subapse.Login(this.email,this.password);
      if(error){
        this.message=error.message;
        console.log(this.message)
      }else{
        this.message="connexion ressuit meci";
        console.log(this.message)
      }
   }
}
