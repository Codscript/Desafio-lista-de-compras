import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  product: Product = {
    name: '',
    price: null
  }

  ngOnInit(): void {
    
  }

  createPoduct(): void {
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showOnMensage('Salvo com sucesso!!!')
      this.router.navigate(['/products'])
    })

    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
  
}
