/* eslint-disable react/jsx-no-target-blank */
import css from './projects.module.css';
import sprite from '../../images/sprite.svg'


function Projects(props) {


   let classNames = "";
  if (props.title === "Indiviual Projects")  {
    classNames = `scroolChild  ${css.portfolio} ${css.portfolio__pad}  ${css.wave_top}`;
  } else {
    classNames= `${css.portfolio}`
 
  }
    return (
        <div  className="scrollParent">
          <section className={classNames}   id="Portfolio"> :
          {props.title === "Indiviual Projects" ?
            <h2 className="heading">Portfolio</h2> : ""}
            
                <div>
            <h3 className={css.portfolio__type}> {props.title}</h3>           
                    <ul className={css.portfolio__list}>
                {
                props.holdDate.map((data, key) => {
                  const imageFile = data.image
                  console.log(imageFile)
            return (
                <li key={key}  className={css.portfolio__item}>
                    <h3 className={css.portfolio__item_header}>{data.title}</h3>   
                <img
                        src={process.env.PUBLIC_URL + `/${data.image}`}
                        alt="not found"
                        width="175px"
                        height="175px"
                        className={css.portfolio__image}
                    />   
                    <div className={css.portfolio__skills}>
                         <ul className={css.portfolio__list}>
                     {
        data.skills.map((data, key) => {
            return ( 
                <li key={key} className={css.portfolio__item__skill}>
                    
                <h3 className = {css.skills_header}> {data.skillName}</h3>
              <svg width="80" height="45">
                <use href= {sprite + `#${data.skillImage}`}></use>
              </svg>

         
                    </li>
 )

        })        
                            }
                            </ul>
                    </div>
                    <p className={css.portfolio__desc}>
             {data.desc}
            </p>
                    <div className={css.portfolio__buttons}>
              <a
                            className={css.portfilio__link}
                            href={data.liveLink}
                target="_blank"
              >
                            <button className={css.portfilio__link_button}>Live</button>
              </a>
              <a
                            className={css.portfilio__link}
                href={data.gitLink}
                target="_blank"
              >
                            <button className={css.portfilio__link_button}>source</button>
                        </a>    
              </div>          

                    
            </li>

        
        )

    })
                }
                </ul>


    </div>
</section>
         </div>
        );
}


export default Projects;