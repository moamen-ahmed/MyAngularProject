import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  myForm=new FormGroup({
    name:new  FormControl(''),
    age:new FormControl(''),
    address:new FormControl(''),
    job:new FormControl('')
  });

  constructor(private service:MyserviceService) { }

  ngOnInit() {

    this.service.sayHello("Client");
  }

  onSubmit(){
    console.log(this.myForm.value);
  }

}
