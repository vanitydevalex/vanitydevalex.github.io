function ajaxsend_form(id) { //Ajax отправка формы
    var msg = $("#form"+id).serialize();
    var delay_popup = 0;
    var faults = $('#form'+id+' input').filter(function() {
    return $(this).data('required') && $(this).val() === "";
    }).css({"box-shadow": "inset 0px 0px 12px rgba(255,0,0,1)"}); // выделяем это поле красным
    if(faults.length) {
        return false;
    }
	else
	{
    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: msg,
        success: function(data) {
            // setTimeout("document.getElementById('parent_popup').style.display='block'", delay_popup);
            $('#thanks-popup').show();
            $(".dialogs").show();
            $(".dialogs").animate({"opacity":1}, 200, function() {
                $('#thanks-popup').addClass('active');
            });

            $("#form"+id)[0].reset();
            yaCounter40528455.reachGoal('ORDER');
            ga('send', 'event', 'order', 'target');
        },
        error:  function(xhr, str){
            alert("Возникла ошибка!");
        }
    });
    }
}

jQuery.fn.notExists = function() { //Проверка на существование элемента
    return $(this).length == 0;
}