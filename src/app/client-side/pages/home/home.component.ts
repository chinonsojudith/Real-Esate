import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  submitted = false;
  bookingForm!: FormGroup;
  

  carouselArray : any[] = []
  left : number = 0;
  middle : number = 1;
  right: number = 2
  constructor(private fb: FormBuilder) { }
  animate_me: boolean = false;

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      
    });

    



    this.carouselArray = [
      {
        title : 'Conference Room', 
        name :'Alex Alone',
        position :'CEO/Founder',
        image: 'assets/img/test.png',
        content : "Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order"
      },
      {
        title : 'Swimming Pool',
        name :'Robert Alone',
        position :'CEO/Founder',
        image: 'assets/img/test.png',
        content : "Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed party we years to order"
      },
      {
        image: 'assets/img/test.png',
        name :'Suley Maito',
        position :'CEO/Founder',
        title : 'Sport Club', 
        content : "Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain party we years to order"
      },
      {
        title : 'Ose Big Head', 
        name :'Samson Olori',
        position :'CEO/Founder',
        image: 'assets/img/test.png',
        content : "Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order"
      },

      {
        title : 'Judith Elumelu', 
        name :'Victor Nutri',
        position :'CEO/Founder',
        image: 'assets/img/test.png',
        content : "Beginning fourth dominion creeping god was. Beginning, which fly yieldi dry beast moved blessed party we years to order"
      },
      {
        title : 'Victor Samson', 
        name :'Mum Helen',
        position :'CEO/Founder',
        image: 'assets/img/test.png',
        content : "Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain party we years to order"
      },
    ]

    setInterval(()=> {
        this.left += 1;
        this.middle += 1;
        this.right += 1
        if(this.right === this.carouselArray.length-1){
          this.left = 0;
          this.middle = 1;
          this.right = 2
        }
        this.animate_me = true;

        setTimeout(() => {
          this.animate_me = false;
        }, 1000)
        
    }, 3000)
  }

  onSubmit(){
    this.submitted =true;
    
    
    this.bookingForm.reset()
    
  }

 
}
