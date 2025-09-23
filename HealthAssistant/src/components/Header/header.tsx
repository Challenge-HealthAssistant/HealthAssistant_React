import { Link } from "react-router-dom";
import logoHc from '../../img/logo_hc.svg';
import logoImrea from '../../img/logo_imrea.svg';
import fotoPerfil from '../../img/perfil.png';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-logos">
        <img src={logoHc} alt="Logo HC" className="header-logo" />
        <img src={logoImrea} alt="Logo IMREA" className="header-logo" />
      </div>
      <Link to="/perfil">
        <img src={fotoPerfil} alt="Foto de Perfil" className="header-profile" />
      </Link>
    </header>
  );
}
