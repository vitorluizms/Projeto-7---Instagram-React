export default function Navbar() {
    return (
        <div className='navbar'>
            <div className= 'container'>
                <Logo />
                <Pesquisa />
                <Icones />
                <IconesMob />
            </div>
        </div>
    )
    
} 
const Logo = () => {
    return (
    <div className='logo'>
        <ion-icon name='logo-instagram'></ion-icon>
        <div className='separador'></div>
        <img src="assets/img/logo.png" alt="logo" />
    </div>
    )
}
const Pesquisa = () => {
    return (
        <div className="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    )
}
const Icones = () => {
    return (
        <div className="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    )
}
const IconesMob = () => {
    return (
        <div className="icones-mobile">
            dsfdgf
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    )
}