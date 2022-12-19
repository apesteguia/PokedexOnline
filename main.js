class Pokemon {
  app = document.querySelector("#app");
  nombre;
  id;
  foto;
  stats;
  tipos;
  url;
  habilidades;
  valor = 0;
  rgb;
  constructor(url) {
    this.url = url;
  }
  crearDiv() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.nombre = data.name;
        this.id = data.id;
        this.fotos = data["sprites"];
        this.tipos = data.types; //this.tipos[0].type.name
        this.habilidades = data.abilities; //this.habilidades[0].ability.name
        this.stats = data.stats; //this.stats[0].stat.name && [0].base_stat
        console.log(this.nombre);
        let div = document.createElement("div");
        let divTipos = document.createElement("div");
        let n = document.createElement("h1");
        let i = document.createElement("p");
        let f = document.createElement("img");
        let hab = [];
        for (let i = 0; i < this.habilidades.length; i++) {
          hab.push(document.createElement("p"));
        }
        let tipo = [];
        for (let i = 0; i < this.tipos.length; i++) {
          tipo.push(document.createElement("p"));
        }
        let stat = [];
        for (let i = 0; i < this.stats.length; i++) {
          stat.push(document.createElement("p"));
        }

        div.classList.add("card");
        n.innerText = this.nombre;
        i.innerText = this.id;
        f.src = this.fotos.front_default;
        n.classList.add("nombre");
        f.classList.add("foto");
        i.classList.add("id");
        div.appendChild(i);
        div.appendChild(f);
        for (let i = 0; i < this.tipos.length; i++) {
          tipo[i].innerText = this.tipos[i].type.name;
          if (this.tipos[i].type.name === "grass") {
            this.rgb = "green";
          } else if (this.tipos[i].type.name === "fire") {
            this.rgb = "#e62d20";
          } else if (this.tipos[i].type.name === "ground") {
            this.rgb = "#804f2a";
          } else if (this.tipos[i].type.name === "water") {
            this.rgb = "#1a74db";
          } else if (this.tipos[i].type.name === "ice") {
            this.rgb = "#8fc7c6";
          } else if (this.tipos[i].type.name === "electric") {
            this.rgb = "#e4f261";
          } else if (this.tipos[i].type.name === "ghost") {
            this.rgb = "#191521";
          } else if (this.tipos[i].type.name === "poison") {
            this.rgb = "#5006c7";
          } else if (this.tipos[i].type.name === "steel") {
            this.rgb = "#a6a6a6";
          } else if (this.tipos[i].type.name === "rock") {
            this.rgb = "#9e843a";
          } else if (this.tipos[i].type.name === "flying") {
            this.rgb = "#9ddbe0";
          } else if (this.tipos[i].type.name === "dark") {
            this.rgb = "#1c1c1f";
          } else if (this.tipos[i].type.name === "fighting") {
            this.rgb = "#9c2d17";
          } else if (this.tipos[i].type.name === "psychic") {
            this.rgb = "#b611c2";
          } else if (this.tipos[i].type.name === "fairy") {
            this.rgb = "#d059d9";
          } else if (this.tipos[i].type.name === "dragon") {
            this.rgb = "#080854";
          } else if (this.tipos[i].type.name === "bug") {
            this.rgb = "#6db536";
          } else if (this.tipos[i].type.name === "normal") {
            this.rgb = "#4a4a4a";
          }
          tipo[i].style.backgroundColor = this.rgb;
          tipo[i].style.borderRadius = "10px";
          tipo[i].style.width = "60px";
          tipo[i].style.height = "25px";
          tipo[i].style.textAlign = "center";
          divTipos.appendChild(tipo[i]);
        }
        divTipos.classList.add("divtipos");
        div.appendChild(divTipos);
        div.appendChild(n);
        this.app.appendChild(div);
        this.valor = 1;
      });
  }
}

let pkm;
let lista = [];
for (let i = 1; i < 722; i++) {
  pkm = new Pokemon("https://pokeapi.co/api/v2/pokemon/" + i);
  console.log(pkm.nombre);
  setTimeout(() => {}, 1000);
  lista.push(pkm);
}

for (let i = 0; i < lista.length; i++) {
  lista[i].crearDiv();
}
