/***************first class ticket count********************** */
document.getElementById("plus-first-class").addEventListener("click",function(e){

    ticketCountFunction("first",true);
    subtotalAndTotal();
})
document.getElementById("minus-first-class").addEventListener("click",function(e){

    ticketCountFunction("first",false);
    subtotalAndTotal();
})

/***************Economy class ticket count********************** */
document.getElementById("plus-economy-class").addEventListener("click",function(e){

    ticketCountFunction("economy",true);
    subtotalAndTotal();
})
document.getElementById("minus-economy-class").addEventListener("click",function(e){

    ticketCountFunction("economy",false);
    subtotalAndTotal();
})

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
function subtotalAndTotal(){
    /**************subTotal ********************************/
    let firstClassTicketCount=parseInt(document.getElementById("first-class-ticket-count").value);
    let perFirstClassTicket=150;
    let FirstClassTicketPrice=firstClassTicketCount*perFirstClassTicket;
    let economyClassTicketCount=parseInt(document.getElementById("economy-class-ticket-count").value);
    let perEconomyClassTicket=100;
    let economyClassTicketPrice=economyClassTicketCount*perEconomyClassTicket;
    let subTotal=FirstClassTicketPrice+economyClassTicketPrice;
    document.getElementById("subtotal").innerText=subTotal;

    /***************10% vat***********************************/
    let vat=parseFloat(subTotal*0.1); 
    document.getElementById("vat").innerText=vat;

    /********************* total**************************/
    let total=subTotal+vat;
    document.getElementById("total").innerText=total;
}