import style from "./Nav.module.css"


export function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Главная</a>
            <a href="">Скилы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    )
}