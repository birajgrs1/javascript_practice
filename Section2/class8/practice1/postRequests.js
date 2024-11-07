console.log("------ Applying post requests -----");
/*
let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  mode: "no-cors",
};

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

  */

  const createTodo = async () => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    };
    let promise = await fetch("https://jsonplaceholder.typicode.com/todos", options);
    let response = await promise.json();
    return response;
  };
  
  const main = async () => {
    let todo = await createTodo(); 
    console.log(todo);
  };
  
  main();
  


/*
json placeholder --- site

*/
