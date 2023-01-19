class Singleton {
  output(msg) {
    console.log(`the message is ${msg}`);
  }
}

export let msg = new Singleton();
msg.output("daniele");
