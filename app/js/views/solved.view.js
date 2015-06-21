$(function() {
    $(".deletePost").click(function() {
        var button = button;
        var url = "http://tiyqpic.herokuapp.com/posts/:id";
        var element = $(this);
        var deleteID = element.attr("id");
        var toBeDeleted = 'id=' + deletedID;

        if (confirm("Delete your post?")) {
            // AJAX TO DELETE
            $.ajax({
                type: "POST",
                url: "http://tiyqpic.herokuapp.com/posts/:id",
                data: toBeDeleted,
                success: function() {
                    // console.log("Your Post has been deleted!");
                }
            });


        }




    });


}());
