import css from './skills.module.css'
import { allSkills } from '../../data/skills'
import sprite  from '../../images/sprite.svg'
function Skills() {
    return (
        <div>
<section className = "section_column" >
       <div className="scrollParent">
        <div id="skills" className="scroolChild">

    
            <h2 className={css.skills__header}>Skills</h2>
            <ul className={css.skills__list}>
    {
        allSkills.map((data, key) => {
            return (
                <li key={key}  className={css.skills__item}>
                    <h3> {data.skill}</h3>
              <svg width="80" height="45">
                <use href= {sprite + `#${data.image}`}></use>
              </svg>
            </li>

        
        )

    })
                }
                    </ul>
                    </div>
                    </div>
            </section>
            </div>
)
}

export default Skills;