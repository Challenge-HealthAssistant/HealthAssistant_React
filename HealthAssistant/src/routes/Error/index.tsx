import { useNavigate } from "react-router-dom";

export default function Error() {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div className="error-panel">
            <h1 className="error-title">404</h1>
            <p className="error-message">Página não encontrada</p>
            <button onClick={handleNavigateHome} className="error-back-link">
                Voltar para a Home
            </button>
        </div>
    );
}