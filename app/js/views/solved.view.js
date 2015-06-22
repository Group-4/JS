$(function() {
        $('.deletePostt').on('click', (function(e) {
            e.preventDefault();

            var button = button;
            var url = this.href;
            var $post = $('#deletePost');

            $('deletePost').removeClass('current');
            $('#container').remove();

            var element = $(this);
            var deletePost = element.attr("id");
            var delUserPost = 'id=' + deleteUserPost;
            var content = $('#content');

            $('deletePost.current').removeClass('current');
            $('#container').remove();

            if (confirm("Delete your post?")) {
                // AJAX TO DELETE
                $.ajax({
                    type: "POST",
                    url: url,
                    data: delUserPost,
                    success: function() {
                        // console.log("Your Post has been deleted!");
                    },
                    complete: function() {
                        $('#loading').remove();
                    },
                    success: function() {
                        $content.html($(data).find('#container')).hide();
                    },
                });
            },
        }));


    }
}
