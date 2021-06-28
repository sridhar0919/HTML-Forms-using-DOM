
document.querySelector('.btn').addEventListener('click', foo);
let i = 1;

function foo(e) {
  // Getting values
  let fname = String(document.querySelector('#first-name').value);
  let lname = String(document.querySelector('#last-name').value);
  let address = String(document.querySelector('#address').value);
  let pincode = String(document.querySelector('#pin-code').value);
  let gender = String(document.querySelector('#gender').value);
  let state = String(document.querySelector('#state').value);
  let country = String(document.querySelector('#country').value);

  // Getting checkbox values
  total = "";
  count = 0
  for(let i = 0; i < document.form1.scripts.length; i++){
    if(document.form1.scripts[i].checked){
      total += document.form1.scripts[i].value + '\n' ;
      count= count+1;
    }
  }

  // If user has selected below 2 give an alert else execute the remaining part.
  if(count < 2){
    alert("Please select atleast two foods");
    document.getElementById('form1').reset();
  }
  else {

      // Adding values to details array
    let details = [fname, lname, address, pincode, gender, total, state, country];
    let tbody = document.querySelector('tbody');
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.setAttribute("scope","row");
    th.textContent = i;
    tr.append(th);
    tbody.append(tr);
  
    // Looping through details array and adding values into table
    for(let j = 0; j < details.length; j++){
      let td = document.createElement("td");
      td.textContent = details[j];
      tr.append(td);
    }
    
    // Resetting form after submit
    document.getElementById('form1').reset();
    
    // Incrementing user count
    i +=1;

  }
  
  // Preventing default action to get clear output
  e.preventDefault();
}

