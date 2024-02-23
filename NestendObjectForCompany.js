//Write down a nested object to store data of company employees
const companyEmployees = {
    company: "Tech Solutions",
    employees: [
        {
            employeId: 1,
            employeName: "Ram",
            employeRole: "Testing",
            employeSalary: 25000
        },
        {
            employeId: 2,
            employeName: "Sham",
            employeRole: "Frontend-Developer",
            employeSalary: 28000
        },
        {
            employeId: 3,
            employeName:"Rohan",
            employeRole: "Backend Developer",
            employeSalary: 40000
        }
    ]
};


console.log(companyEmployees.company); 
console.log(companyEmployees.employees[0].employeName);
console.log(companyEmployees.employees[1].employeRole);
console.log(companyEmployees.employees[2].employeSalary); 