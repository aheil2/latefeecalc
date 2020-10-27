function lateFeeCalc()
{
    // Get days late
    var daysLate = prompt('How many days late is your return?');
    // Parse to number
    daysLate = parseFloat(daysLate);
    // Get Amount of Books
    var books = prompt('How many books do you have to return?');
    // Parse to number
    books = parseFloat(books);
    // Get Amount of DVDs
    var dvds = prompt('How many DVDs do you have to return?');
    // Parse to number
    dvds = parseFloat(dvds);
    // calculate book fees
    var bookfee = (books * 0.25) * daysLate;
    // calculate dvd fees
    var dvdfee = (dvds * 0.50) * daysLate;
    // calculate total fees
    var totalfee = bookfee + dvdfee;
    // display total fees
    alert(`You currently owe $${totalfee.toFixed(2)} in late fees.`);
}