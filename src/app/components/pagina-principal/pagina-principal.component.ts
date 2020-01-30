import { Component, OnInit } from '@angular/core';
import { PaginaPrincipalService } from '../../services/pagina-principal/pagina-principal.service';
import { Usuario } from '../../dto/usuario';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {
  userList: Usuario[];

  constructor(private service: PaginaPrincipalService) { }

  ngOnInit() {
  }

  listarUsuarios() {
    console.log('Listando usuarios ..');
    this.service.listarUsuarios().subscribe(
      data => {
        console.log('data: ', data);
        this.userList = data;

        console.log(this.userList);
      }
      , error => console.log('error: ', error)
      , () => console.log('llamada terminada')
    );
  }

}
