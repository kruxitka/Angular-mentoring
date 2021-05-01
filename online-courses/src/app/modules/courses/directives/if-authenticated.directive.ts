import { AuthService } from './../../core/services/auth-service.service';
import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfAuthenticated]'
})
export class IfAuthenticatedDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService) { }

    ngOnInit(): void {
      this.createView();
    }

  private createView(): void {
    if (this.authService.isAuthenticated()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
