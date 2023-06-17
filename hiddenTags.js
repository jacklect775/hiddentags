<script>
    // Các tag hoặc label bạn muốn ẩn
    var hiddenTags = ['TRANCE VIDEO', 'ONLYFANS', 'EURO CREME', 'Raw Fuck Club', 'Casting Couch', 'Sean Cody'];

    // Hàm kiểm tra xem bài viết có chứa các tag hoặc label ẩn hay không
    function isHiddenPost() {
        var postTags = document.getElementsByClassName('post-tag');
        var postLabels = document.getElementsByClassName('post-label');

        for (var i = 0; i < postTags.length; i++) {
            if (hiddenTags.includes(postTags[i].innerText)) {
                return true;
            }
        }

        for (var j = 0; j < postLabels.length; j++) {
            if (hiddenTags.includes(postLabels[j].innerText)) {
                return true;
            }
        }

        return false;
    }

    // Hàm ẩn các bài viết chứa tag hoặc label ẩn
    function hidePosts() {
        var posts = document.getElementsByClassName('post');

        for (var i = 0; i < posts.length; i++) {
            if (isHiddenPost(posts[i])) {
                posts[i].style.display = 'none';
            }
        }
    }

    // Thực thi hàm hidePosts khi tải xong trang
    document.addEventListener('DOMContentLoaded', hidePosts);
</script>
