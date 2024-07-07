import {CgDetailsMore} from "react-icons/cg";
import {IoMdTrash} from "react-icons/io";
import {IoPencil} from "react-icons/io5";
import {useEffect, useState} from "react";
import {api} from "../service/api.ts";

interface ProdutoProps {
    id: number;
    nome: string;
    preco: number;
}

export default function DashBoard() {
    // TODO: Buscar os dados do produtos
    // TODO: Adicioanar a funcionalidade de adicionar um novo produto
    // TODO: Adicioanar a funcionalidade de editar um produto
    // TODO: Adicioanar a funcionalidade de deletar um produto
    // TODO: Adicioanar a funcionalidade de visualizar os detalhes do produto ( mostrar roteamento )
    const [produtos, setProdutos] = useState<ProdutoProps[]>([]);
    const [loadingProdutos, setLoadingProdutos] = useState(true);

    async function getProdutos() {
        try {
            const response = await api.get('/produtos');
            const data = await response.data;
            setProdutos(data);

        } catch (error) {
            alert("Dados nao encontrados")
        } finally {
            setLoadingProdutos(false)
        }
    }

    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <div className='dashboard'>
            <div className='dash-header'>
                <h2>Listagem de Items</h2>

                <form>
                    <input placeholder='Nome do item'/>
                    <input placeholder='Preço'/>
                    <button className='dash-add'>+ Adicionar Item</button>
                </form>
            </div>
            {loadingProdutos && <p>Carregando...</p> }
            {!produtos.length && <p style={{textAlign: 'center', marginTop: 24}}>Nenhum dado encontrado</p> }
            {produtos.map((produto) => (
                <div className='dash-item' key={produto.id}>
                    <div>
                        <h3>{produto.nome}</h3>
                        <p>{produto.preco.toFixed(2)}</p>
                    </div>

                    <div className='dash-item-actions'>
                        <button className='edit'>
                            <CgDetailsMore size={16}/>
                        </button>
                        <button className='delete'>
                            <IoPencil size={16}/>
                        </button>
                        <button className='delete'>
                            <IoMdTrash size={16}/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}