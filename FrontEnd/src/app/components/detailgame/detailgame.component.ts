import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { GamesService } from '../../services/games.service'

@Component({
  selector: 'app-detailgame',
  templateUrl: './detailgame.component.html',
  styleUrls: ['./detailgame.component.css']
})
export class DetailgameComponent implements OnInit {

  game:any;
  id:any;
  constructor( private activateRouter: ActivatedRoute, private gamesService : GamesService , private _route:Router ) {

    this.activateRouter.params.subscribe( data => {       
      this.id =data['id'];
      this.gamesService.getGamev2(this.id).subscribe(resp =>{
        let data:any = resp;
        this.game = data.mensaje;
      });      
    });
   }

  ngOnInit(): void {
  }

  eliminar(id:any){
    let obj = {
      id: this.id
     
      }
    console.log(obj)
    this.gamesService.deleteGame(obj).subscribe(resp =>{
      console.log(resp)
      this._route.navigate(['/games']);
    })  
  }

  

}
