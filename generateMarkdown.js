const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

module.exports = generateHTML = (data) => {
    // wrote in rage post ice cream
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    
    <body style="background-color: lavender;">
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="card bg-info mx-auto mb-3" style="width: 18rem">
                        <h5 class="card-header">${data.managerName}<br /><br />Manager</h5>
                        <ul class="list-group list-group-flush bg-light">
                            <li class="list-group-item">ID: ${data.managerId}</li>
                            <li class="list-group-item">Email Address:
                                <a href="mailto: ${data.managerEmail}">
                                    ${data.managerEmail}
                                </a>
                            </li>
                            <li class="list-group-item">Office Phone: ${data.managerPhone}</>
                        </ul>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card bg-info mx-auto mb-3" style="width: 18rem">
                        <h5 class="card-header">${data.engineerName}<br /><br />Engineer</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${data.engineerId}</li>
                            <li class="list-group-item">Email Address: ${data.engineerEmail}</li>
                            <li class="list-group-item">GitHub: 
                                <a href="http://www.github.com/${data.engineerGithub}">${data.engineerGithub}</a>                            
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card bg-info mx-auto mb-3" style="width: 18rem">
                        <h5 class="card-header">${data.internName}<br /><br />Intern</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${data.internId}</li>
                            <li class="list-group-item">Email Address:
                            <a href="mailto: ${data.internEmail}">
                                ${data.internEmail}
                            </a>
                        </li>
                            <li class="list-group-item">School: ${data.internSchool}</li>
                        </ul>
                    </div>
                </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    
    </body>
    
    </html>`;
};