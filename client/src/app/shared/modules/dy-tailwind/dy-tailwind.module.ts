import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { OverlayModule } from "@angular/cdk/overlay";
import { TailwindButtonDirective } from "./directives/dy-tw-button.directive";

const components = [];
const directives = [TailwindButtonDirective];

@NgModule({
  declarations: [components, directives],
  imports: [CommonModule],
  exports: [components, directives],
})
export class ScTailwindModule {}
