const  list = `{
    "students":[
        {"Yasin": "One"},
        {"Jannat": "Two"},
        {"Samsuddin": "Three"}
    ]
}`

const obj = JSON.parse(list);

console.log(obj);