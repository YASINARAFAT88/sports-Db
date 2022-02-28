const allPlayer = () =>{
    const searchVelue = document.getElementById('search-box').value
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchVelue}`
    fetch(url)
    .then(res => res.json())
    .then(data => showPlyer(data.player))
    // console.log(url)
}
const showPlyer = players =>{
    for(const player of players){
        const parentContainer = document.getElementById('parent-container')
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="card p-5">
        <div class="pro-pic">
            <img class="w-50" src="${player.strThumb}" alt="">
                </div>
                <h2>Name: ${player.strPlayer} </h2>
                <h5>Country: ${player.strNationality}</h5>
                <p></p>
                <div class="allButton">
                    <button class="btn btn-danger">Delet</button>
                    <button onclick="details('${player.idPlayer}')" class="btn btn-success">Detail</button>
                </div>
            </div>
    `
    parentContainer.appendChild(div)
    console.log(parentContainer)
    }
    
}
const details = (info) =>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    // console.log('o)
}