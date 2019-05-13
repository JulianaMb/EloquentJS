async function locateScalpel(nest) {
  let oldN = nest.name;
  for (; ;){
    let newN = await anyStorage(nest, oldN, "scalpel");
    if (newN === oldN) return newN;
    oldN = newN;
  }
}

function locateScalpel2(nest) {
  function locate(oldNest) {
  	return anyStorage(nest, oldNest, "scalpel")
    .then(res => {
    	if (oldNest === res) {
      		return res;
    	} else {
      		return locate(res);
    	}
     });
  }
  return locate(nest.name);
}

locateScalpel(bigOak).then(console.log);
locateScalpel2(bigOak).then(console.log);

function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    let success = [];
    let count = promises.length;
    if (promises.length===0) resolve(success);
  	for (let i = 0; i < promises.length; i++) {
    	promises[i]
        .then(res => {
          success[i] = res;
          count--;
          if (count===0) resolve(success);
        })
        .catch(reject);
    }
  });
}

// Test code.
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then(array => {
    console.log("We should not get here");
  })
  .catch(error => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });
