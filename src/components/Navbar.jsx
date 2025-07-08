import {navLinks} from "../../constants/index"

export const Navbar = () => {
  return (
    <nav>
        <div>
            <a href="#home" className=''>
                <p>VOLVO</p>
            </a>
            <ul>
                {navLinks.map((link)=>(
                    <li key={link.id}>
                        <a href={`#${link.id}`}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}
