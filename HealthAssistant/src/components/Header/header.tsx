import { Link, useLocation } from "react-router-dom";
import logoHc from '../../img/logo_hc.svg';
import logoImrea from '../../img/logo_imrea.svg';
import fotoPerfil from '../../img/perfil.png';

export const Header = () => {
  const location = useLocation();
  
  // Páginas onde o ícone do perfil deve ficar oculto
  const paginasSemPerfil = ['/cadastro', '/login', '/codigodeverificacao'];
  const ocultarPerfil = paginasSemPerfil.includes(location.pathname);

  return (
    <header className="header">
      <div className="header-logos">
        <img src={logoHc} alt="Logo HC" className="header-logo" />
        <img src={logoImrea} alt="Logo IMREA" className="header-logo" />
      </div>
      {!ocultarPerfil && (
        <Link to="/perfil">
          <img src={fotoPerfil} alt="Foto de Perfil" className="header-profile" />
        </Link>
      )}
    </header>
  );
}
