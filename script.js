

const id = document.getElementById("output")


let prom1 = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve("data1");
  },3000)
});

let prom2 = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve("data2")
  },2000)
});
let prom3 = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve("data3")
  },1000)
});
let prom4 = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve("data4")
  },4000)
});
let prom5 = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    resolve("data5")
  },5000)
});
window.promises = [prom1, prom2, prom3, prom4, prom5];
let x = Promise.any([prom1, prom2, prom3, prom4, prom5])

x.then((data) =>{

  // console.log(data);
  id.innerText = data;

});

x.catch((error) =>{
  console.log("error :", error)
});