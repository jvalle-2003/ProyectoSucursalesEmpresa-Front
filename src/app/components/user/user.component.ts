import { Component, OnInit } from '@angular/core';
import { UserRestService } from 'src/app/services/user/user-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userRest: UserRestService) {}

  userGetId: any;

  ngOnInit(): void {
    this.myEnterprise();
  }

  myEnterprise() {
    this.userRest.myEnterprise().subscribe({
      next: (res: any) => {
        this.userGetId = res.enterprise;
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
        });
      },
    });
  }

  updateEnterprise() {
    this.userGetId.password = undefined;
    this.userGetId.role = undefined;
    this.userRest.updateEnterprise(this.userGetId).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
        });
        this.myEnterprise();
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
        });
      },
    });
  }

  deleteEnterprise() {
    this.userRest.deleteEnterprise().subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
        });
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
        });
      },
    });
    localStorage.clear();
  }
}
