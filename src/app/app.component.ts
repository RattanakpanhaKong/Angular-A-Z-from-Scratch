import { AfterViewInit, Component, ViewChild, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'AngIntro';
  parentMessage: string = 'Message changed';
  message?: string;
  fromChildViaEventEmit?: string;

  @ViewChild(PostComponent) childComp: any;

  constructor(){
    console.log(this.childComp)
  }


  ngAfterViewInit(): void {
    console.log(this.childComp)
    this.message = this.childComp.childMessage
  }
  receivedMessage($event: any){
    this.fromChildViaEventEmit = $event;
  }
}