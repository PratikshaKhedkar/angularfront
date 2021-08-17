import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
 id:number;
  employee: Employee;
  showMsg: boolean=false;;
  
  constructor( private employeeService: EmployeeService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }
  onSubmit() {
    // this.employeeService.updateEmployee(this.id, this.employee)
    //   .subscribe(data => console.log(data), error => console.log(error));
    // this.employee = new Employee();
    // this.router.navigate(['/employees']);
  //this.employeeService.updateEmployee(this.employee)
 // .subscribe(data => console.log(data), error => console.log(error));
 this.employeeService.updateEmployee(this.employee)
      .subscribe( data => {
        this.router.navigate(['list-employee']);
        this.showMsg= true;
      });
}

 
}
