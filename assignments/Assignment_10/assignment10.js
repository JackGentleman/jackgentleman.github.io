// Question 1
let employees =[
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    }
];
console.log(employees);

// Question 2
let company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};
console.log(company);

// Question 3
employees.push({
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
});
console.log(employees);

// Question 4
let totalSalary = 0;
for (let i = 0; i < employees.length; i++)
{
    totalSalary += employees[i].salary;
}
console.log(totalSalary);

// Question 5
function giveRaises() 
{
    for (let i = 0; i < employees.length; i++)
    {
        if (employees[i].raiseEligible == true)
        {
            employees[i].salary += employees[i].salary * 0.1;
            employees[i].raiseEligible = false;
        }
    }
}
giveRaises();
console.log(employees);

// Question 6
company.workingFromHome = ["Anna", "Sam"];
for (let i = 0; i < employees.length; i++)
{
    if (company.workingFromHome.includes(employees[i].firstName))
    {
        employees[i].wfh = true;
    }
    else
    {
        employees[i].wfh = false;
    }
}
console.log(employees);