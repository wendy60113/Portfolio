import React from "react";
import styles from "./styles.module.css";
import { BiLogoHtml5,BiLogoJavascript,BiLogoVuejs,BiLogoReact,BiLogoCss3,BiLogoSass,
    BiCode,BiLogoNodejs,BiLogoGit
} from "react-icons/bi";
import { SiMysql,SiAdobeillustrator,SiAdobephotoshop,SiAdobexd,SiAdobeaftereffects,SiAdobepremierepro } from "react-icons/si";
import { CgFigma } from "react-icons/cg";



const skillData=[
    {
        title:'程式',
        list:
        [
            {
                title:'HTML',
                icon:(<BiLogoHtml5/>)
            },
            {
                title:'Javascript',
                icon:(<BiLogoJavascript/>)
            },
            {
                title:'Vue.js',
                icon:(<BiLogoVuejs/>)
            },
            {
                title:'React.js',
                icon:(<BiLogoReact/>)
            },
            {
                title:'CSS',
                icon:(<BiLogoCss3/>)
            },
            {
                title:'Sass',
                icon:(<BiLogoSass/>)
            },
            {
                title:'Restful API',
                icon:(<BiCode/>)
            },
            {
                title:'mySQL',
                icon:(<SiMysql/>)
            },
            {
                title:'node.js',
                icon:(<BiLogoNodejs/>)
            },
            {
                title:'GIT',
                icon:(<BiLogoGit/>)
            }
        ]
    },
    {
        title:'設計',
        list:
        [
            {
                title:'Figma',
                icon:(<CgFigma/>)
            },
            {
                title:'Illustrator',
                icon:(<SiAdobeillustrator/>)
            },
            {
                title:'Photoshop',
                icon:(<SiAdobephotoshop/>)
            },
            {
                title:'XD',
                icon:(<SiAdobexd/>)
            },
            {
                title:'After Effects',
                icon:(<SiAdobeaftereffects/>)
            },
            {
                title:'Premiere',
                icon:(<SiAdobepremierepro/>)
            },
        ]
    }
]

export default function SkillPage(){
    return(
        <section className={styles.container}>
            <label className={styles.title}>技術能力</label>
            {skillData.map((item,idx)=>(
                <div className={styles.skillSection} key={'skillsection-'+idx}>
                    <label className={styles.title} >{item.title}</label>
                    <div className={styles.row}>
                        {item.list.map((skills,idx)=>(
                            <div className={styles.col} key={'skillicons-'+idx}>
                                <h5 className={styles.icon}>{skills.icon}</h5>
                                <span>{skills.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}