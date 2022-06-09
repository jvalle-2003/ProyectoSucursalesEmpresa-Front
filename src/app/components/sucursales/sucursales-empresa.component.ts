import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { sucursalModel } from 'src/app/models/sucursal.model';
import { ProductBranchModel } from 'src/app/models/productBranch.model';
import { ProductModel } from 'src/app/models/product.model';
import { ProductSucursalRestService } from 'src/app/services/productSucursalRest/product-sucursal-rest.service';
import { sucursalRestService } from 'src/app/services/sucursalRest/sucursal-rest.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sucursales-empresa',
  templateUrl: './sucursales-empresa.component.html',
  styleUrls: ['./sucursales-empresa.component.css']
})
export class SucursalesEmpresaComponent implements OnInit {
  sucursales:any;
  idEnterprise: any;
  sucursal: sucursalModel;
  productbranch: ProductBranchModel;
  productBranchGetId: any;
  product: ProductModel;
  productsBranch: any;
  sucursalGetId: any;
  token: any;
  role: any;
  idBranch: any; 
  BranchGetId: any;
  idProduct: any;
  sucursalUpdate:any;

  constructor(
    private sucursalRest: sucursalRestService,
    private productSucursalRest: ProductSucursalRestService, 
    private activatedRoute: ActivatedRoute
  ) {
    this.sucursal = new sucursalModel( '', '','')
    this.productbranch = new ProductBranchModel('', '', 0, ''),
      this.product = new ProductModel('', '', 0)
   }

  ngOnInit(): void {
    this.getSucursales();
  }

  getSucursales(){
    this.sucursalRest.getSucursales().subscribe({
      next: (res:any) =>this.sucursales = res.enterprisesBranch,
      error: (err) => console.log(err)
      
    })
  }

  getSucursal(id: string){
    this.sucursalRest.getSucursal(id).subscribe({
      next: (res:any)=>{
        this.sucursalGetId = res.enterpriseBranch
        console.log(this.sucursalGetId);
        
      },
      error: (err)=> alert(err.error.message)
    })
  }

  saveSucursal(addForm:any){
    this.sucursalRest.saveSucursal(this.sucursal).subscribe({
      next: (res:any)=> {
        Swal.fire({
          title: res.message,
          icon: 'success',
          position: 'center',
          showConfirmButton: false,
          timer: 2000
        });
        this.getSucursales();
        addForm.reset();
        
      },
      error: (err) => alert(err.error.message)
    })
  }

  updateSucursal(){
    this.sucursalGetId.enterprise = undefined;
    this.sucursalRest.updateSucursal(this.sucursalGetId._id, this.sucursalGetId).subscribe({
      next: (res:any) => {
        Swal.fire ({ icon: 'success', title: res.message,});
        this.getSucursales();
      },
      error: (err) => alert(err.error.message || err.error)
    })
  }

  deleteSucursal(id:string){
    this.sucursalRest.deleteSucursal(id).subscribe({
      next: (res:any) => {
        Swal.fire({
          title: res.message + ' ' + res.deleteEnterpriseBranch.name,
          icon: 'success',
          position: 'center',
          showConfirmButton: false,
          timer: 2000
        });
        this.getSucursales();     
      },
      error: (err) => Swal.fire({
        title: err.error.message,
        icon: 'error',
        position: 'center',
        timer: 2000
      })
    })
  }

  getProductsBranch(enterpriseBranchId: string){
    this.productSucursalRest.getProductsBranch(enterpriseBranchId).subscribe({
      next: (res:any) =>{ this.BranchGetId = enterpriseBranchId
        console.log(enterpriseBranchId);
        this.productsBranch = res.productsBranch
      },
       
      error: (err) => console.log(err) 
    })
  }

  getProductBranch(productBranchId: string) {
    this.productSucursalRest.getProductBranch( this.BranchGetId, productBranchId).subscribe({
      next: (res: any) => {
        this.productBranchGetId = res.productBranch;
        console.log(productBranchId);
        
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
        });
      },
    });
  }

  quantity: any;

  saleOfProduct(saleProductForm: any){
    let params = {
      quantity: this.quantity,
      enterpriseBranchId: this.BranchGetId,
      productBranchId: this.productBranchGetId._id
    }
    console.log(params);
    
    this.productSucursalRest.saleOfProduct(params).subscribe({
      next: (res:any) =>{
        Swal.fire({
          title: res.message,
          icon: 'success',
          position: 'center',
          showConfirmButton: false,
          timer: 2000
        });
        this.getSucursales();
        this.getProductsBranch(this.BranchGetId);
        saleProductForm.reset();
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
        });
      },
    });
  }
  
}


