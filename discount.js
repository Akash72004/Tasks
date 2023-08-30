 function answer()
 {
    var qnty_input=parseInt(document.getElementById("quantity").value);

    var initial_price=qnty_input*10

    document.getElementById("output_1").innerHTML=initial_price+"$";

    if(qnty_input<5){
        document.getElementById("output_2").innerHTML=("No discount Applicable");
    }
    else if(qnty_input>=5&&qnty_input<=10){
        document.getElementById("output_2").innerHTML=("10%");
    }
    else{
        document.getElementById("output_2").innerHTML=("20%");
    }





    if(qnty_input<5){
        document.getElementById("output_3").innerHTML=(initial_price+"$");
    }
    else if(qnty_input>=5&&qnty_input<=10){
        document.getElementById("output_3").innerHTML=((initial_price-initial_price*0.1)+"$");
    }
    else{
        document.getElementById("output_3").innerHTML=((initial_price-initial_price*0.2)+"$");
    }
}