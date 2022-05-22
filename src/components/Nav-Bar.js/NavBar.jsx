import React from 'react'
import '../styles.css'
export const NavBar = () => {
  return (
    <nav class="Nav">
    <div class="Logo">
        <img  src='https://i.ibb.co/gdtJkJL/Logo.png'alt=''/>
    </div>
    <div class="nav_links">
        <button>Home</button>
        <button>About</button>
        <button>Propiety</button>
        <button>Pages</button>
        <button>Blog</button>
        <button>Contact</button>
    </div>
    <div class="nav_buttons"> 
        <button><i class="fa-solid fa-arrow-right-arrow-left"></i> </button>
        <button><i class="fa-regular fa-heart"></i></button>
        <button><i class="fa-regular fa-user"></i></button>
        <button><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <div class="nav_add_propietie">
        <button>
            <p>
                +
            </p>
            <i>
            Add propietie
            </i>
        </button>
    </div>
</nav>
  )
}
