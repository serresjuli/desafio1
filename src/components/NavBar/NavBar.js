export const NavBar = () => {
    return(
        <nav className= 'menuPrincipal'>
            <section className="tittle">
                <h1>NONNI</h1>
                <p className='descripcionH1'> Tejidos a mano - Venta por mayor y por menor</p>
            </section>
		    <section className="homelist">	
			    <ul className="nav" >
				    <li className="navItem">Home</li>
				    <li className="navItem">Tejidos</li>
				    <li className="navItem">Complementos</li>
				    <li className="navItem">Texturas</li>
				    <li className="navItem">Contacto</li>
			    </ul> 
		    </section>
	    </nav>
    )
}