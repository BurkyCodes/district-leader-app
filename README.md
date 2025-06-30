# District Leader App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run test` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## 1.Component Inputs and Outputs

### Sidebar Component

- Inputs: None
- Outputs:none

### KPI Component

- Inputs: title:string, value:number/percentage, color:string
- Outputs:none

### Table Component

- Inputs: schools:Schools[] - List of students
- Outputs: schools:Schools[]

### Filter Component

- Inputs: principalName:signal,tier:signal,schoolName:signal
- Outputs: filteredSchools():FilteredSchools

### SchoolPage Component

- Inputs: activatedRoute:schoolId
- Outputs: school:School

### About Component, Contact Component, NotFoundComponent

- Inputs: None
- Outputs:none

## 2.Data Service Methods(MockDataService)

### getSchools():Observable<School[]>

Returns an observable of schools from mock data

### getSchoolById(id:number):Observable<School>

Returns an observable of school from mock data

### getImpactStats():Observable<totalSchools:number,totalStudents:number,highImpact:percentage,mediumImpact:percentage,lowImpact:percentage>

Aggregates and returns
- Total number of schools
- Total number of students
- Oescentage of high,medium and low risk students

## 3.Complex Business Logic(MockDataService)

getImpactStats()
Computes percentages of students by risk level across all schools

## 4.Mock Data Setup(MockDataService)

Overwrite the Json file mock-data.json in src/app/services with your own
Use mockData to mock API MockDataService
Ensure your mock dat conforms to the School interaface
interface School {
  schoolId: number;
  schoolName: string;
  principalName: string;
  totalStudents: number;
  highRisk: number;
  mediumRisk: number;
  lowRisk: number;
  students: Student[];
}

interface Student {
  fullName: string;
  gender: string;
  age: number;
  riskLevel: 'High' | 'Medium' | 'Low';
}

### Sample Data json
{
  "schoolId": 1,
  "schoolName": "Eagle Heights School",
  "principalName": "Brian Mutiso",
  "totalStudents": 220,
  "highRisk": 11,
  "mediumRisk": 34,
  "lowRisk": 175,
  "students": [
      {
        "id": 71,
        "fullName": "Victor Omondi",
        "gender": "Male",
        "age": 14,
        "riskLevel": "Medium",
        "schoolName": "New Dawn High School"
      },
  ]
}

## 4.Assumptions and Limitations(MockDataService)

### Assumptions

- Data remains static(mocked, no backend or database)
- Each school ha a unique identifier
- Risk levels are categorized as High, Medium and Low

### Limitations
- No authentication or authorization
- No pagination or perfomance or optimization for large data sets
