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


<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    let result = [];
    function search(node){
      let elementNodes = Array.from(node.childNodes).filter(n => Node.ELEMENT_NODE === n.nodeType);
      
      elementNodes.forEach(n => {
        if (n.nodeName === tagName.toUpperCase()) {
          result.push(n);
        }
        search(n);
      });
    }
    search(node);
	return result;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>
