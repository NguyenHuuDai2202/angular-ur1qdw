import { Component, OnInit } from "@angular/core";
import { StorageMap } from "@ngx-pwa/local-storage";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {
  constructor(private storage: StorageMap) {}

  ngOnInit() {
    let user: any = { firstName: "Henri", lastName: "Bergson" };

    this.storage.set("user", user).subscribe(() => {});
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
