function loadLayout(){
    $("#header").load("layout/header.html", "data", function (response, status, request) {
        this; // dom element
        
    });
    $("#sidebar").load("layout/sidebar.html", "data", function (response, status, request) {
        this; // dom element
        
    });
    
}
loadLayout();

function showProduct(link){
    $("#product").load(`layout/${link}.html`, "data", function (response, status, request) {
        this; // dom element
        
    });
}


// let arr_product = [];


// function addProduct(){
//     let product_name = prompt('pro-name')
//     let product_current_price = prompt('pro-current-price')
//     let product_old_price = prompt('pro-old-price')
//     let product_image = prompt('pro-image')
//     let product_category = prompt('pro-category')

//     let item ={
//         Id: product_id,
//         Name: product_name,
//         Current_price: product_current_price,
//         Old_price: product_old_price,
//         Image: product_image,
//         Category: product_category
//     }
//     arr_product.push(item)
// }


// let ten = prompt('ten');

// document.write(ten)

const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  
  ourStorage.cabinet["top drawer"].folder2;
  ourStorage.desk.drawer;
