import { Injectable } from '@angular/core';
import {createClient, SupabaseClient} from '@supabase/supabase-js';
import {environment} from '../../environement/environment';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase=createClient(<string>environment.supabaseUrl,<string>environment.supabaseKey)
  }
  getClient(): SupabaseClient {
    return this.supabase;
  }
  async Login(email : string,password : string){
    const {data,error}=await this.supabase.auth.signInWithPassword({
      email,
      password
    })
    return {data,error}
  }
}
