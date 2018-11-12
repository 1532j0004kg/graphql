  const r = new Request("https://live-interview.herokuapp.com/v1alpha1/graphql");
  const o = {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query{
   company{
    name
    location
   	job
  	stipend
	  email
    desc
}
}`
})
  };
  fetch(r, o).then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
  for(var i = 0 ; i < myJson.data.company.length ; i++)
  {
    $(".container-fluid").prepend('<div class="col-xs-12">'+
                           '<div class="card">'+
                                '<div class="card-header text-center" data-background-color="purple">'+
                                    '<h4 class="title">'+myJson.data.company[i].name+'</h3>'+
                                    '<p class="category">Are you looking for </p>'+
                                '</div>'+
                                '<div class="card-content">'+
                                    '<div class="table-responsive table-upgrade">'+
                                        '<table class="table">'+
                                            '<thead>'+
												'<th class="text-center">'+myJson.data.company[i].job+'</th>'+
												'<th class="text-center"> Rs. '+myJson.data.company[i].stipend+'</th>'+
												'<th class="text-center"> '+myJson.data.company[i].email+'</th>'+
												'<th class="text-center">'+myJson.data.company[i].location+'</th>'+
                                            '</thead></table><br>'+
									 '<button onclick=apply("'+myJson.data.company[i].name+'") id="click" style="float : right" data-background-color="purple"> A p p l y </button>'+
                                    '</div></div></div></div>');
  }
  });
   
 function apply(name){
   console.log(name);
    $(".container-fluid").html('<div class="modal-dialog modal-lg">'+
      '<div class="modal-content">'+
        '<div class="modal-header">'+                             
          '<a href="/upgrade.html"><button type="button" style="float : right">close</button></a>'+
          '<h4 class="modal-title">'+name+'</h4>'+
          '<p>Getting decription from table is on process</p>'+
        '</div>'+
        '<div class="modal-body">'+
          '<input value="Resume URL">'+
          '<button onclick=mailing("'+name+'")>Submit</button>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>');
  }

function mailing(name){
  alert("Your valuable submittion successfully reached "+name +". Work is on progress!");
  window.location = "https://liveportal-1.glitch.me/examples/upgrade.html"; 
}