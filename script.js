/***************first class ticket count********************** */
document.getElementById("plus-first-class").addEventListener("click",function(e){

    ticketCountFunction("first",true);
    subtotalAndTotal("subtotal","vat","total");
})
document.getElementById("minus-first-class").addEventListener("click",function(e){

    ticketCountFunction("first",false);
    subtotalAndTotal("subtotal","vat","total");
})

/***************Economy class ticket count********************** */
document.getElementById("plus-economy-class").addEventListener("click",function(e){

    ticketCountFunction("economy",true);
    subtotalAndTotal("subtotal","vat","total");
})
document.getElementById("minus-economy-class").addEventListener("click",function(e){

    ticketCountFunction("economy",false);
    subtotalAndTotal("subtotal","vat","total");
})

/************from booking page to confirmation page ***************/
document.getElementById("book-btn").addEventListener("click",function(){
    validateForm();
})
/************from confirmation page to booking page ***************/
document.getElementById("start-over").addEventListener("click",function(){
    pageDiplayTransition("confirmation-page","booking")
})
/****************************reload page **************** */
document.getElementById("done").addEventListener("click",function(){
    location.reload();
})


//**********************************fucntions*******************************/

/******************fuction for counting ticket numbers ********************** */
function ticketCountFunction(className,isIncreased){
    let TicketCount=parseInt(document.getElementById(className+"-class-ticket-count").value);
    if (isIncreased===true) {
        TicketCount +=1;
    } else {
        if(TicketCount>0) TicketCount -=1;
    }
    document.getElementById(className+"-class-ticket-count").value=TicketCount;
}

/******************fuction for counting subtotal,vat and total price ********************** */
function subtotalAndTotal(Subtotal,Vat,Total){
    /**************subTotal ***********/
    let firstClassTicketCount=parseInt(document.getElementById("first-class-ticket-count").value);
    let perFirstClassTicket=150;
    let FirstClassTicketPrice=firstClassTicketCount*perFirstClassTicket;
    let economyClassTicketCount=parseInt(document.getElementById("economy-class-ticket-count").value);
    let perEconomyClassTicket=100;
    let economyClassTicketPrice=economyClassTicketCount*perEconomyClassTicket;
    let subTotal=FirstClassTicketPrice+economyClassTicketPrice;
    document.getElementById(Subtotal).innerText=subTotal;

    /***************10% vat*********/
    let vat=parseFloat(subTotal*0.1); 
    document.getElementById(Vat).innerText=vat;

    /********************* total*******/
    let total=subTotal+vat;
    document.getElementById(Total).innerText=total;
}

/**************************function to take input for confirmation page **************/
function takeValueToConfirm(bookingPageId,ConfirmPageId) {
    var bookingValue =document.getElementById(bookingPageId).value;
    document.getElementById(ConfirmPageId).innerText=bookingValue;
}

/**************************function for validating booking form inputs **************/
function validateForm() {
    var array = document.getElementsByClassName("inp-style");
    outerloop: for (let i = 0; i < array.length; i++) {
      const x = array[i];
      if (x.value=="") {
            alert("Please, fill in all the fields!!!");
            break outerloop;
        } 
        takeAllValueToConfirm();
    }        
}

/**************************function to take All input for confirmation page **************/
function takeAllValueToConfirm() {
    document.getElementById("passengerId").innerText=Math.round(Math.random()*100000000);
    pageDiplayTransition("booking","confirmation-page");
    takeValueToConfirm("book-from","from");
    takeValueToConfirm("book-to","to");
    takeValueToConfirm("book-date-start","date-start");
    takeValueToConfirm("book-date-end","date-end");
    takeValueToConfirm("first-class-ticket-count","first-class-ticket-final");
    takeValueToConfirm("economy-class-ticket-count","economy-class-ticket-final");
    subtotalAndTotal("subtotal-confirm","vat-confirm","total-confirm");
}

/**************************function for page transition ***********************/
function pageDiplayTransition(idToDisappear,idToAppear) {
    document.getElementById(idToDisappear).style.display="none";
    document.getElementById(idToAppear).style.display="block";
}

