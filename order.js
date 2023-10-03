function calculatePrice(){
    var size = document.querySelector('input[name="size"]:checked').value;
    var drink = document.getElementById("drink").value;
    let price = 0;

    if(drink === "Bubble Milktea"){
        if(size === "small"){
            price += 20;
        }else if(size === "medium"){
            price += 25;
        }else if(size === "large"){
            price += 30;
        }
    }else if(drink === "Iced Latte"){
        if(size === "small"){
            price += 20;
        }else if(size === "medium"){
            price += 25;
        }else if(size === "large"){
            price += 30;
        }
    }else if(drink === "Tea"){
        if(size === "small"){
            price += 20;
        }else if(size === "medium"){
            price += 25;
        }else if(size === "large"){
            price += 30;
        }
    }else if(drink ==="Please Select"){
        alert("Please select a drink.");
        location.reload();
    }

    document.getElementById("price").textContent=price;

}

function validateForm(){
    var name = document.getElementById("name").value.trim();
    var drink = document.getElementById("drink").value;
    var size = document.querySelector('input[name="size"]:checked');
    var ice = document.querySelector('input[name="ice"]:checked');
    var sweetness = document.querySelector('input[name="sweetness"]:checked');

    if(name === ""){
        alert("Please enter your name.");
        return false;
    }
    if(drink === "Please Select"){
        alert("Please select a drink.");
        return false;
    }
    if(size == null){
        alert("Please select a size.");
        return false;
    }
    if(ice == null){
        alert("Please select an ice preference.");
        return false;
    }
    if(sweetness == null){
        alert("Please select a sweetness level.");
        return false;
    }
        return true;
}

function placeOrder(event){

    event.preventDefault();

    if(validateForm()){
        var name = document.getElementById("name").value.trim();
        var drink = document.getElementById("drink").value;
        var size = document.querySelector('input[name="size"]:checked').value;
        var ice = document.querySelector('input[name="ice"]:checked').value;
        var sweetness = document.querySelector('input[name="sweetness"]:checked').value;
        var orderData = [name, drink, size, ice, sweetness];

        localStorage.setItem("orders", orderData);
        alert("Order placed successfully! Thank you for your order.");
        document.getElementById("order-form").reset();
        document.getElementById("price").textContent = 0;

        

    }
}

