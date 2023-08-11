import css from './intro.module.css'

function Intro() {

    function changeFontColor(e) {
        if (e.target.style.color === 'black') {
            e.target.style.color = 'gray'
        } else { e.target.style.color = 'black' }
    }

    function changeFontColorName(e) {
        if (e.target.style.color === 'blue') {
            e.target.style.color = '#735CAD'
        } else { e.target.style.color = 'blue' }
    }
    return (
               <div className="scrollParent">

        <div id="intro" className="scroolChild">

        <div className={`${css.intro_section} ${css.wave} ${css.intro} ` } >
            <h2>
                <span onMouseEnter={changeFontColor} className={css.change_color}>Hello. </span>
                <span onMouseEnter={changeFontColor} className={css.change_color}>I'm </span>
                <span  onMouseEnter={changeFontColorName} className={css.change_color_name}> James </span
                ><span onMouseEnter={changeFontColorName} className={css.change_color_name}>Lynch</span>
            </h2>
            <h2>
                <span onMouseEnter={changeFontColor} className={css.change_color}>I'm </span>
                <span onMouseEnter={changeFontColor} className={css.change_color}>a </span>
                <span onMouseEnter={changeFontColor} className={css.change_color}>Front-end </span>
                <span onMouseEnter={changeFontColor} className={css.change_color}>Developer </span>
            </h2>
            </div>
            </div>
            </div>

    );
}

export default Intro;