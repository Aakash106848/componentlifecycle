import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnDestroy, OnInit,AfterViewChecked,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked {
  title = 'componentlifecycle';
  firstName:string='';
  lastName:string='';
  ngOnInit(): void {//phase 1 - initialization phase
    //write the code to connect to backend and fetch data
      console.log('Component initialized! at '+new Date());
  }
  ngOnDestroy(): void {
    //write the code to connect to backend and save data
      console.log('Component destroyed! at'+new Date());
      localStorage.clear();

  }
  ngDoCheck(): void {//phase 2 - validation phase ,executed whenever the view changes
      console.log('Overall Verification/ Validation Started');
  }
  ngAfterContentChecked(): void {//step 4  exected after view changes everytime
      console.log('Content verified / Checked!');
  }
  ngAfterContentInit(): void {//phase 3 - After initialization phase
      console.log('Content initialization COmpleted! ');
  }
  ngAfterViewChecked(): void { //step 6 executed everytime the view changes
      console.log('View Check Completed!');
  }
  ngAfterViewInit(): void {//step 5  executed once after initialization of the component occurs
      console.log('View initialization Completed!');
  }
}
