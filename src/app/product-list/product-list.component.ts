import { Component, OnInit } from "@angular/core";

import { products } from "../products";
import { StorageMap } from "@ngx-pwa/local-storage";


@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(private storage: StorageMap) {

  }
  products = products;

  ngOnInit() {
    this.storage.get('user').subscribe((user) => {
      console.log(user);
    });
  }

  share() {
    window.alert("The product has been shared!");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
