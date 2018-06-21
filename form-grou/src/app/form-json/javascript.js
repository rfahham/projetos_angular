function updateview() {
    var edit = document.getElementById('edit');
    var html = edit.value;
    var encodedHtml = encodeURIComponent(html);
    document.getElementById('directlink').href = '/htmlandjavascripteditor.php?source=' + encodedHtml;
    document.getElementById('view').src = 'data:text/html,' + encodedHtml;
    resizeMe(edit);
    }
    window.onload = updateview;