import { Component, OnInit } from '@angular/core';

enum Color {Red, Black =0, Green, Blue}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {




  title = 'mock';

  showReply: boolean = false

  agreed: boolean = false

  test = {
    name: 'HELLO',
    age: 20
  }



  ngOnInit() {
    let black: Color = Color.Black
    let red: Color = Color.Red
    console.log(red, black)
  }

  imageURL = 'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'


}
