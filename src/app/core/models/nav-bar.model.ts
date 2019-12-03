/** Link of the nav bar */
export interface NavData {
    /** Lnk to go on the web site */
    link: string;
    /** Class to add style */
    class: string;
    /** Class to add style on active link */
    activateClass: string;
    /** Optional icon if there are icon */
    icon?: string;
    /** Optional text if there are text */
    text?: string;
    /** Title of the link */
    title: string;
}

/** Icons from FontAwesome */
export interface IconsFa {
    /** Home icon */
    faHomeLanding: any;
    /** HTML5 icon */
    faHTMLLanding: any;
    /** CSS3 icon */
    faCSSLanding: any;
    /** Angular icon */
    faAngularLanding: any;
    /** JavaScript icon */
    faJsLanding: any;
}
