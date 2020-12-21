import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavCollapse:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.router.navigateByUrl('/');
  }

}