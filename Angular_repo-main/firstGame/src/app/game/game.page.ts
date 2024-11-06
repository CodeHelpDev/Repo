import { Component, OnInit } from '@angular/core';;


@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  squares: any = [];
  xIsNext = true;
  winner = '';
  isdraw = '';
  freshPage = true;
  counter = 0;
  dis:any;

  constructor() { }

  ngOnInit() {
  }
  reloadGame(){
    console.log('reload')
    this.newGame();

  }
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.isdraw = '';
    this.counter = 0;
    this.freshPage = false;
  }
  get Player() {
    return this.xIsNext ? 'X' : '0';
  }
  makeMove(id: number) {
    if (!this.squares[id]) {
      this.squares.splice(id, 1, this.Player);
      this.xIsNext = !this.xIsNext;
      this.counter++;
    }
    this.winner = this.calculateWinner();
    console.log('this.winner', this.winner);
    if (this.counter === 9 && this.winner===undefined) {
      this.isdraw = 'yes';
    }

  }
  calculateWinner() {

    for (var i = 0; i < this.squares.length; i++) {
      console.log(this.squares[i], 'index', i);

      if (this.squares[0] && this.squares[0] == this.squares[1] && this.squares[0] == this.squares[2]) {
        console.log('1');
        return this.squares[0];
      }
      else if (this.squares[3] && this.squares[3] == this.squares[4] && this.squares[3] == this.squares[5]) {
        console.log('2');
        return this.squares[3];
      }
      else if (this.squares[6] && this.squares[6] == this.squares[7] && this.squares[6] == this.squares[8]) {
        console.log('3');
        return this.squares[6];
      }
      else if (this.squares[0] && this.squares[0] == this.squares[3] && this.squares[0] == this.squares[6]) {
        console.log('4');
        return this.squares[0];
      }
      else if (this.squares[1] && this.squares[1] == this.squares[4] && this.squares[7] === this.squares[1]) {
        console.log('5');
        return this.squares[1];
      } 
      else if (this.squares[2] && this.squares[2] == this.squares[5] && this.squares[8] === this.squares[2]) {
        console.log('6');
        return this.squares[2];
      } 
      else if (this.squares[0] && this.squares[0] == this.squares[4] && this.squares[8] === this.squares[0]) {
        console.log('7');
        return this.squares[0];
      } 
      else if (this.squares[2] && this.squares[2] == this.squares[4] && this.squares[6] === this.squares[2]) {
        console.log('8');
        return this.squares[2];
      }
    }
  }
}
