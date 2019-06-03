<h1>Mountains</h1>

<div id="mountains"></div>

<script>
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  const mainNode = document.getElementById('mountains');
  const table = document.createElement('table');
  
  const tr = document.createElement('tr');
  for (let h of Object.keys(MOUNTAINS[0])) {
    const th = document.createElement('th');
    th.appendChild(document.createTextNode(h));
    tr.appendChild(th);
  }
  table.appendChild(tr);
  
  for (let m of MOUNTAINS){
    const tr = document.createElement('tr');
    for (let p of Object.keys(m)) {
      	const td = (document.createElement('td'));
      	const column = document.createTextNode(m[p]);
      	if (!isNaN(column.nodeValue)) td.style.textAlign = "right";
    	td.appendChild(document.createTextNode(m[p]));
      	tr.appendChild(td);
    }
    table.appendChild(tr);  
  }
  mainNode.appendChild(table); 
  
</script>
