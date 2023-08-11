import css from './linkSection.module.css'
import sprite  from '../../images/sprite.svg'
import Pdf from '../../docs/James Lynch Front-End resume.pdf';


const Links = () => {
  return (
      <div className = "section_column" id = "my-info">
        <div>
 <h1 className = "heading">Links</h1>
            <ul className={css.intro__list}>
                <li className={css.intro__item}>
                <a
                        className={css.intro__link}
                  href= {Pdf}
                  download
                >
                   <svg width="40" height="40" fill="white">
                    <use href=   {sprite + `#icon-resume`}></use>
                  </svg>
                        <p className={css.intro__link_text}>Download <br />resume</p>
                </a>
              </li>
                <li className={css.intro__item}>
                <a
                        className={css.intro__link}
                  href="https://github.com/jiml268"
                  target="_blank" rel="noreferrer"
                >
                  <svg width="40" height="40" fill="white">
                    <use href=   {sprite + `#icon-github`}></use>
                  </svg>
                        <p className={css.intro__link_text}>GitHub</p>
                </a>
              </li>
                <li className={css.intro__item}>
                <a
                        className={css.intro__link}
                  href="http://www.linkedin.com/in/james-lynch-841a4a7b/"
                  target="_blank" rel="noreferrer"
                >
                  <svg width="40" height="40" fill="white">
                    <use href=  {sprite + `#icon-linkedin`}></use>
                  </svg>
                        <p className={css.intro__link_text}>linkedin</p>
                </a>
              </li>
            </ul>     
</div>
     </div>
    )
}

export default Links