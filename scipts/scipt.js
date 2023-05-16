window.addEventListener("DOMContentLoaded",()=>{

$('#tablanorth').DataTable( {
    responsive: {
        details: {
            renderer: function ( api, rowIdx, columns ) {
                var data = $.map( columns, function ( col, i ) {
                    return col.hidden ?
                        '<tr data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
                            '<td>'+col.title+':'+'</td> '+
                            '<td>'+col.data+'</td>'+
                        '</tr>' :
                        '';
                } ).join('');
 
                return data ?
                    $('<table/>').append( data ) :
                    false;
            }
        }
    },
    columnDefs:[
        {responsivePriority:2, targets:0},
        {responsivePriority:1, targets:[4,3,2,0]},
        {responsivePriority:0, targets:[1]}
    ]
} );

});

function inicio() {
    var formulario=document.getElementById('form');
    const btnedit=document.getElementsByClassName('btnedit');

    btnadd.addEventListener('click', agregarproducto)
    formulario.style.display='none'
}

function agregarproducto(){
    var formulario=document.getElementById('form')
    if (formulario !== null) {
        formulario.style.display = 'block'
      } else {
        console.log("El elemento no se encuentra en el DOM.");
      }
}

function editarproducto(){
    var formulario=document.getElementById('form');
    formulario.style.display = 'block';
}

function ocultarForm(){
    var formulario=document.getElementById('form')
    formulario.style.display = 'none';
}

window.addEventListener('load', inicio)