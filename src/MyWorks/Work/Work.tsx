import s from "./Work.module.css"


export function Work (){
    return(
        <div className={s.work}>
           <div className={s.img}>
           <button className={s.button}>Смотреть</button>
           </div>
           <div className={s.description}>
           <div className={s.projectName}>Название проектаfffffffffffffffffffffffffffffffffffffffffffffffffff</div>
           <div className={s.projectDescription}>Описание проекта</div>
           </div>


        </div>
    )
}