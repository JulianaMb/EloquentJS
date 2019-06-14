Exercise 1

const plainText = fetch("https://eloquentjavascript.net/author", {headers: {Accept: "text/plain"}})
.then(res => {
  console.log(`text/pain status: ${res.status}`);
  return res.text()
});
//.then(res => console.log(res));

const html = fetch("https://eloquentjavascript.net/author", {headers: {Accept: "text/html"}})
.then(res => {
  console.log(`text/html status: ${res.status}`);
  return res.text()
});

const json = fetch("https://eloquentjavascript.net/author", {headers: {Accept: "application/json"}})
.then(res => {
  console.log(`application/json status: ${res.status}`);
  return res.text()
});

const invalid = fetch("https://eloquentjavascript.net/author", {headers: {Accept: "application/rainbows+unicorns"}})
.then(res => {
  console.log(`application/rainbows+unicorns status: ${res.status}`);
});

Promise.all([plainText, html, json])
  .then(res => {
  console.log(`plain text content ${res[0]}`);
  console.log(`html content ${res[1]}`);
  console.log(`json ${res[2]}`);
});

Exercise 2 
<textarea id="code">return "hi";</textarea>
<button id="button">Run</button>
<pre id="output"></pre>

<script>
	const button = document.querySelector('#button');
	const code = document.querySelector('#code');
    const output = document.querySelector('#output');
    button.addEventListener('click', () => {
      try {
        const func = Function(code.value);
        const result = func();
        output.textContent = result.toString();      
      } catch(e) {
        output.textContent = e.toString();
      }
    });
</script>
