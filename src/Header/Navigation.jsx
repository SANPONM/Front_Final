function Navigation(props) {
    const {title} = props; 
    return(
        <a href="#services" className="text-lg focus:text-white hover:text-gray-300 transition-colors" > {title} </a>
    );
}

export default Navigation;