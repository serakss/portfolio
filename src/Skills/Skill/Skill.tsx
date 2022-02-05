import s from "./Skill.module.css"

type SkillType={
    title:string
    description:string
}

export function Skill(props:SkillType) {
    return (
        <div className={s.skill}>
            <div className={s.icon}> icon </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>

        </div>
            )
}

