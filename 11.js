console.log("hello")


const getDataFromBackEnd=()=>{
    return['abiya','jacky']
}
const lovers=getDataFromBackEnd();
for (let i = 0; i < lovers.length; i++) {
    console.log(lovers[i])
}

//Find the even numbers from 1 to 100 using for loop

for( i=2;i<=100;i+=2){
    if(i%2==0){
        console.log(i +"  is even")
    }
    else{
        console.log(i+"is odd")
    }
}
//Print natural numbers from 100 to 0 using for loop

for(i=100;i>=0;i-=10){

console.log(i+ " numbers")
}



const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = " $ ";

while (cars[i]) {
  text += cars[i];
  i++;
console.log(text)
}
//Count odd numbers from 1 to 10 using while loop
let num=2;
let count=0;
while(num <= 100){
    console.log(num);
    num=num+2
    count=count+1
}
console.log("count of evem numbers  "+ count)



program to display numbers
let i = 6;
const n = 0;

 //do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i <= n);
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  console.log(person)


  const developerData = {
    name : "Abi",
    developer : true,
    experience : 5,
    address : {
        street : "South street",
        city : "Lewisville",
        country :"USA"
    },
hobbies : ["playing","eating","dancing"]
}
console.log(developerData.address.street,developerData.address.country)
console.log(developerData.hobbies[2])
ARRAYS

function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("raymen"));



let text = "How are you doing today?";
const myArray = text.split(" ");

console.log(myArray)

let text = "HELLO WORLD";
let letter = text.charAt(7);
console.log(letter)



    const arraycompany=[
        
{
    "id":"I4Q1Q8RV29V4MT1yFF3n",
    "description":null,
    "createdTimestamp":1646471941569,
    "website":"https://www.headspaceglobal.co.za",
    "createdAt":"Tue Mar 05 3991 09:19:01 GMT+0000 (Coordinated Universal Time)",
    "logo":{
       "imageUrl":"https://firebasestorage.googleapis.com/v0/b/africatech-7cf1b.appspot.com/o/images%2F1646471860330_Head%20Space%20Logo.jpg?alt=media&token=47788dbd-897e-4411-97d3-a9c6bac4817d",
       "imageName":"1646471860330_Head Space Logo.jpg"
    },
    "name":"Headspace Global",
    "key":"headspace-global"
 },

 {
    "id":"RK90bCCnpWoRECKj6RIC",
    "website":"https://remotebase.com/",
    "logo":{
       "imageUrl":"https://firebasestorage.googleapis.com/v0/b/africatech-7cf1b.appspot.com/o/images%2F1646400412751_logoRB.jpeg?alt=media&token=b516b9ff-94f7-4e79-8eff-191fcab049ff",
       "imageName":"1646400412751_logoRB.jpeg"
    },
    "name":"RemoteBase",
    "description":null,
    "createdAt":"Mon Mar 04 3991 13:31:38 GMT+0000 (Coordinated Universal Time)",
    "createdTimestamp":1646400698008,
    "key":"remotebase"
 },
 {
    "id":"1HRW91ROuS17ry8EpIKL",
    "website":"http://www.facebook.com/careers",
    "createdAt":"Tue Feb 12 3991 19:41:17 GMT+0000 (Coordinated Universal Time)",
    "createdTimestamp":1644694877837,
    "description":"Meta builds technologies that help people connect, find communities, and grow businesses. When Facebook launched in 2004, it changed the way people connect. Apps like Messenger, Instagram and WhatsApp further empowered billions around the world. Now, Meta is moving beyond 2D screens toward immersive experiences like augmented and virtual reality to help build the next evolution in social technology.\n\nWe want to give people the power to build community and bring the world closer together. To do that, we ask that you help create a safe and respectful online space. These community values encourage constructive conversations on this page:\n\n• Start with an open mind. Whether you agree or disagree, engage with empathy.\n• Comments violating our Community Standards will be removed or hidden. So please treat everybody with respect. \n• Keep it constructive. Use your interactions here to learn about and grow your understanding of others.\n• Our moderators are here to uphold these guidelines for the benefit of everyone, every day. \n• If you are seeking support for issues related to your Facebook account, please reference our Help Center (https://www.facebook.com/help) or Help Community (https://www.facebook.com/help/community).\n\nFor a full listing of our jobs, visit https://www.metacareers.com ",
    "key":"meta",
    "name":"Meta",
    "logo":{
       "imageUrl":"https://firebasestorage.googleapis.com/v0/b/africatech-7cf1b.appspot.com/o/images%2F1644694856305_1636138753911.jpeg?alt=media&token=48a71e0d-f1cf-41cd-b76c-3feeef34a452",
       "imageName":"1644694856305_1636138753911.jpeg"
    }
 },
 {
    "id":"SGDoHIfpLuXmJzdG1WlY",
    "logo":{
       "imageUrl":"https://firebasestorage.googleapis.com/v0/b/africatech-7cf1b.appspot.com/o/images%2F1644694584602_1611142220201.jpeg?alt=media&token=c99aef20-f86e-4649-8ff8-cdcdda444b9d",
       "imageName":"1644694584602_1611142220201.jpeg"
    },
    "createdTimestamp":1644694687838,
    "website":"https://maze.co/",
    "name":"Maze",
    "key":"maze",
    "description":"Maze empowers product and marketing teams to test anything from prototypes to copy, or round up user feedback—all in one place. Rapidly collect user insights across teams and create better user experiences, together. Works with: Figma, Adobe XD, InVision, Marvel & Sketch.",
    "createdAt":"Tue Feb 12 3991 19:38:07 GMT+0000 (Coordinated Universal Time)"
 },
 {
    "id":"U8Vuf5KAxxdVGVB1pHTV",
    "createdTimestamp":1644694387154,
    "description":"Sandvik is a high-tech and global engineering group offering products and services that enhance customer productivity, profitability and sustainability. We hold world-leading positions in selected areas – tools and tooling systems for metal cutting; equipment and tools, service and technical solutions for the mining industry and rock excavation within the construction industry; products in advanced stainless steels and special alloys as well as products for industrial heating. In 2019, the Group had approximately 40,000 employees and revenues of about 100 billion SEK in more than 160 countries within continuing operations.",
    "name":"Sandvik",
    "logo":{
       "imageUrl":"https://firebasestorage.googleapis.com/v0/b/africatech-7cf1b.appspot.com/o/images%2F1644694305852_1641823076366%20(1).jpeg?alt=media&token=d81db0b4-12cd-41e2-9a75-7f92b06d3e6a",
       "imageName":"1644694305852_1641823076366 (1).jpeg"
    },
    "createdAt":"Tue Feb 12 3991 19:33:07 GMT+0000 (Coordinated Universal Time)",
    "website":"http://home.sandvik/",
    "key":"sandvik"
 },
 {
    "id":"N2zTidn0ov7u6wBRcJHG",
    "key":"lumos-labs-(lumosity)",
    "website":"http://www.lumosity.com/",
    "name":"Lumos Labs (Lumosity)",
    "description":"Lumosity is a leading brain training program, brought to you by Lumos Labs, Inc. Lumosity’s web and mobile games are designed by scientists to challenge core cognitive abilities.\n\nLumosity’s scientists take neuropsychological and cognitive research tasks, or design new ones, and work with game designers to transform them into 50+ cognitive games. Designed to be both fun and adaptively challenging, Lumosity’s training program is accessible to people of all ages — helping them stay challenged to the full extent of their abilities.\n\nLumos Labs also has a collaborative research initiative, the Human Cognition Project, which currently partners with over 90 university collaborators. Through the HCP, we grant qualified researchers free access to Lumosity’s cognitive training tasks, assessments, research tools, and, in some cases, limited access to data on cognitive task performance — helping them conduct larger, faster, and more efficient studies.",
    "createdAt":"Tue Feb 12 3991 19:30:49 GMT+0000 (Coordinated Universal Time)",
    "createdTimestamp":1644694249765,
    "logo":{
       "imageName":"1644694171309_1538604240940.jpeg",
       "imageUrl":"https://firebasestorage.googleapis.com/v0/b/africatech-7cf1b.appspot.com/o/images%2F1644694171309_1538604240940.jpeg?alt=media&token=49495917-9bd9-493b-872e-ee2712ab2d2d"
    }
 }
];
    
    arraycompany.forEach(element => {
        console.log(element.name,element.website)
    });
    console.log(Element)
    const result = arraycompany.filter(arraycompany => arraycompany.name);
    console.log(name.filter[maze,meta])
    console.log(arraycompany.name)
    console.log(arraycompany.name=='maze','Meta')
    const result = arraycompany.filter(company => company.name.length < 5);
    console.log(result)
arraycompany.forEach(company => {
    console.log(company)
});



let arrayDetails=[
    {
        id:'0',
        name: 'raju',
        age:'20',
        phone:'8888888888',
        city:'chennai'
    },
    {
        id:'1',
        name:'roshan',
        age:'22',
        phone:'8765432109',
        city:'madurai'
    },
    {
        id:'2',
        name:'roshini',
        age:'22',
        phone:'9090909090',
        city:'trichy'
    },
    {
        id:'3',
        name:'roshinialagi',
        age:'24',
        phone:'8989898989',
        city:'kanchipuram'
    },
    {
        id:'4',
        name:'roshinisundar',
        age:'22',
        phone:'886677554433',
        city:'london'
    },
    {
        id:'5',
        name:'martinali',
        age:'27',
        phone:'9900909900',
        city:'pariscorner'
    },
    {
        id:'6',
        name:'mansoralikhan',
        age:'70',
        phone:'7070997070',
        city:'paris'
    },
];
arrayDetails.forEach(element => {
         console.log(element.phone)
     });
         const result = arrayDetails.filter(company => company.phone==7070997070);
console.log(result)


let ages=['18','21','23','25','40','12','14','12'];
console.log(ages.filter(adult))

function adult(age){
    return age >=18;


let arr1=['sum','add','sub','multi']
let arr2=['div','mod','lcm','hcl']
const arr=arr1.concat(arr2)
console.log(arr)

const fruit=['mango','apple','orange','pomegranate'];
console.log(fruit.reverse())

let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

console.log(text) 
function myFunction(item, index) {
  text += index + ": " + item +"   "; 
}

let fruits = ["apple", "orange", "cherry"];
let index=fruits.indexOf('orange');
console.log(index)
let index=fruits.toString()
console.log(index)
fruits.splice(2,0,'kiwi','grapes')
console.log(fruits)
let text=fruits.join("  is healthy"+" ")
console.log(text)
let text=Array.isArray(fruits);
console.log(fruits)

let text = "How are you doing today?";
const myArray = text.split(" ");

console.log(myArray[3])

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for(i in a){
    console.log("row "+ i)
    for(j in a[i]){
        console.log("  "+a[i][j]);
    }
     }
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var total = 1;
var sum = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
    console.log('first.....,', i);

        for (var j=i; j<arr1.length; j++)
        {
           if (arr1[i] == arr1[j])
                 sum++;
                //  console.log("got it" ,sum);
                if (total<sum)
                {
                  total=sum; 
                  item = arr1[i];
                }
        }
        sum=0;
}
console.log(item+" ( " +total +" times ) ") ;
console.log('second.....,',i);
          console.log(j);             


let arr=[81,49,36,64,100]
console.log(arr.map(Math.sqrt))


let array = ['apple', 'orange', 'apple', 'orange', 'apple'];
function getWordCount() {
  let map = {};
for (let i = 0; i < array.length; i++) {
    let item = array[i];
    map[item] = (map[item] + 1) || 1;
  }
//   return map;
  console.log(array);
}
getWordCount(array);
