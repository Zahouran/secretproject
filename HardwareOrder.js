const Order = require("./Order");

const OrderState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    BROOMS:   Symbol("brooms"),
    SHOVELS:   Symbol("shovels"),
    GARBAGES:   Symbol("garbage"),
    BULBS:  Symbol("bulbs"),
    CLEANERS:  Symbol("cleaners"),
    FILTERS:  Symbol("filters"),
    SCREENS:  Symbol("screens"),
    CLOTHS:  Symbol("cloths"),
    EARBUDS:  Symbol("earbuds"),
    DESCALERS:  Symbol("descalers"),
    PAYMENT:  Symbol("payment"),
    DELIVERY:  Symbol("delivery")
});

module.exports = class SandwichOrder extends Order{
    constructor(sNumber, sUrl){
        super(sNumber, sUrl);
        this.stateCur = OrderState.WELCOMING;
        this.sList = "";
        this.sTotal = 0;
        this.sTaxes = 0;
        this.sDue = 0;
    }
    handleInput(sInput){
        let aReturn = [];
        switch(this.stateCur){
            case OrderState.WELCOMING:
                this.stateCur = OrderState.BROOMS;
                aReturn.push("Welcome to PierreMart.");
                aReturn.push(`Here is the list of our items:`);
                aReturn.push(`${this.sUrl}/payment/${this.sNumber}/`);
                aReturn.push("Would you like to place an order?");
                aReturn.push(`Please respond by "order"`);
                break;
            case OrderState.BROOMS:
                if(sInput.toLowerCase() == "order"){
                    this.stateCur = OrderState.SHOVELS
                    aReturn.push("Would you like a broom and dustbin?");
                    aReturn.push("YES or NO");
                }
                else{
                    aReturn.push(`Here is the list of our items:`);
                    aReturn.push(`${this.sUrl}/payment/${this.sNumber}/`);
                    aReturn.push("Would you like to place an order?");
                    aReturn.push(`Please respond by "order"`);
                }
                break;
            case OrderState.SHOVELS:
                if(sInput.toLowerCase() == "yes"){
                    this.stateCur = OrderState.GARBAGES
                    aReturn.push("Would you like a snow shovel?");
                    aReturn.push("YES or NO");
                    this.sList += "a broom and dustbin";
                    this.sTotal += 10;
                }
                else if(sInput.toLowerCase() == "no"){
                    this.stateCur = OrderState.GARBAGES
                    aReturn.push("Would you like a snow shovel?");
                    aReturn.push("YES or NO");
                }
                else{
                    aReturn.push("Would you like a broom and dustbin?");
                    aReturn.push("YES or NO");
                }
                break;
            case OrderState.GARBAGES:
                if(sInput.toLowerCase() == "yes"){
                    this.stateCur = OrderState.BULBS
                    aReturn.push("Would you like a garbage and recycling container?");
                    aReturn.push("YES or NO");
                    this.sList += " a snow shovel";
                    this.sTotal += 15;
                }
                else if(sInput.toLowerCase() == "no"){
                    this.stateCur = OrderState.BULBS
                    aReturn.push("Would you like a garbage and recycling container?");
                    aReturn.push("YES or NO");
                }
                else{
                    aReturn.push("Would you like a snow shovel?");
                    aReturn.push("YES or NO");
                }
                break;
            case OrderState.BULBS:
                if(sInput.toLowerCase() == "yes"){
                    this.stateCur = OrderState.CLEANERS
                    aReturn.push("Would you like a pack of light bulbs?");
                    aReturn.push("YES or NO");
                    this.sList += " a garbage and recycling unit";
                    this.sTotal += 7.5;
                }
                else if(sInput.toLowerCase() == "no"){
                    this.stateCur = OrderState.CLEANERS
                    aReturn.push("Would you like a pack of light bulbs?");
                    aReturn.push("YES or NO");
                }
                else{
                    aReturn.push("Would you like a garbage and recycling container?");
                    aReturn.push("YES or NO");
                }
                break;
            case OrderState.CLEANERS:
                if(sInput.toLowerCase() == "yes"){
                    this.stateCur = OrderState.FILTERS
                    aReturn.push("Would you like a household cleaner?");
                    aReturn.push("YES or NO");
                    this.sList += " a pack of light bulbs";
                    this.sTotal += 5;
                }
                else if(sInput.toLowerCase() == "no"){
                    this.stateCur = OrderState.FILTERS
                    aReturn.push("Would you like a household cleaner?");
                    aReturn.push("YES or NO");
                }
                else{
                    aReturn.push("Would you like a pack of light bulbs?");
                    aReturn.push("YES or NO");
                }
                break;
            case OrderState.FILTERS:
                if(sInput.toLowerCase() == "yes"){
                    this.stateCur = OrderState.SCREENS
                    aReturn.push("Would you like a furnace filter?");
                    aReturn.push("YES or NO");
                    this.sList += " a household cleaner";
                    this.sTotal += 3.5;
                }
                else if(sInput.toLowerCase() == "no"){
                    this.stateCur = OrderState.SCREENS
                    aReturn.push("Would you like a furnace filter?");
                    aReturn.push("YES or NO");
                }
                else{
                    aReturn.push("Would you like a household cleaner?");
                    aReturn.push("YES or NO");
                }
                break;
            case OrderState.SCREENS:
                if(sInput.toLowerCase() == "yes"){
                    this.stateCur = OrderState.CLOTHS
                    aReturn.push("Would you like a cat screen?");
                    aReturn.push("YES or NO");
                    this.sList += " a furnace filter";
                    this.sTotal += 15;
                }
                else if(sInput.toLowerCase() == "no"){
                    this.stateCur = OrderState.CLOTHS
                    aReturn.push("Would you like a cat screen?");
                    aReturn.push("YES or NO");
                }
                else{
                    aReturn.push("Would you like a furnace filter?");
                    aReturn.push("YES or NO");
                }
                break;
            case OrderState.CLOTHS:
                if(sInput.toLowerCase() == "yes"){
                    this.stateCur = OrderState.EARBUDS
                    aReturn.push("Thank you for your order, please note that we have a few promotional items to offer");
                    aReturn.push("Would you like a car cloth?");
                    aReturn.push("YES or NO");
                    this.sList += " a cat screen";
                    this.sTotal += 10;
                }
                else if(sInput.toLowerCase() == "no"){
                    this.stateCur = OrderState.EARBUDS
                    aReturn.push("Thank you for your order, please note that we have a few promotional items to offer");
                    aReturn.push("Would you like a car cloth?");
                    aReturn.push("YES or NO");
                }
                else{
                    aReturn.push("Would you like a cat screen?");
                    aReturn.push("YES or NO");
                }
                break;
            case OrderState.EARBUDS:
                if(sInput.toLowerCase() == "yes"){
                    this.stateCur = OrderState.DESCALERS
                    aReturn.push("Would you like a pair of earbuds?");
                    aReturn.push("YES or NO");
                    this.sList += " a car cloth";
                    this.sTotal += 8;
                }
                else if(sInput.toLowerCase() == "no"){
                    this.stateCur = OrderState.DESCALERS
                    aReturn.push("Would you like a pair of earbuds?");
                    aReturn.push("YES or NO");
                }
                else{
                    aReturn.push("Would you like a car cloth?");
                    aReturn.push("YES or NO");
                }
                break;
            case OrderState.DESCALERS:
                if(sInput.toLowerCase() == "yes"){
                    this.stateCur = OrderState.PAYMENT
                    aReturn.push("Would you like a descaller for your kettle?");
                    aReturn.push("YES or NO");
                    this.sList += " a pair of earbuds";
                    this.sTotal += 7;
                }
                else if(sInput.toLowerCase() == "no"){
                    this.stateCur = OrderState.PAYMENT
                    aReturn.push("Would you like a descaller for your kettle?");
                    aReturn.push("YES or NO");
                }
                else{
                    aReturn.push("Would you like a pair of earbuds?");
                    aReturn.push("YES or NO");
                }
                break;
            case OrderState.PAYMENT:
                if(sInput.toLowerCase() == "yes"){
                    this.stateCur = OrderState.DELIVERY
                    this.sList += " a descaler for your kettle";
                    this.sTotal += 5;
                    this.sTaxes = this.sTotal * 0.13;
                    this.sDue = this.sTotal + this.sTaxes;
                    aReturn.push(`Your order currently includes ${this.sList}`);
                    aReturn.push(`Your total is $${this.sTotal}`);
                    aReturn.push(`Your taxes are $${this.sTaxes}`);
                    aReturn.push(`For a total due of $${this.sDue}`);
                    aReturn.push(`Is your order accurate?`);
                }
                else if(sInput.toLowerCase() == "no"){
                    this.stateCur = OrderState.DELIVERY
                    this.sTaxes = this.sTotal * 0.13;
                    this.sDue = this.sTotal + this.sTaxes;
                    if(this.sList == ""){
                        this.isDone(true);   
                        aReturn.push(`Your order has no item, please restart the ordering process.`);
                    }
                    else{
                    aReturn.push(`Your order currently includes ${this.sList}`);
                    aReturn.push(`Your total is $${this.sTotal}`);
                    aReturn.push(`Your taxes are $${this.sTaxes}`);
                    aReturn.push(`For a total due of $${this.sDue}`);
                    aReturn.push(`Is your order accurate?`);
                    }
                }
                else{
                    aReturn.push("Would you like a descaller for your kettle?");
                    aReturn.push("YES or NO");
                }
                break;
            case OrderState.DELIVERY:
                if(sInput.toLowerCase() == "yes"){
                this.isDone(true);
                aReturn.push("We will text you once your order is ready for pickup at the curbside!");
                }
                else if(sInput.toLowerCase() == "no"){
                this.isDone(true);
                aReturn.push("Please restart your order by replying to this message.");
                }
                else{
                aReturn.push(`Is your order accurate?`);
                }
                break;
        }
        return aReturn;
    }
    renderForm(){
      return(`
      <html>

        <head>
            <meta http-equiv=Content-Type content="text/html; charset=windows-1252">
            <meta name=Generator content="Microsoft Word 15 (filtered)">
            <style>
                <!--
                /* Font Definitions */
                @font-face {
                    font-family: "Cambria Math";
                    panose-1: 2 4 5 3 5 4 6 3 2 4;
                }

                @font-face {
                    font-family: Calibri;
                    panose-1: 2 15 5 2 2 2 4 3 2 4;
                }

                /* Style Definitions */
                p.MsoNormal,
                li.MsoNormal,
                div.MsoNormal {
                    margin-top: 0in;
                    margin-right: 0in;
                    margin-bottom: 8.0pt;
                    margin-left: 0in;
                    line-height: 107%;
                    font-size: 11.0pt;
                    font-family: "Calibri", sans-serif;
                }

                .MsoChpDefault {
                    font-family: "Calibri", sans-serif;
                }

                .MsoPapDefault {
                    margin-bottom: 8.0pt;
                    line-height: 107%;
                }

                @page WordSection1 {
                    size: 8.5in 11.0in;
                    margin: 99.25pt 85.05pt 85.05pt 85.05pt;
                }

                div.WordSection1 {
                    page: WordSection1;
                }
                -->
            </style>

        </head>

        <body lang=EN-US style='word-wrap:break-word'>

            <div class=WordSection1>

                <p class=MsoNormal>Welcome to PierreMart!</p>

                <p class=MsoNormal>Please text us "order" and we will take care of your order.</p>

                <p class=MsoNormal>Here is the list of all our items:</p>

                <table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 style='border-collapse:collapse;border:none'>
                    <tr>
                        <td width=222 valign=top style='width:166.25pt;border:solid windowtext 1.0pt;
          padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>Products</p>
                        </td>
                        <td width=72 valign=top style='width:.75in;border:solid windowtext 1.0pt;
          border-left:none;padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>Price</p>
                        </td>
                    </tr>
                    <tr>
                        <td width=222 valign=top style='width:166.25pt;border:solid windowtext 1.0pt;
          border-top:none;padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>Brooms and
                                Dustbins</p>
                        </td>
                        <td width=72 valign=top style='width:.75in;border-top:none;border-left:none;
          border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
          padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>$10</p>
                        </td>
                    </tr>
                    <tr>
                        <td width=222 valign=top style='width:166.25pt;border:solid windowtext 1.0pt;
          border-top:none;padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>Snow shovels</p>
                        </td>
                        <td width=72 valign=top style='width:.75in;border-top:none;border-left:none;
          border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
          padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>$15</p>
                        </td>
                    </tr>
                    <tr>
                        <td width=222 valign=top style='width:166.25pt;border:solid windowtext 1.0pt;
          border-top:none;padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>Garbage and
                                Recycling Containers</p>
                        </td>
                        <td width=72 valign=top style='width:.75in;border-top:none;border-left:none;
          border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
          padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>$7.50</p>
                        </td>
                    </tr>
                    <tr>
                        <td width=222 valign=top style='width:166.25pt;border:solid windowtext 1.0pt;
          border-top:none;padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>Light-Bulbs</p>
                        </td>
                        <td width=72 valign=top style='width:.75in;border-top:none;border-left:none;
          border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
          padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>$5</p>
                        </td>
                    </tr>
                    <tr>
                        <td width=222 valign=top style='width:166.25pt;border:solid windowtext 1.0pt;
          border-top:none;padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>Household
                                Cleaners</p>
                        </td>
                        <td width=72 valign=top style='width:.75in;border-top:none;border-left:none;
          border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
          padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>$3.50</p>
                        </td>
                    </tr>
                    <tr>
                        <td width=222 valign=top style='width:166.25pt;border:solid windowtext 1.0pt;
          border-top:none;padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>Furnace
                                Filters</p>
                        </td>
                        <td width=72 valign=top style='width:.75in;border-top:none;border-left:none;
          border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
          padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>$15</p>
                        </td>
                    </tr>
                    <tr>
                        <td width=222 valign=top style='width:166.25pt;border:solid windowtext 1.0pt;
          border-top:none;padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>Cat Screens</p>
                        </td>
                        <td width=72 valign=top style='width:.75in;border-top:none;border-left:none;
          border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
          padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>$10</p>
                        </td>
                    </tr>
                    <tr>
                        <td width=222 valign=top style='width:166.25pt;border:solid windowtext 1.0pt;
          border-top:none;padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>Car Cloths</p>
                        </td>
                        <td width=72 valign=top style='width:.75in;border-top:none;border-left:none;
          border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
          padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>$8</p>
                        </td>
                    </tr>
                    <tr>
                        <td width=222 valign=top style='width:166.25pt;border:solid windowtext 1.0pt;
          border-top:none;padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>EarBuds</p>
                        </td>
                        <td width=72 valign=top style='width:.75in;border-top:none;border-left:none;
          border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
          padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>$7</p>
                        </td>
                    </tr>
                    <tr>
                        <td width=222 valign=top style='width:166.25pt;border:solid windowtext 1.0pt;
          border-top:none;padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>De-Scalers</p>
                        </td>
                        <td width=72 valign=top style='width:.75in;border-top:none;border-left:none;
          border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
          padding:0in 5.4pt 0in 5.4pt'>
                            <p class=MsoNormal style='margin-bottom:0in;line-height:normal'>$5</p>
                        </td>
                    </tr>
                </table>

                <p class=MsoNormal>&nbsp;</p>

            </div>

        </body>

      </html>
          
      `);
  
    }
}