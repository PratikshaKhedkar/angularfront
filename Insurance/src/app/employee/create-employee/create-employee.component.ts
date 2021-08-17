import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false;
  form: FormGroup;
  loading: boolean=false;
;
  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {


    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      policyType: ['', Validators.required],
      policyNo: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      policy_Status: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; }
  onSubmit() {
    // this.submitted = true;
    // this.employeeService.createEmployee(this.employee)
    // .subscribe(data => console.log(data), error => console.log(error));

  //   this.submitted = true;
  //   this.employeeService.createEmployee(this.employee)
  //     .subscribe(data => {
  //       console.log(data)
  //       alert("Added Sucessfully")
  //     },
  //       error => { console.log(error) });

  // }


  this.submitted = true;

  // reset alerts on submit
  
  // stop here if form is invalid
  if (this.form.invalid) {
      return;
  }

  this.loading = true;
  this.employeeService.createEmployee(this.form.value)
      
      .subscribe({
          next: () => {
              this.employeeService.success('Registration successful', { keepAfterRouteChange: true });
              this.router.navigate(['../login'], { relativeTo: this.route });
          },
          error: error => {
              this.employeeService.error(error);
              this.loading = false;
          }
      });
      

}

}
