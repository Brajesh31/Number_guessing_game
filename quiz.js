const APIlink = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple";
let fetchdata = async (data) => {
    let fetchquiz = await fetch(data);
    let res = await fetchquiz.json();
    return res.result;
};
let data = await fetchdata(APIlink);
console.log(data);
export {};
