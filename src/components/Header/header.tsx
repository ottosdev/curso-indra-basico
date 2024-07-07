import styles from '../Header/header.module.css';
interface Props {
    titulo: string;
}

export default function Header(props: Props) {
    // TODO: Buscar a url da imagem no contexto do usuario
    return (
        <header className={styles.header}>
            <h1>{props.titulo}</h1>
            <div className={styles.avatar}>
                <img className={styles.avatarImage} src='https://avatars.githubusercontent.com/u/40772424?v=4' alt='Avatar'/>
            </div>
        </header>
    )
}