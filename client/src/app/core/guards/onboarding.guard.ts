import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { OnboardingService } from "src/app/shared/services/onboarding.service";

@Injectable({
  providedIn: "root",
})
export class OnboardingGuard implements CanActivate {
  constructor(
    private _onBoardingService: OnboardingService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const toWelcomePage = this._onBoardingService.checkWelcomePageCondition();

    if (!toWelcomePage) {
      this.router.navigate(["pages/publish/welcome"]);
    } else {
      this.router.navigate(["pages/publish/content"]);
    }
    return true;
  }
}
