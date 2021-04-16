import { Component, OnInit } from '@angular/core';
import { File } from 'src/app/interfaces/file';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  file : any;

  constructor() { }

  ngOnInit(): void {

  }

  onChange($event : any): void {
    this.file = $event.target.files[0];

    let fileReader = new FileReader();
    fileReader.onload = ($event) => {
      console.log(fileReader.result);
      if (fileReader.result != null) {
        let temp : string = fileReader.result.toString();
        let obj : File = JSON.parse(temp);
        console.log(obj.Projects);
      }
      
      

    }
    fileReader.readAsText(this.file);
  }

}
