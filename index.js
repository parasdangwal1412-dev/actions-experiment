function greet(name = "World") {
  return Hello, ${name}!;
}

module.exports = { greet };

if (require.main === module) {
  console.log(greet());
}
