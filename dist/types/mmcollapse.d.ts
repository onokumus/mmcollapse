/*!
* mmcollapse - v0.0.1
* another collapse plugin
* https://github.com/onokumus/mmcollapse#readme
*
* Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* Under MIT License
*/
declare class MMCollapse {
    protected root: HTMLElement;
    protected isTransitioning: boolean;
    constructor(element: Element);
    toggle(): void;
    show(): void;
    hide(): void;
}
export default MMCollapse;
