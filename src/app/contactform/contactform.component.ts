import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  constructor(){
    //this.checkIfChecked();
  }

  http = inject(HttpClient);

  imgSrcCheck: string = '../../assets/img/design-components/checkbox-unchecked.png';

  isChecked: boolean = false;

  mailTest = true;

  post = {
    endPoint: 'https://mail@mark-hegedus.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  contactData = {
    name: '',
    email: '',
    message: ''
  };

  checkIfChecked(){
    if (this.imgSrcCheck = '../../assets/img/design-components/checkbox-checked.png') {
      console.log('gecijó')
    }
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            //saját funkció
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}
