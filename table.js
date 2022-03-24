window.addEventListener('DOMContentLoaded', function (event) {
    var rows = document.querySelectorAll('row');

    for (var i = 0; i < rows.length; i++) {
        createTable(rows[i]);
    }
});

function createTable(domElement) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');

    table.style.width = "100%";
    tbody.style.width = "100%";
    tr.style.width = "100%";

    table.style.height = "fit-content";
    tbody.style.height = "fit-content";
    tr.style.height = "fit-content";

    for (var j = 0; j < domElement.children.length; j++) {
        var td = document.createElement('td');

        td.innerHTML = domElement.children[j].innerHTML;
        td.style.width = calcuteWeightInPercentage(domElement.getAttribute('sum'), domElement.children[j].getAttribute('weight')) + "%";

        tr.appendChild(td);
    }

    tbody.append(tr);
    table.appendChild(thead);
    table.appendChild(tbody);
    domElement.replaceWith(table);
}

function calcuteWeightInPercentage(sum, weight) {
    var sumInt = parseInt(sum);
    var weightInt = parseInt(weight);

    return ((weightInt / sumInt) * 100);
}