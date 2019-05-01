class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  do {
     try {
      return primitiveMultiply(a, b);
     }
     catch(e) {
      if (!e instanceof MultiplicatorUnitFailure) {
        throw e;
      }
    }
  } while (true)
}

console.log(reliableMultiply(8, 8));

const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  let startedLocked = box.locked;
  try{
    if (startedLocked) box.unlock();
    return body();
  }
  finally {
   if (startedLocked) {
     box.lock(); 
   }
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  box.unlock();
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
