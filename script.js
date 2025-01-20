// $(document).ready(()=>{
// var Persons;
// fetch("./assets/MOCK_DATA.json")
// .then(res =>res.json())
// .then(data =>{
//     Persons = data;
//     $(".bodyy").html( data.map(( person, index) => 
//         {
//         return `
//         <div class="person">
//             <img class="avatar" src="${person.profile}" alt="${person.first_name} ${person.last_name}"></img>
//             <h1>${person.first_name} ${person.last_name}</h1>
//             <p>${person.email}</p>
//             <p>${person.gender}</p>
//         </div>`;



//     }).join(''));


//     $('#gender').change(()=>{
//         var selected = $('#gender').val();
//         // console.log(selected);

//         var male = Persons.filter(Persons => Persons.gender === selected);
//         Persons = male;

//         $(".bodyy").html( Persons.map((male, index) => 
//         {         return `
//             <div class="person">
//                 <img class="avatar" src="${male.profile}" alt="${male.first_name} ${male.last_name}"></img>
//                 <h1>${male.first_name} ${male.last_name}</h1>
//                 <p>${male.email}</p>
//                 <p>${male.gender}</p>
//             </div>`;
//         }).join(''));


//         var female = Persons.filter(Persons => Persons.gender === selected);
//         Persons = female;

//         $(".bodyy").html( Persons.map((female, index) => 
//             {
//             return `
//             <div class="person">
//                 <img class="avatar" src="${female.profile}" alt="${female.first_name} ${female.last_name}"></img>
//                 <h1>${female.first_name} ${female.last_name}</h1>
//                 <p>${female.email}</p>
//                 <p>${female.gender}</p>
//             </div>`;
//         }).join(''));


//     });





// });

// });






$(document).ready(function () {
    $.getJSON("assets/MOCK_DATA.json", function (data) {
        var allData = data;
        var maleData = allData.filter(function (item) {
            return item.gender.toLowerCase() == "male";
        });
        var femaleData = allData.filter(function (item) {
            return item.gender.toLowerCase() == "female";
        });

        function displayData(dataa) {
            // alert(dataa)
            var div = $(".bodyy");
            div.html("");
            $.each(dataa, function (index, value) {
                var content = "";
                content +=
                    `
         <div class="person">
             <img class="avatar" src="${value.profile}" alt="${value.first_name} ${value.last_name}"></img>
             <h1>${value.first_name} ${value.last_name}</h1>
             <p>${value.email}</p>
             <p>${value.gender}</p>
         </div>`;
                div.append(content);

            });
        }
        displayData(allData);
        $('#gender').change(function () {
            if ($('#gender').val() == "All") {
                displayData(allData);
            }
            else if ($('#gender').val() == "Male") {
                displayData(maleData);
            }
            else {
                displayData(femaleData);
            }
        });

    });
});