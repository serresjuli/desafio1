import {CartWidget} from './CartWidget/CartWidget.js'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'

export const NavBar = () => {
	const categories = ['Conjuntos','Pantalones','Saquitos']

    return(
        <nav className= 'menuPrincipal'>
            <section className="tittle">
                <Link to='/'>
					<h1>NONNI</h1>
				</Link>
                <p className='descripcionH1'> Tejidos a mano - Venta por mayor y por menor</p>
            </section>
		    <section className="homelist">	
			    <ul className="nav" >
				    {categories.map((category)=>(
						<NavLink to={`/category/${category}`}>
							<li className='navItem'>{category}</li>
						</NavLink>

					))}
			    </ul> 
		    </section>
			<CartWidget/>
	    </nav>
    )
}