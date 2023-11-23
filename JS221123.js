const arr = [];
for(let i=1; i<=10; i++)
{   
    arr.push(i);
}
console.log(arr);

function dispOdd(nArr)
{
    for(let i=0; i < nArr.length; i += 2)
    {
        console.log(nArr[i]);
    }
}
// dispOdd(arr)

function dispFOdd(nArr)
{
    for(let i=0; i < nArr.length; i++)
    {
        if(nArr[i]%2 !== 0)
        {
            return nArr[i];
        }
    }
}
console.log(dispFOdd(arr))

function dispFEven(nArr)
{
    for(let i=0; i < nArr.length; i++)
    {
        if(nArr[i]%2 === 0)
        {
            return nArr[i];
        }
    }
}
// console.log(dispFEven(arr))

function dispFHalf(nArr)
{
    for(let i=nArr.length/2; i < nArr.length; i++)
    {
        console.log(nArr[i])
    }
}

dispFHalf(arr)

function createStudent(fName, lName)
{
    let stdObj ={};
    stdObj.firstName = fName;
    stdObj.lastName = lName;
    return stdObj;
}
console.log(createStudent("Vivek", "Sreekumar"))

let students = [];
function arrayOfStudents()
{

    for(let i=0; i<3; i++)
        {
            let fname = prompt("Enter the first name" + i+1);
            let lname = prompt("Enter the last name" + i+1);
            let student = createStudent(fname,lname);
            students.push(student)
        }
    return students;
}

arrayOfStudents()
console.log(students);
