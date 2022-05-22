import React from 'react'
import '../styles.css'
export const Search = () => {
  return (
    <div class="search" id="search">
        <div class="search_section_1">
        <h1 class="titulo_serach"> 
            Prototipes
        </h1>
        <h3 class="sub_tiitulo_search">
            Find The Perfect Place to <br/>
            Live With your Family
        </h3>

        <div class="search_busqueda">
            <div class="search_botones">
            <button class="sell">Sell</button>
            <button class="buy">Buy</button>
            <button class="rent">Rent</button>
            </div>
            <form class='search_inputs'>
                <div className="inputs">
            <input type="text" placeholder="Enter Keyword Here..." />
            <hr/>
            <input type="text" placeholder="Select location" />
            </div>
            <div class="filtrado">
                <button class="filtrado_icono">
                    <i class="fa-solid fa-sliders"></i>
                </button>
                <button  class="filtrado_search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <p>
                        Search
                    </p>
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}
