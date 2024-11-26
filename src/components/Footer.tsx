import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Sobre nosotros
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Privacidad
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Contacto
          </a>
        </div>
      </div>
    </footer>
    </div>
    
  );
}
export default Footer;
