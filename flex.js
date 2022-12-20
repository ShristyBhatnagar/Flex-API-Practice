function showlist() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {

            console.log(data);

            var profile = " ";
            var listProfile = data.map((x) => {
              listProfile+='${x.id}'+'${x.name}' ;
                return listProfile;
            })
            document.getElementsByTagName("p").innerHTML =profile;

        })
}
showlist();
