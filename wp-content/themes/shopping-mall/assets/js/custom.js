$("#filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#mycard > div").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

$(document).ready(function() {
    $("#select_category").change(function() {
        $(this).find("option:selected").each(function() {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".sha-box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".sha-box").hide();
            }
        });
    }).change();
});