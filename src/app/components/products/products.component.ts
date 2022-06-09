import { Component, OnInit } from '@angular/core';
import { ProductRestService } from 'src/app/services/productRest/product-rest.service';
import { sucursalRestService } from 'src/app/services/sucursalRest/sucursal-rest.service';
import { ProductSucursalRestService } from 'src/app/services/productSucursalRest/product-sucursal-rest.service';
import { ProductModel } from 'src/app/models/product.model';
import { sucursalModel } from 'src/app/models/sucursal.model';
import { ProductBranchModel } from 'src/app/models/productBranch.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  product: ProductModel;
  sucursal: sucursalModel;
  productBranch: ProductBranchModel
  sucursales: any;
  productId:any;
  search:any;
  sucursalGetId:any;
  idBranch: any;
  idProduct: any; 

  constructor(
    private productRest: ProductRestService,
    private productSucursalRest: ProductSucursalRestService,
    private sucursalRest: sucursalRestService
  ) {
    this.product = new ProductModel('','',0,),
    this.sucursal = new sucursalModel('', '', ''),
    this.productBranch = new ProductBranchModel('', '', 0, '')
   }

  ngOnInit(): void {// Ciclo de vida del componente | 1ro en ejecutarse
    this.getProducts();
    this.getSucursales();

  }

  getProducts(){
    this.productRest.getProducts().subscribe({
      next: (res:any)=> this.products = res.products,
      error: (err)=> console.log(err)
    })
  }


  addProduct(addProductForm:any){
    this.productRest.addProduct(this.product).subscribe({
      next: (res:any)=> {
        Swal.fire({
          title: res.message,
          icon: 'success',
          position: 'center',
          showConfirmButton: false,
          timer: 2000
        });
        this.getProducts();
        // solo si es para un solo input -> this.product.name = '';
        addProductForm.reset();
      },
      error: (err)=> alert(err.error.message || err.error)
    })
  }

  getProduct(id: string){
    this.productRest.getProduct(id).subscribe({
      next: (res:any)=>{
        this.productId = res.checkProduct
        console.log(this.productId);
        
      },
      error: (err)=> alert(err.error.message)
    })
  }

  updateProduct(){
    this.productRest.updateProduct( this.productId._id, this.productId).subscribe({
      next: (res:any)=> {
        Swal.fire ({ icon: 'success', title: res.message,});
        console.log(this.productId);
        this.getProducts();
      },
      error: (err)=> alert(err.error.message || err.error)
    })
  }

  deleteProduct(id:string){
    this.productRest.deleteProduct(id).subscribe({
      next: (res:any)=> {
        Swal.fire({
          title: res.message + ' ' + res.productDeleted.name,
          icon: 'success',
          position: 'center',
          showConfirmButton: false,
          timer: 2000
        });
        this.getProducts();
      },
      error: (err)=> Swal.fire({
        title: err.error.message,
        icon: 'error',
        position: 'center',
        timer: 3000
      })
    })
  }

  getProductsByStockAsc(){
    this.productRest.getProductsByStockAsc().subscribe({
      next: (res:any)=>{  this.products = res.products, console.log(this.products)},
      error: (err)=> console.log(err)
    })
  }

  getProductsByStockDesc(){
    this.productRest.getProductsByStockDesc().subscribe({
      next: (res:any)=>{  this.products = res.products, console.log(this.products)},
      error: (err)=> console.log(err)
    })
  }

  getProductsByName(){
    this.productRest.getProductsByName().subscribe({
      next: (res:any)=>{  this.products = res.products, console.log(this.products)},
      error: (err)=> console.log(err)
    })
  }

  getProductsByProvider (){
    this.productRest.getProductsByProvider().subscribe({
      next: (res:any)=>{  this.products = res.products, console.log(this.products)},
      error: (err)=> console.log(err)
    })
  }

  getSucursales() {
    this.sucursalRest.getSucursales().subscribe({
      next: (res: any) => this.sucursales = res.enterprisesBranch,
      error: (err) => console.log(err)

    })
  }

  getSucursal(id: string) {
    this.sucursalRest.getSucursal(id).subscribe({
      next: (res: any) => {
        this.sucursalGetId = res.enterpriseBranch
        console.log(this.sucursalGetId);

      },
      error: (err) => alert(err.error.message)
    })
  }

  addProductBranch(addProductBranchForm: any){
    this.productSucursalRest.addProductBranch(this.productBranch).subscribe({
      next: (res: any)=>{
        console.log(res);
        alert(res.message);
        this.getSucursales();
        this.getProducts();
        addProductBranchForm.reset();
      },
      error: (err)=> alert(err)
    })
  }

}
