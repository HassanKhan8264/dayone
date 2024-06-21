import { Component, OnInit } from "@angular/core";
import { EndpointService } from "../../../core/http/endpoint.service";

@Component({
  selector: "v1-testing-header",
  templateUrl: "./testing-header.component.html",
  styleUrls: ["./testing-header.component.scss"],
})
export class TestingHeaderComponent implements OnInit {
  constructor(private endpoint: EndpointService) {}

  ngOnInit(): void {
    this.openDialog();
  }
  openDialog(): void {
    this.endpoint
      .user()
      .getAll()
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
