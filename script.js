$(document).ready(()=>{
var Persons;
fetch("./assets/MOCK_DATA.json")
.then(res =>res.json())
.then(data =>{
    Persons = data;
    $(".bodyy").html( data.map(( person, index) => 
        {
        return `
        <div class="person">
            <img class="avatar" src="${person.profile}" alt="${person.first_name} ${person.last_name}"></img>
            <h1>${person.first_name} ${person.last_name}</h1>
            <p>${person.email}</p>
            <p>${person.gender}</p>
        </div>`;

        
    
    }).join(''));

    // $('#female').click(()=>{
    //     var female = Persons.filter(Persons => Persons.gender === "Female");
    //     Persons = female;

    //     $(".bodyy").html( Persons.map((female, index) => 
    //         {
    //         return `
    //         <div class="person">
    //             <img class="avatar" src="${female.profile}" alt="${female.first_name} ${female.last_name}"></img>
    //             <h1>${female.first_name} ${female.last_name}</h1>
    //             <p>${female.email}</p>
    //             <p>${female.gender}</p>
    //         </div>`;
    //     }).join(''));
    // });

    // $('#male').click(()=>{
    //     var male = Persons.filter(Persons => Persons.gender === "Male");
    //     Persons = male;

    //     $(".bodyy").html( Persons.map((male, index) => 
    //         {
    //         return `
    //         <div class="person">
    //             <img class="avatar" src="${male.profile}" alt="${male.first_name} ${male.last_name}"></img>
    //             <h1>${male.first_name} ${male.last_name}</h1>
    //             <p>${male.email}</p>
    //             <p>${male.gender}</p>
    //         </div>`;
    //     }).join(''));
    // });



    
    $('#gender').change(()=>{
        var selected = $('#gender').val();
        // console.log(selected);

        var male = Persons.filter(Persons => Persons.gender === selected);
        Persons = male;

        $(".bodyy").html( Persons.map((male, index) => 
        {         return `
            <div class="person">
                <img class="avatar" src="${male.profile}" alt="${male.first_name} ${male.last_name}"></img>
                <h1>${male.first_name} ${male.last_name}</h1>
                <p>${male.email}</p>
                <p>${male.gender}</p>
            </div>`;
        }).join(''));


        var female = Persons.filter(Persons => Persons.gender === selected);
        Persons = female;

        $(".bodyy").html( Persons.map((female, index) => 
            {
            return `
            <div class="person">
                <img class="avatar" src="${female.profile}" alt="${female.first_name} ${female.last_name}"></img>
                <h1>${female.first_name} ${female.last_name}</h1>
                <p>${female.email}</p>
                <p>${female.gender}</p>
            </div>`;
        }).join(''));


    });
   




});

// function fetchData(){
//     var female;
//     fetch("./assets/MOCK_DATA.json")
//     .then(res =>res.json())
//     .then(dataa =>{
//         female = dataa;
//         // dataa.map(female);
//         alert();
//     });
// }

// $(document).ready(()=>{
//     const Xhttp = new XMLHttpRequest();
//         Xhttp.onload = function(){
//             var jsonData = JSON.parse(Xhttp.responseText)
//             person = jsonData;
//             var male = jsonData.filter(jsonData => jsonData.gender === "Male");
//             var female = jsonData.filter(jsonData => jsonData.gender === "Female");
            
//             $('#male').click(()=>{
//                 console.log(male);
//             });

//             $('#female').click(()=>{
//                 console.log(female);
//             });

//             $('.person').html(person.map((jsonData, index)=>{
//                 `
//                     <img class="avatar" src="${jsonData.profile}" alt="${jsonData.first_name} ${jsonData.last_name}"></img>
//                     <h1>${jsonData.first_name} ${jsonData.last_name}</h1>
//                     <p>${jsonData.email}</p>
//                     <p>${jsonData.gender}</p>
//                 `})
//             );

//         }
//         Xhttp.open("GET","/assets/MOCK_DATA.json");
//         Xhttp.send();
// });

// function fetchData(){
//         const Xhttp = new XMLHttpRequest();
//         Xhttp.onload = function(){
//             var jsonData = JSON.parse(Xhttp.responseText)
//             var female = jsonData.filter(jsonData => jsonData.gender === "Male");
//             // console.log(jsonData[0].gender);



//             // for(i=0;i<=100;i++){
//             //     if(jsonData[i].gender == "Female"){
//             //         female =  jsonData[i];
//             //     }
//             // }



//             console.log(female);
//         }
//         Xhttp.open("GET","/assets/MOCK_DATA.json");
//         Xhttp.send();
        

//     }

});
