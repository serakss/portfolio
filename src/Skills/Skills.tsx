import {Skill} from "./Skill/Skill"
import s from "./Skills.module.css"


export function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"Js"}
                           description={"fddfdfvvvvvvvvvvvvvvvvvvvvvvvvvv"}
                    />
                    <Skill title={"CSS"}
                           description={"ffffffffvvvvvvvcccccccccccccccccccccc"}/>
                    <Skill title={"React"}
                           description={"gfffffffdssssssssssssssssssssss;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"}/>

                </div>
            </div>
        </div>
    )
}