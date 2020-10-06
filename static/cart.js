// navlinks to activate some cart sections
let storecart = document.querySelector('.storeactivator');
let cartformactivator = document.querySelector('.cartformactivator');
let cartIcon = document.querySelector('#opencart')
// cart form content
let chkform = document.querySelector('.chkform')
let cartbdy = document.querySelector('.cart-body');
let store = document.querySelector('.cart-store');
let postcont = document.querySelector('.post-cont');

// add and decrease cart btn
let plusbtn = document.querySelectorAll('.plus-btn')
let minusbtn = document.querySelectorAll('.minus-btn')
let cartval = document.querySelectorAll('.btnval');
let carttotal = document.querySelector('.cart-total');

// increase prise quantity and total
plusbtn.forEach((btn, i) =>{
    btn.addEventListener('click', function(){
        let x = cartval[i];
        if (x.innerHTML > 0) {
           x.innerHTML++;
        }if(x.innerHTML > 20){
            x.innerHTML = 20;
            alert("quantity of goods can only be 20")
        }if (x.innerHTML > 0) {
            let b = carttotal.innerHTML * x.innerHTML
            carttotal.innerHTML = b;
        }
    
    })
})

minusbtn.forEach((btn, i) =>{
    btn.addEventListener('click', function(){
        let x = cartval[i];
        if (x.innerHTML < 100) {
            x.innerHTML--;
        }if (carttotal.innerHTML > 10) {
            let b = carttotal.innerHTML - 100
            carttotal.innerHTML = b;
        }if(x.innerHTML < 0){
            x.innerHTML = 0
        alert("quantity of goods cannot  be < 0")
        }
    })
})

// grb the cart item
let cartprice = document.querySelectorAll('#priceval');
let arr = []
cartprice.forEach((elm, i) =>{
    let obj = {};
    let dname = elm.parentElement.firstElementChild.innerHTML;
    let price = elm.innerHTML
    let img = elm.parentElement.previousElementSibling.getAttribute('src');
    // inserting items to objects
    obj.name = dname;
    obj.image = img;
    obj.price = price;

    // addigng click function to addtocartbtn
    elm.nextElementSibling.addEventListener('click', function(e){
        let objid = e.target.getAttribute('data-id');
        if (arr.indexOf(obj) == -1) {
            arr.push(obj)
            addItems(obj, objid)
        }
        event.preventDefault()
    });
})
// append rows to chkformtables when clicked on addtocart
function addItems(obj, objid){
    obj.id = objid;
    let tabledata = document.querySelector('.chkformtable');
    let rows = document.createElement('tr')
    let closebtn = document.createElement('span')
    rows.setAttribute('class', 'rows chkformrows')
    closebtn.setAttribute("class", "close")
    closebtn.innerHTML = "x"
    // innertext
    rows.innerHTML = 
    `
    <td><img src =${obj.image} width="50px"></td>
    <td>${obj.name}</td>
    <td>${obj.price}</td>
    <td><span class='close btn btn-danger' style="font-size:15px;">${closebtn.innerHTML}</span></td>
    `
    tabledata.appendChild(rows)
    delbutton()
    // increase countitem when clicked
    let countitem = document.querySelector('.countitem');
    let count = 0;
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] > 0 ) {
           count--;
           countitem.innerHTML = 0;
       } else {
           count++;
           countitem.innerHTML = count;
       }
       
   }
    
}


// hide and showd the checkout page

$(function(){
    $('#opencart').click(function(){
        $('.chkform').slideToggle()
    })
})

// remove individual rows when added
function delbutton(){
    let closebtn = document.querySelectorAll('.close');
    closebtn.forEach(el => {
        el.addEventListener('click', function(e){
            let row = e.target.parentNode.parentNode;
            let tbl = document.querySelector('.chkformtable')
            tbl.removeChild(row)
        })
   })
}

// display image when clicked on the add image in postform
function disImg(){
    let inpfile = document.querySelector('.inp-file');
    let img = document.querySelector('.imgoup');

    inpfile.addEventListener('change', function(){
    let url = URL.createObjectURL(inpfile.files[0])
    img.src = url;
    })
}disImg()


// hide and show cart sections when clicked on a the navbar links

$(function(){
    $('.storeactivator').click(function(){
        $('.cart-body').css('display', 'none')
        $('.cart-store').css('display', 'block')
        $('.product-table').css('display', 'block')

    })
    $('.home').click(function(){
        $('.product-table').css('display', 'none')
        $('.cart-body').css('display', 'block')
        $('.cart-store').css('display', 'none')
    })
    $('.addpost').click(function(){
        $('.post-cont').css('visibility', 'visible');
        $('.product-table').css('display', 'none')
        $('.cart-body').css('display', 'none')
        $('.cart-store').css('display', 'none')
    })
})



