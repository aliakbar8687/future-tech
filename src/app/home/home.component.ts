import { Component } from '@angular/core';
import { category } from '../student';
import { Router } from '@angular/router';
import { Category, Search } from '../models/Category';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements Search {
  title = 'angular-tutorial';
  // public name="Mohd Ali Akbar"
  // public job="Software Developer"
  // public image="/assets/ali.jpg"
  // public value=""
  // onClick(){
  //   alert("Thanks for pressing");
  //  counter:number=0
  // increment()
  // {
  //    this.counter++;
  // }
  // decrement()
  // {
  //    this.counter--;
  // }
  // updateCounter(action: number) {
  //  action === +1  ? this.counter++ : this.counter--
  // }
  // reset()
  // {
  //    this.counter=0;
  // }
  //  counter:number=10

  //    public name="Mohd Ali Akbar"
  //    public job="Software Developer"
  //    public image="/assets/ali.jpg"
  //   userName:String=""
  // email:String=""
  // password:String=""
  // onClick()
  // {

  //   if(this.userName === "" || this.email === "" || this.password === "")
  //   {
  //     alert("Please Enter All The Fields")
  //   }
  //   else
  //   {
  //     alert("Login Successfully")
  //   }
  // }

  //  obj=[{
  //   name:"ali",
  //   email:"ali@gmail.com"
  // },
  // {
  //   name:"akbar",
  //   email:"akbar@gmail.com"
  // },
  // {
  //   name:"adil",
  //   email:"adil@gmail.com"
  // },
  // {
  //   name:"ruhan",
  //   email:"ruhan@gmail.com"
  // },
  // {
  //   name:"azib",
  //   email:"azib@gmail.com"
  // }
  // ];
  // public user:any=null;
  // onClick(item:any){
  //   this.user=item;

  // }

  // }

  // student = Students;

  // color = '';

  // public user: any = null;
  // onClick(item: any) {
  //   this.user = item;
  // }
  // public addedMarks: any = null;
  // public iteration: any = null;
  // public averageCalculate: any = null;

  // onAdd(i: number) {
  //   this.student[i].isSelected = true;
  //   this.addedMarks += this.student[i].totalMarks;
  //   this.iteration++;
  // }

  // average() {
  //   this.averageCalculate = this.addedMarks / this.iteration;
  // }

  // reset() {
  //   this.averageCalculate = null;
  //   this.addedMarks = null;
  //   this.user = null;
  //   this.iteration = null;
  //   for (let i = 0; i < this.student.length; i++) {
  //     this.student[i].isSelected = false;
  //   }
  // }

  // changeTextColor(color: string) {
  //   this.color = color;
  // }

  // test() {
  //   console.log('gfgd');
    
  // }
  categories: Array<Category> = category;

  searchQuery = '';
  filteredCategory: Array<Category> = category;
  isLoggedIn: boolean;
  constructor(
    private router: Router,
    private _authService: AuthService
  ) {
    this._authService.isLoggedIn$.subscribe(
      res => {
        console.log(res);
        this.isLoggedIn = res;
      },
      err => {

      }
    );
  }
  
  performSearch() {
    if (this.searchQuery.length > 0 && this.searchQuery.length < 3) return;

    this.searchQuery = this.searchQuery.toLowerCase();
    this.filteredCategory = this.categories.filter(item => {
      return (
        item.name.toLowerCase().includes(this.searchQuery) ||
        item.description.toLowerCase().includes(this.searchQuery)
      );
    });
  }

  test(data: any) {
    // let result = this.performSearch();
  }

  view() {
    window.location.href = 'https://www.google.com/webhp'
  }

  redirect(id: number): void {
    const queryParams = {
      detail: true
    }
    this.router.navigate(['user-detail', id], {queryParams});
  }
}
