let productsArray = new Array();
let newProduct = document.getElementById('productName');

function displayProducts() {
    let html = '<table>';
    for (let i = 0; i < productsArray.length; i++) {
        html += '<tr>' +
            '<td id="tdId">' + (i + 1) + '</td>' +
            '<td id="tdName">' + '<input id="' + i + '" type="text" value="' + productsArray[i] + '" disabled>' + '</td>' +
            '<td id="tdId">' + '<input class="btn" type="button" id="editBtn' + '[' + i + ']' + '" onclick="editProductName(' + i + ')" value="Edit">' + '</td>' +
            '<td id="tdId">' + '<button class="btn" onclick="deleteProduct(' + i + ')">Delete</button>' + '</td>' +
            '</tr>';
    }
    html += '</table>';
    document.getElementById('displayProducts').innerHTML = html;
}

function addNewProduct() {
    if (newProduct.value) {
        productsArray.push(newProduct.value);
        document.getElementById('notification').innerHTML = newProduct.value + ' was added';
        newProduct.value = '';
        newProduct.focus();
    }
    displayProducts();
}

function editProductName(index) {
    let Edition = document.getElementById('editBtn[' + index + ']');
    let name = document.getElementById(index);
    Edition.value = 'OK';
    name.disabled = false;
    name.value = '';
    name.focus();
    Edition.onclick = function confirmEdit() {
        let newName = document.getElementById(index).value;
        name.value = newName;
        name.disabled = true;
        document.getElementById('editBtn[' + index + ']').value = 'Edit';
    }
}

function deleteProduct(index) {
    productsArray.splice(index, 1);
    displayProducts();
}