$(document).ready(function () {
    // event handlers
    $("button").click(lateFeeCalc);

    function lateFeeCalc() {
        // Get days late
        var daysLate = $("#daysLate").val();
        // Parse to number
        daysLate = parseFloat(daysLate);
        // Get Amount of Books
        var books = $("#books").val();
        // Parse to number
        books = parseFloat(books);
        // Get Amount of DVDs
        var dvds = $("#dvds").val();
        // Parse to number
        dvds = parseFloat(dvds);
        // calculate book fees
        var bookfee = (books * 0.25) * daysLate;
        // calculate dvd fees
        var dvdfee = (dvds * 0.50) * daysLate;
        // calculate total fees
        var totalfee = bookfee + dvdfee;
        // display total fees
        $("#totalfee").text(totalfee.toFixed(2));
        $(".output").show();
    }
});