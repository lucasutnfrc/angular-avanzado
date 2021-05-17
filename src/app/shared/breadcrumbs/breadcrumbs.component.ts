import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  titulo:string;
  tituloSubs$: Subscription;

  constructor( private router: Router ) { 
    this.tituloSubs$ = this.getArgumentosRuta()
      .subscribe(({titulo}) => {
        this.titulo = titulo;
        document.title = `AdminPro - ${titulo}`
      });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  ngOnInit(): void {
  }

  getArgumentosRuta(){

    return this.router.events
    .pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd ) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd ) => evento.snapshot.data )
    );


  }

}
