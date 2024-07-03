
interface Props {
    titulo: string;
}

export default function Header(props: Props) {
    // TODO: Buscar a url da imagem no contexto do usuario
    return (
        <header className='header'>
            <h1>{props.titulo}</h1>
            <div className='avatar'>
                <img className='avatar-image' src='https://avatars.githubusercontent.com/u/40772424?v=4' alt='Avatar'/>
            </div>
        </header>
    )
}