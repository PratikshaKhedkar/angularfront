import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Observable<any>;
  constructor(private employeeService:EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
     setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);

  }
  deleteEmployee(id: number) {
   this.employeeService.deleteEmployee(id)
   .subscribe(data =>{
    this.employees = data.ticker;
});
  }
  updateEmployee(employee: Employee){
    this.router.navigate(['update', employee]);
  }

  
}
