import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  constructor() {
    this.updateImageSrc();
  }

  http = inject(HttpClient);

  imgSrcCheck: string = '../../assets/img/design-components/checkbox-unchecked.png';
  imgSrcUnchecked: string = '../../assets/img/design-components/checkbox-unchecked.png';
  imgSrcChecked: string = '../../assets/img/design-components/checkbox-checked.png';

  isClicked: boolean = false;
  isHoveringOver: boolean = false;
  public submitted:boolean = false;

  toggleCheck() {
    this.isClicked = !this.isClicked;
    this.updateImageSrc();
  }

  updateImageSrc() {
    if (this.isClicked) {
      this.imgSrcCheck = this.imgSrcChecked;
    } else {
      this.imgSrcCheck = this.imgSrcUnchecked;
    }
  }

  resetCheckbox(){
    this.imgSrcCheck = '../../assets/img/design-components/checkbox-unchecked.png';
  }


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

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.succesfulMessage();
            this.resetCheckbox();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

succesfulMessage(){
  this.submitted = true;
  setTimeout(() => {
    this.submitted = false;
  }, 5000);
}
}
