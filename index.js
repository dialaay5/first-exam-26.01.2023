
const data = [{
    Id: 1,
    Name_of_the_store: 'Big electric',
    Address: 'Big Shopping Mall',
    City: 'Kiryat Shmona',
    Price: 3200,
    Link_of_the_store: new URL('https://big-electric.coi.co.il/search?q=tv'),
    Rating_of_the_plac: 3.5
},
{
    Id: 2,
    Name_of_the_store: 'Super electric',
    Address: 'Ashkelon',
    City: 'Ashkelon',
    Price: 3000,
    Link_of_the_store:  new URL('https://www.superelectric.co.il/product/samsung-75qn90b'),
    Rating_of_the_plac: 4
},
{
    Id: 3,
    Name_of_the_store: 'Samgal electric',
    Address: 'Guglielmo Marconi St 11, Haifa, 3295525',
    City: 'Haifa',
    Price: 3340,
    Link_of_the_store: new URL('https://www.samgalelite.co.il'),
    Rating_of_the_plac: 1.5
},
{
    Id: 4,
    Name_of_the_store: 'Shekem electric',
    Address: 'HaHistadrut Ave 248, Haifa',
    City: 'Haifa',
    Price: 3100,
    Link_of_the_store:  new URL('https://www.shekem-electric.co.il/catalog/product/view/id/101004/s/271445/category/219/'),
    Rating_of_the_plac: 5.5
}]

function tabelsRow() {
    for (let i = 0; i < data.length; i++) {
        $('#table').append(`<tr id="tr${i}"><td>${data[i].Id}</td>
                            <td><img src="${i}.jpg" alt="tv1" width="80"></td>
                                 <td>${data[i].Name_of_the_store}</td>
                                 <td>${data[i].Address}</td>
                                 <td>${data[i].City}</td>
                                 <td id="price${i}">${data[i].Price}</td>
                                 <td><a href="${data[i].Link_of_the_store}">Visit The Store Link!</a></td>
                                 <td id="rating${i}">${data[i].Rating_of_the_plac}</td>
                                 <td><button type="button" class="btn btn-outline-danger" id="${i}" onclick="deleteClick(event)">delete</button>
                                 <td> <button class="btn btn-outline-success" type="button" data-toggle="tooltip"
                                 data-placement="top" title="Edit" data-bs-toggle="modal" data-bs-target="#myModal${i}">buy</button>
                                 <div class="modal" id="myModal${i}">
                                 <div class="modal-dialog ">
                                     <div class="modal-content">
                                         <div class="modal-header divmodalbody">
                                             <h2 class="modal-title">Edit Your Order</h2>
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


        let rating = $(`#rating${i}`).text()
        console.log(rating);
        if (rating >= 4) {
            $(`#tr${i}`).toggleClass("trgreen")
        }
        else if (rating < 2) {
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
    console.log(avg);
    return (avg);
}

function best_option() {
    const arr1 = []
    const arr2 = []
    for (let i = 0; i < data.length; i++) {
        let rating = $(`#rating${i}`).text()
        let price = $(`#price${i}`).text()
        arr1.push(rating)
        arr2.push(price)
    }
    console.log(arr1, arr2);
    arr3 = arr1.sort()
    console.log(arr3);  
}

function deleteClick(event){
    i = event.target.id
    $(`#tr${i}`).remove()
}


tabelsRow()
average_price()
best_option()






