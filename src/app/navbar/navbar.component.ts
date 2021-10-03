import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showBar() {
    let burger = document.querySelector('#nav-icon3');
    let navigation = document.querySelector('.nav');

    burger?.classList.toggle('open'); //Rotacija

    navigation?.classList.toggle('show-nav'); //Prikaz
    navigation?.classList.remove('remove');
  }

  hideBar() {
    let navigation = document.querySelector('.nav');
    let burger = document.querySelector('#nav-icon3');
    navigation?.classList.remove('show-nav');
    navigation?.classList.add('remove');
    burger?.classList.remove('open');
  }
}
