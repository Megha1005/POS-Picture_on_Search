function searchPics() {
    let clientID = '9sv3Ln7gBMeJtiKnKYWErQtYq7AWNzJsnH5d6Ov7nFA';
    let value = document.getElementById('search').value;
    let url =
        'https://api.unsplash.com/search/photos/?client_id=' +
        clientID +
        '&query=' +
        value;

    //request call to API

    fetch(url)
        .then(function (data) {
            return data.json();
        })

        .then(function (data) {
            console.log(data);


            data.results.forEach(photo => {
                let result = `
        <img src="${photo.urls.regular}">
        <a href = "${photo.links.download}">
        `;
                $("#result").append(result);
            });
        });
}