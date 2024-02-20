import { Component } from '@angular/core';

@Component({
  selector: 'register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name: string='';
  email: string='';
  emailChangeHandler($event:any) {
    this.email = $event.target.value;
  }
  nameChangeHandler($event:any) {
    this.name = $event.target.value;
  }
  register($event:any) {
    $event.preventDefault();
    alert(`Hello ${this.name}, your email is ${this.email}`);

    let params = {
      company_name: "Promact Infotech Pvt. Ltd.",
      name: this.name,
      serder_name: "Priyanshu Koley",
      sender_phno: "9831730866",
      sender_position: "Intern",
      to_email: this.email,
    }
    emailjs.send("service_y1rs3kg", "template_vyp1ycf",params).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }
  }
}
