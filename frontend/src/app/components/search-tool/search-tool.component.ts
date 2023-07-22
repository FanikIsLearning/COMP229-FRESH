import { Component, OnInit } from '@angular/core';

import { StorageService } from 'src/app/_services/storage.service';

import { Product } from 'src/app/models/product.model';

import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-search-tool',
  templateUrl: './search-tool.component.html',
  styleUrls: ['./search-tool.component.css']
})

export class SearchToolComponent implements OnInit {
  products?: Product[];

  currentProduct: Product = {};

  currentIndex = -1;

  name = '';

  private roles: string[] = [];

  isLoggedIn = false;

  showAdminBoard = false;

  showModeratorBoard = false;

  username?: string;

  constructor(private productService: ProductService, private storageService: StorageService,) { }

  ngOnInit(): void {

    this.retrieveProducts();

    this.isLoggedIn = this.storageService.isLoggedIn();



    if (this.isLoggedIn) {

      const user = this.storageService.getUser();

      this.roles = user.roles;



      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');



      //this.username = user.username;

    }

  }

  retrieveProducts(): void {

    this.productService.getAll()

      .subscribe({

        next: (data) => {

          this.products = data;

          console.log(data);

        },

        error: (e) => console.error(e)

      });

  }

  searchName(): void {

    this.currentProduct = {};

    this.currentIndex = -1;



    this.productService.findByName(this.name)

      .subscribe({

        next: (data: Product[] | undefined) => {

          this.products = data;

          console.log(data);

        },

        error: (e: any) => console.error(e)

      });

  }

}
