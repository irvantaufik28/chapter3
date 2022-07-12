gross_amount = 10000;
discount_rate = 10;
tax_rate = 10;

const discount_amount = gross_amount => gross_amount * (discount_rate / 100);
const new_discount_amount = discount_amount(gross_amount);


const amount_before_tax = (gross_amount, new_discount_amount) => {
    return gross_amount - new_discount_amount;
}
const new_amount_before_tax = amount_before_tax(gross_amount, new_discount_amount)


const tax_amount = (new_amount_before_tax) =>new_amount_before_tax * (tax_rate / 100)
const new_tax_amount = tax_amount(new_amount_before_tax);


console.log(`${new_discount_amount} ${new_amount_before_tax} ${new_tax_amount} `);
