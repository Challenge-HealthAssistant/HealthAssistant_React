import { Link } from "react-router-dom";

export default function Links() {
    return (
        <nav className="flex justify-around bg-[#1de9b6] py-3">
        <Link className="bg-none border-none text-lg" to='/'>Início</Link>
        <Link className="bg-none border-none text-lg" to='/quemsomos'>Quem somos</Link>
        <Link className="bg-none border-none text-lg" to='/faq'>Faq</Link>
        <Link className="bg-none border-none text-lg" to='/suporte'>Suporte</Link>
        </nav>
    );
};
