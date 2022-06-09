import { Component, OnInit } from '@angular/core';
import { EnterpriseModel } from 'src/app/models/enterprise.model';
import { EnterpriseAdminRestService } from 'src/app/services/EnterpriseAdminRest/enterprise-admin-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit
{
  //Variables de TypeScript//
  enterprises: any;
  enterprise: EnterpriseModel;
  searchEnterprise: any;
  enterpriseUpdate: any; 
  
  constructor
  (
    private enterpriseRest: EnterpriseAdminRestService,
  )
  {
    this.enterprise = new EnterpriseModel('', '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void 
  {
    this.getEnterprises();

  }

  //METÓDOS DEL CRUD DE COMPANIES//
  getEnterprises() 
  {
    this.enterpriseRest.getEnterprises().subscribe({
      next: (res: any) => { this.enterprises = res.enterprisesExist,
        console.log(this.enterprises);
        
      },
        error: (err) => console.log(err)
    })
  }

  getEnterprise(id: string) {
    this.enterpriseRest.getEnterprise(id).subscribe({
      next: (res: any) => {
        this.enterpriseUpdate = res.enterprise
      },
      error: (err) => {alert(err.error.message)}
    })
  }

  saveEnterprise(addEnterpriseForm: any) {
    this.enterpriseRest.saveEnterprise(this.enterprise).subscribe
      ({
        next: (res: any) => {
          Swal.fire
            ({
              icon: 'success',
              title: res.message,
              confirmButtonColor: '#28B463'
            });
          this.getEnterprises();
          addEnterpriseForm.reset();
        },
        error: (err: any) => {
          Swal.fire({
            icon: 'error',
            title: err.error.message || err.error,
            confirmButtonColor: '#E74C3C'
          });
          addEnterpriseForm.reset();
        },
      })
  }

  deleteEnterprise(id: string) {
        this.enterpriseRest.deleteEnterprise(id).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: res.message + ' ' + res.enterpriseDeleted.name,
              icon: 'success',
              position: 'center',
              showConfirmButton: false,
              timer: 2000
            });
            this.getEnterprises();
          },
          error: (err) => Swal.fire({
            title: err.error.message,
            icon: 'error',
            position: 'center',
            timer: 3000
          })
        })
      }

  updateEnterprise()
  {
    this.enterpriseUpdate.password = undefined;
    this.enterpriseRest.updateEnterprise(this.enterpriseUpdate._id, this.enterpriseUpdate).subscribe({

      next: (res:any)=> 
      {
        Swal.fire({
          icon:'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getEnterprises();
      },
      error: (err)=>
      {
        console.log(this.enterpriseUpdate)
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
        this.getEnterprises()
      },
    })
  }

}
