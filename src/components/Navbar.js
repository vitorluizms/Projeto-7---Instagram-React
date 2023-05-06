export default function Navbar() {
    return (
        <div class='navbar'>
            <div class= 'container'>
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
    <div class='logo'>
        <ion-icon name='logo-instagram'></ion-icon>
        <div class='separador'></div>
        <img src="assets/img/logo.png" alt="logo" />
    </div>
    )
}
const Pesquisa = () => {
    return (
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    )
}
const Icones = () => {
    return (
        <div class="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    )
}
const IconesMob = () => {
    return (
        <div class="icones-mobile">
            dsfdgf
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    )
}