/*
export const getPoetry = async function () {
    try {
        const promise = await fetch("https://v1.jinrishici.com/all.json");
        const data = await promise.json();
        const res = [];
        res.push(data.origin);
        res.push(data.author);
        res.push(data.content);
        return res;
    } catch (error) {
        console.log(error);
    }
}; */

export const getPoetry = async function () {
  const res = [];
  return fetch("https://v1.jinrishici.com/all.json", {
    method: "GET",
  })
    .then((data) => data.json())
    .then((data) => {
      res.push(data.origin);
      res.push(data.author);
      res.push(data.content);
      return res;
    })
    .catch((error) => console.log(error));
};
