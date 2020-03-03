import { Component , OnInit} from '@angular/core';
import { YoutubeService } from '../service/youtube.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  videos: any[];
  singlevideo:any;
  constructor(private youTubeService : YoutubeService,private spinner: NgxSpinnerService){}


 ngOnInit() 
{

this.spinner.show()
setTimeout(()=>
{
    this.spinner.hide()

},3000)

this.videos = [];


this.youTubeService.getVideosForChanel('UC2tEwcYNEjGzn_3ZoVxfTAg', 15)
.pipe()
.subscribe(lista => {
for (let element of lista["items"]) {
  this.videos.push(element)
}
  this.singlevideo=this.videos[0]['id'].videoId;
   console.log(this.singlevideo);
});


}

}
