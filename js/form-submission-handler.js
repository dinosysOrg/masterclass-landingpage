
function validEmail(email) { // see:
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
// get all data in form and return object

function getFormData(form) {
  var elements = document.getElementById(form).elements; // all form elements
  var fields = Object.keys(elements).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;
    // special case for Edge's html collection
    }else if(elements[k].length > 0){
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k){
    data[k] = elements[k].value;
    var str = ""; // declare empty string outside of loop to allow
                  // it to be appended to for each item in the loop
    if(elements[k].type === "checkbox"){ // special case for Edge's html collection
      str = str + elements[k].checked + ", "; // take the string and append 
                                              // the current checked value to 
                                              // the end of it, along with 
                                              // a comma and a space
      data[k] = str.slice(0, -2); // remove the last comma and space 
                                  // from the  string to make the output 
                                  // prettier in the spreadsheet
    }else if(elements[k].length){
      for(var i = 0; i < elements[k].length; i++){
        if(elements[k].item(i).checked){
          str = str + elements[k].item(i).value + ", "; // same as above
          data[k] = str.slice(0, -2);
        }
      }
    }
  });
  console.log(data);
  return data;
}

function handleFormSubmit(event) {  // handles form submit withtout any jquery
  var form = 'gform';
  event.preventDefault();           // we are submitting via xhr below
  var data = getFormData(form);         // get the values submitted in the form
  console.log(data);
  if( !validEmail(data.email) ) {   // if email is not valid show error
    document.getElementById('email-invalid').style.display = 'block';
    return false;
  } else {
    var url = event.target.action;  //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        console.log( xhr.status, xhr.statusText )
        console.log(xhr.responseText);
        document.getElementById('gform').style.display = 'none'; // hide form
        document.getElementById('thankyou_message').style.display = 'block';
        return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
  }

}

function handleFormSubmitModal(event) {  // handles form submit withtout any jquery
  var form = 'gformModal';
  console.log(form);
  event.preventDefault();           // we are submitting via xhr below
  var dataModal = getFormData(form);         // get the values submitted in the form
  console.log(dataModal);

  if( !validEmail(dataModal.email) ) {   // if email is not valid show error
    document.getElementById('email-invalid').style.display = 'block';
    return false;
  } else {
    var url = event.target.action;  //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        console.log( xhr.status, xhr.statusText )
        console.log(xhr.responseText);
        document.getElementById('gformModal').style.display = 'none'; // hide form
        document.getElementById('thankyou_message_modal').style.display = 'block';
        return;
    };
    // url encode form data for sending as post data
    var encodedModal = Object.keys(dataModal).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(dataModal[k])
    }).join('&')
    xhr.send(encodedModal);
  }
}

function loaded() {
  console.log('contact form submission handler loaded successfully');
  // bind to the submit event of our form
  var form = document.getElementById('gform');
  var form1 = document.getElementById('gformModal');
  form.addEventListener("submit", handleFormSubmit, false);
  form1.addEventListener("submit", handleFormSubmitModal, false);
};
document.addEventListener('DOMContentLoaded', loaded, false);
