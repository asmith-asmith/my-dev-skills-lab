
$(document).ready(function() {

    $('#add').click((event) =>{
        
        var bla = $('#myInput').val();
        var newRow =  `<tr>
                        <td><button class="btn btn-xs btn-danger">X</button></td>
                        <td>${bla}</td>
                    </tr>`;
        $('#skills tbody').append(newRow);
    })

    $('#skills tbody').on('click', 'button', function(e) {
        $(e.target).closest('tr').remove();
    });

});