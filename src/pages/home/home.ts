import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
language:String;
  constructor(public navCtrl: NavController,
              public ServiceProvider: ServiceProvider,

  ) {

  }

  findData(key:any){
    const data={
    keyword:key.target.value,
    lang:this.language
    }
    this.ServiceProvider.searchRepo(data).subscribe(res=>{
      console.log(res);
    });
  }

}
