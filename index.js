
const data = [{
    Id: 1,
    Name_of_the_store: 'Big electric',
    Address: 'Big Shopping Mall',
    City: 'Kiryat Shmona',
    Price: 3200,
    Link_of_the_store: new URL('https://big-electric.coi.co.il/search?q=tv'),
    Rating_of_the_place: 3.5
},
{
    Id: 2,
    Name_of_the_store: 'Super electric',
    Address: 'Ashkelon',
    City: 'Ashkelon',
    Price: 3000,
    Link_of_the_store: new URL('https://www.superelectric.co.il/product/samsung-75qn90b'),
    Rating_of_the_place: 4
},
{
    Id: 3,
    Name_of_the_store: 'Samgal electric',
    Address: 'Guglielmo Marconi St 11, Haifa, 3295525',
    City: 'Haifa',
    Price: 3340,
    Link_of_the_store: new URL('https://www.samgalelite.co.il'),
    Rating_of_the_place: 1.5
},
{
    Id: 4,
    Name_of_the_store: 'Shekem electric',
    Address: 'HaHistadrut Ave 248, Haifa',
    City: 'Haifa',
    Price: 3100,
    Link_of_the_store: new URL('https://www.shekem-electric.co.il/catalog/product/view/id/101004/s/271445/category/219/'),
    Rating_of_the_place: 5.5
}]

const low_rating_threshold = 2
const high_rating_threshold = 4

function tabelsRow() {
    for (let i = 0; i < data.length; i++) {
        $('#table').append(`<tr id="tr${i}"><td>${data[i].Id}</td>
                            <td><img src="${i}.jpg" alt="tv1" width="80"></td>
                                 <td>${data[i].Name_of_the_store}</td>
                                 <td>${data[i].Address}</td>
                                 <td>${data[i].City}</td>
                                 <td id="price${i}">${data[i].Price}</td>
                                 <td><a target="_blank" href="${data[i].Link_of_the_store}">Visit The Store Link!</a></td>
                                 <td id="rating${i}">${data[i].Rating_of_the_place}</td>
                                 <td><button type="button" class="btn btn-outline-danger" id="${i}" onclick="deleteClick(event)">delete</button>
                                 <td> <button class="btn btn-outline-success" type="button" data-toggle="tooltip"
                                 data-placement="top" title="Edit" data-bs-toggle="modal" data-bs-target="#myModal${i}">buy</button>
                                 <div class="modal" id="myModal${i}">
                                 <div class="modal-dialog ">
                                     <div class="modal-content">
                                         <div class="modal-header divmodalbody">
                                             <h2 class="modal-title">Your shopping cart</h2>
                                         </div>
                                         <!-- Modal body -->
                                         <div class="modal-body divmodalbody" >
                                                 <form>
                                                     <div class="form-container form-outline">
                                                     <div>
                                                     <label for="typeText">Name Of The Store : ${data[i].Name_of_the_store}</label>
                                                     </div>
                                                     <div>
                                                     <label for="typeText">Price : ${data[i].Price} </label>
                                                     </div>
                                                         <div>
                                                         <label for="typeText">Card Name</label>
                                                         <input type="text" id="typeText"
                                                             class="form-control form-control-lg" minlength="19"
                                                             maxlength="19" />
                                                         </div><br>
                                                         <div>
                                                         <label for="typeText">Card Number</label>
                                                         <input type="text" id="typeText"
                                                         class="form-control form-control-lg" minlength="19" maxlength="19" />
                                                         </div><br>
                                                         <div class="field-container">
                                                         <label for="expirationdate">Expiration (mm/yy)</label>
                                                         <input id="expirationdate" type="text"
                                                         class="form-control form-control-lg"/>
                                                         </div>
                                                         <div>
                                                         <label for="typeText">Cvv</label>
                                                         <input type="password" id="typeText"
                                                         class="form-control form-control-lg" minlength="3" maxlength="3" />
                                                        </div>
                                                     </div>
                                                 </form>
                                             </div>
                                         <!-- Modal footer -->
                                         <div class="modal-footer">
                                             <button type="button" class="btn btn-outline-success"
                                                 data-bs-dismiss="modal" onclick="edit_button()">Buy</button>
                                             <button type="button" class="btn btn-outline-danger"
                                                 data-bs-dismiss="modal">Cancel</button>
                                         </div>
                                     </div>
                                 </div>
                             </div></td></tr>`
        )


        let rating_of_tv = $(`#rating${i}`).text()
        console.log(rating_of_tv);
        if (rating_of_tv >= high_rating_threshold) {
            $(`#tr${i}`).toggleClass("trgreen")
        }
        else if (rating_of_tv < low_rating_threshold) {
            $(`#tr${i}`).toggleClass("trred")
        }

    }
}

function average_price() {
    let sum = 0
    for (let i = 0; i < data.length; i++) {
        let price = $(`#price${i}`).text()
        sum += parseFloat(price)
    }
    avg = sum / data.length
    Swal.fire('The average price of all the TVs is :' + avg)
    return (avg);
}

function best_option() {
    const array_of_best_option = []
    const array_of_lowest_price = []
    for (let i = 0; i < data.length; i++) {
        let rating = $(`#rating${i}`).text()
        let price = $(`#price${i}`).text()
        array_of_best_option.push(rating)
        array_of_lowest_price.push(price)
    }
    array_of_best_option.sort();
    if (array_of_best_option[array_of_best_option.length - 1] != array_of_best_option[array_of_best_option.length - 2]) {
        let best_rating = array_of_best_option[array_of_best_option.length - 1]
        let result = data.find(item => item.Rating_of_the_place == best_rating);
        Swal.fire(`<form>
        <h2>The best TV is :</h2>
        <label for="typeText">Name Of The Store : ${result.Name_of_the_store}</label></br>
        <label for="typeText">City : ${result.City} </label></br>
        <label for="typeText">Address : ${result.Address} </label></br>
        <label for="typeText">Price : ${result.Price} </label></br>
        <label for="typeText">Rating of the place : ${result.Rating_of_the_place} </label>`)
        return result;
    }
}

function deleteClick(event) {
    i = event.target.id
    $(`#tr${i}`).remove()
}


tabelsRow()
