//Code Is Not Running in Head Tag But Running in Body Tag

console.log('dghf')
let btnClick = document.getElementById('btnClick');
btnClick.addEventListener('click', btnClickHandler);

function btnClickHandler() {
    console.log('You have Clicked By Btn Handler');
    jQuery('.loader').show();
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);


    // It is an Optional 
    // xhr.onprogress = function () {
    //     console.log("On Progress" );
    // }

    xhr.onload = function () {
        var data;
        if (this.status == 200) {
            jQuery('.loader').hide()
            data = this.responseText;
            data = JSON.parse(data);
            // data = JSON.stringify(data);
            localStorage.setItem('ajaxdata', data);

            //For Getting Data On Broweser From API Using Ajax 
            //   var queue_current_number = "";
            // $(data).each((key,element) => {
            //     // queue_current_number += data.queue_current_number; 
            //     html='<tr>'
            //         +'<td>'+element.id+'</td>'
            //         +'<td>'+element.userId+'</td>'
            //         +'<td>'+element.title+'</td>'
            //         +'<td>'+element.body+'</td>'
            //     '</tr>'
            //     $('#t_body').append(html);
            // });
            //   localStorage.setItem("ajaxdata", ""+queue_current_number+""); 
            // $('#btn').click(function(){
            //     data= JSON.stringify(data);
            //         localStorage.setItem('ajaxdata',data);
            // })

        }
        else {
            jQuery('.loader').hide()
            console.log("Some error Accured");
        }

    }

    xhr.send();
}

///Code for Paginator 
function displayXMLResults(results) {
    $("#t_body tbody").empty();
    console.log('results', results);

    $(results).each((key, element) => {
        html = '<tr>'
            + '<td>' + element.id + '</td>'
            + '<td>' + element.userId + '</td>'
            + '<td>' + element.title + '</td>'
            + '<td>' + element.body + '</td>'
        '</tr>'
        $('#t_body').append(html);
    });

    $("#myTable").DataTable();
}
function getData() {

    var data = localStorage.getItem("ajaxdata");
    data = JSON.parse(data);
    console.log(data);

    displayXMLResults(data);
}
