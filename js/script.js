// Algorithm computer
function getPilihanComputer() {
    const comp = Math.random();
    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

// Player choose
function getHasil(comp, player){
    if(player == comp) return 'SERI!';
    if(player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if(player == 'orang' ) return (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    if(player == 'semut' ) return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
}

// random image
function putar(){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang','semut'];
    let i = 0;
    const waktuMulai = new Date().getTime(); 
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src','img/'+gambar[i++]+'.png');
        if(i == gambar.length) i = 0;
    },100);
}

// Output
const pilihan = document.querySelectorAll ('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer,pilihanPlayer);
        putar();
        setTimeout(function(){
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src','img/'+ pilihanComputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        },1000);
    });
});



