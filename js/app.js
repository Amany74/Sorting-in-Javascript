
// list of student names , ids and gpa 
let students = {
'name': ['noah','liam' , 'levi' ,'cole','owen','ezra','gael','axel','jose','beau'],
'id':[2,3,4,8,5,10,1,9,7,6],
'gpa' : [3.8,2.5,3.2,2.7,4,3.4,3.5,2.8,2.9,3],
'dep' : ['Media analytics' , 'healthcare analytics','Cyber Security','Ai analytics' , 'Healthcare analytics','Media analytics' , 'healthcare analytics','Cyber Security','Media analytics' , 'Business analytics']
}

function sort_by_name(){
    let temp  = [...students.name] ;
    temp.sort((a, b) => a.localeCompare(b));
  createTableWithSortedData(temp,'name');
}

function sort_by_id(){
    let temp  = [...students.id] ;
    temp.sort((a, b) => a - b);
    createTableWithSortedData(temp,'id');
}

function sort_by_gpa(){
    let temp  = [...students.gpa] ;
    temp.sort((a, b) => a - b);
    createTableWithSortedData(temp,'gpa');
}

function sort_by_dep(){
    let temp  = [...students.dep] ;
    temp.sort((a, b) => a.localeCompare(b));
    createTableWithSortedData(temp,'dep');
}
sort_by_name();
sort_by_id();
sort_by_gpa();
sort_by_dep();

// optimization  
function createTableWithSortedData(temp,x){
openbtns(x);
// create table with tr and td are the values for each student in each tr
let t = document.querySelector(`.${x}_table`);
let header= document.createElement("h2");
header.innerHTML=`${x}`;
t.appendChild(header);
let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");
let name ,id , gpa ;
for (let i = 0; i < 10 ; i++) {
    // chech which attr is used for sorting
  switch(x){
  case 'name' :
        name = temp[i];
        id = students.id[students.name.indexOf(name)];
        gpa = students.gpa[students.name.indexOf(name)];
        dep = students.dep[students.name.indexOf(name)];
        break ;
    case 'id' :
        id = temp[i] ;
        name =students.name[students.id.indexOf(id)];
        gpa = students.gpa[students.id.indexOf(id)];
        dep = students.dep[students.id.indexOf(id)];
        break;
    case 'gpa' :
        gpa =temp[i];
        id =  students.id[students.gpa.indexOf(gpa)];
        name =students.name[students.gpa.indexOf(gpa)];
        dep =students.dep[students.gpa.indexOf(gpa)];
        break;
    case 'dep' :
        dep =temp[i];
        id =  students.id[students.dep.indexOf(dep)];
        gpa =  students.gpa[students.dep.indexOf(dep)];
        name =students.name[students.dep.indexOf(dep)];
        break;
  }
  let row = document.createElement("tr");
  [name,id,gpa,dep].forEach(element => {
    let cell = document.createElement("td");
    let cellText = document.createTextNode(element);
    cell.appendChild(cellText);
    row.appendChild(cell);
  });
//  appending row of each student to original table
  tblBody.appendChild(row);
}
tbl.appendChild(tblBody);
t.appendChild(tbl);
}

// styling Tabs  show and hide sections
function openbtns(name) {
    let i;
    let x = document.getElementsByClassName("btns");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.querySelector('#'+name).style.display = "block"; 
    
  }

