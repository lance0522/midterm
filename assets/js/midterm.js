$(document).ready(function(){

    $("mask_slash").change(function(){
    var pinili = $(this).prop('selectIndex');
    $("#mask_ip").prop('selectIndex', pinili );
    $("number_of_hosts").prop('selectIndex', pinili);
    });


    $("mask_ip").change(function(){
    var pinili2 = $(this).prop('selectIndex');
    $("#mask_slash").prop('selectIndex', pinili2 );
    $("number_of_hosts").prop('selectIndex', pinili2);
    });

    $("number_of_hosts").change(function(){
    var pinili3 = $(this).prop('selectIndex');
    $("#mask_slash").prop('selectIndex', pinili3 );
    $("mask_ip").prop('selectIndex', pinili3);
    });
});

