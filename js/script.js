$(document).ready(function() {
    $("#btn").click(function() {
        let productName = $("#product-name").val();
        let productPrice = $("#product-price").val();
        // add product
        $("table tbody").append(`
            <tr>
                <td>${productName}</td>
                <td>${productPrice}</td>
                <td><i id="delete" class="fa fa-trash"></i></td>
            </tr>
        `);
        // delete product
        $("#delete").click(function(){
            $("#delete").parent().parent().remove();
        });
    });
});