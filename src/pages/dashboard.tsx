import { CgDetailsMore } from "react-icons/cg";
import { IoMdTrash } from "react-icons/io";
import {IoPencil} from "react-icons/io5";

export default function DashBoard() {
    // TODO: Buscar os dados do produtos
    // TODO: Adicioanar a funcionalidade de adicionar um novo produto
    // TODO: Adicioanar a funcionalidade de editar um produto
    // TODO: Adicioanar a funcionalidade de deletar um produto
    // TODO: Adicioanar a funcionalidade de visualizar os detalhes do produto ( mostrar roteamento )
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

            {Array.from({length: 20}).map((_, index) => (
                <div className='dash-item' key={index}>
                    <div>
                        <h3>Nome:  {index}</h3>
                        <p>Preço: {index}</p>
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