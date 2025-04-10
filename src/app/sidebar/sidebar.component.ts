import { Component, OnInit , AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{
  userName: string = 'Saran kelha';
  constructor() {}
  ngOnInit(): void{}
  ngAfterViewInit(): void{
    const sidebar=document.getElementById('offcanvasSidebar');
    const toggleBtn=document.getElementById('toggleSidebarBtn');
    if(sidebar && toggleBtn){
      sidebar.addEventListener('shown.bs.offcanvas',() =>{
        toggleBtn?.classList.add('move-near-sidebar');
      });
      sidebar.addEventListener('hidden.bs.offcanvas',()=>{
        toggleBtn?.classList.remove('move-near-sidebar');
      });
    }
  }


}
