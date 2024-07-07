import {CgDetailsMore} from "react-icons/cg";
import {IoMdTrash} from "react-icons/io";
import {IoPencil} from "react-icons/io5";

import styles from '../Dashboard/dashboard.module.css';

export default function DashBoard() {
    // TODO: Buscar os dados do produtos
    // TODO: Adicioanar a funcionalidade de adicionar um novo produto
    // TODO: Adicioanar a funcionalidade de editar um produto
    // TODO: Adicioanar a funcionalidade de deletar um produto
    // TODO: Adicioanar a funcionalidade de visualizar os detalhes do produto ( mostrar roteamento )


    return (
        <div className={styles.dashboard}>
            <div className={styles.dashHeader}>
                <h2>Listagem de Items</h2>

                <form className={styles.form}>
                    <input className={styles.input} placeholder='Nome do item'/>
                    <input className={styles.input} placeholder='Preço'/>
                    <button className={styles.dashAdd}>+ Adicionar Item</button>
                </form>
            </div>
            {Array.from({length: 5}).map((_, index) => (
                <div className={styles.dashItem} key={index}>
                    <div>
                        <h3>Nome {index}</h3>
                        <p>Preço: {index}</p>
                    </div>

                    <div className={styles.dashItemActions}>
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