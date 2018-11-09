$(".submit").click(function(){
    
   var name = $(".name").val();
   var  location = $(".location").val();
   var email = $(".email").val();
   var job = $(".job").val();
   var stipend = $(".stipend").val();
  if( (name.length > 0) && (location.length > 0) && (email.length > 0) && (job.length > 0) && (stipend.length > 0))  
  {
    //console.log(mine);
    const r = new Request("https://live-interview.herokuapp.com/v1alpha1/graphql");
  const o = {
    method: 'POST',
    body: JSON.stringify({
      query: 
        `mutation insert_company($name: String!, $location: String!, $email: String!, $job: String!, $stipend: String!){
  insert_company(
    objects: [
      {
    name: $name,
		location: $location,
		email : $email,
		job: $job,
		stipend: $stipend
      }
    ]
  ) {
    returning {
      name    
    }
  }
}`,
variables: {name: name, location: location, email : email, job: job, stipend: stipend}
    })
  };
  fetch(r, o).then(function(response) {
    return response.json();
  }).then(function(myJson) {
    alert(myJson.data.insert_company.returning[0].name + " is registered successfully");
  });
  }
   });