import { Link } from "react-router-dom";
import logoHc from '../../img/logo_hc.svg';
import logoImrea from '../../img/logo_imrea.svg';
import fotoPerfil from '../../img/perfil.png';

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-4 w-full max-w-8xl mx-auto">
      <div className="flex items-center gap-4">
        <img src={logoHc} alt="Logo HC" className="h-10" />
        <img src={logoImrea} alt="Logo IMREA" className="h-10" />
      </div>
      <Link to="/perfil">
        <img src={fotoPerfil} alt="Foto de Perfil" className="h-10" />
      </Link>
    </header>
  );
}
