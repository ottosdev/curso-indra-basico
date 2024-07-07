import styles from '../Footer/footer.module.css';

export default function Footer() {
    // TODO: Buscar os dados do contexto do usuario
    return (
        <div className={styles.footer}>
            <span> Criado por: Otto </span>
        </div>
    )
}