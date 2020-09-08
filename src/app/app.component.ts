import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DynamicComponentsDemo';

  constructor(private viewcontref: ViewContainerRef, private compfactresol: ComponentFactoryResolver) {}

  loadComponent() {
    import('./demo1/demo1.component').then(({ Demo1Component }) => {
      this.viewcontref.clear();
      const cmp = this.compfactresol.resolveComponentFactory(Demo1Component);
      const cmpref = this.viewcontref.createComponent(cmp);
    });
  }
}
