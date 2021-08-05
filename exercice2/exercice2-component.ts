import { Exercice2Service } from "./exercice2-service"

@Component({
  selector: 'user',
  templateUrl: './exercice2-component.html',
  styleUrls: ['./exercice2-component.css'],
})
export class Exercice2Component{

    constructor(private service : Exercice2Service){}

  this.service.getData().subscribe((res)=>{
    console.log(res)
  });
    
}