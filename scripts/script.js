const mensagem = "Funfionou";
const posts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .catch(err => console.log(err));
}
        

export {mensagem, posts};