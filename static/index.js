fetch('http://localhost:5000/todos')
    .then(function(response) {
        return response.json();
        
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    })
