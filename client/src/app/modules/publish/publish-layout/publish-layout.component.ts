import { Component } from "@angular/core";
import { EndpointService } from "../../../core/http/endpoint.service";

@Component({
  selector: "v1-publish-layout",
  templateUrl: "./publish-layout.component.html",
  styleUrls: ["./publish-layout.component.scss"],
})
export class PublishLayoutComponent {
  constructor(private endpoint: EndpointService) {}

  addccount() {
    let account = "facebook account";
    let item = localStorage.setItem("account", account);
  }
  onClick() {
    this.endpoint
      .user()
      .getAll()
      .subscribe((data) => {
        console.log(data);
      });
  }
}
