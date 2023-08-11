import css from './aboutMe.module.css'
import Avatar from '../../images/James-lynch-avatar.png';
function AboutMe() {
  return (
  
    <div className="section_column">
      <div className="scrollParent">
        <div id="about-me" className="scroolChild">
        <h2 className={css.about__header}>About me</h2>
        <img src={Avatar} className={css.about__avatar} alt = "Avatar" />
        <p className={css.about_me_text}>
            I'm a developer with a skill for building relationships. Having
            worked closely with Property Manager's and Building tenants in the
            security industry for the majority of my career. I bring a
            user-centered focus and drive to each and every web project to
            create a memorable experience. I'm a lifelong learner that's always
            looking to expand my knowledge.
          </p>
      </div>
      </div>
    </div>
)
}

export default AboutMe;