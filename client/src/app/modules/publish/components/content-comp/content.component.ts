import { EndpointService } from "./../../../../core/http/endpoint.service";
import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "dy-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent {
  addDataForm: FormGroup;
  data: any[] = [];

  constructor(private fb: FormBuilder, private endpoint: EndpointService) {}
}
