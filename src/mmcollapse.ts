/*!
* mmcollapse - v0.0.2
* another collapse plugin
* https://github.com/onokumus/mmcollapse#readme
*
* Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* Under MIT License
*/

class MMCollapse {
  protected root: HTMLElement;
  protected isTransitioning!: boolean;
  constructor(element: Element) {
    this.root = element as HTMLElement;
  }

  toggle() {
    if (this.root.classList.contains('mm-show')) {
      this.hide()
    } else {
      this.show();
    }
  }

  show() {
    if (this.isTransitioning || this.root.classList.contains('mm-show')) {
      return;
    }
    this.root.style.height = '0px';
    this.root.classList.remove('mm-collapse');
    this.root.classList.remove('mm-show');
    this.root.classList.add('mm-collapsing');

    this.isTransitioning = true;

    this.root.classList.add('mm-collapse');
    this.root.classList.add('mm-show');

    this.root.style.height = `${this.root.scrollHeight}px`;

    const handleShowTransitionEnd = () => {
      this.root.classList.remove('mm-collapsing');
      this.root.style.height = '';
      this.root.removeEventListener('transitionend', handleShowTransitionEnd);
      this.isTransitioning = false;
    }

    this.root.addEventListener('transitionend', handleShowTransitionEnd);
  }

  hide() {
    if (this.isTransitioning || !this.root.classList.contains('mm-show')) {
      return;
    }

    this.root.style.height = `${this.root.getBoundingClientRect().height}px`;
    this.root.style.height = `${this.root.offsetHeight}px`;

    this.root.classList.add('mm-collapsing');
    this.root.classList.remove('mm-collapse');
    this.root.classList.remove('mm-show');
    this.isTransitioning = true;

    const handleHideTransitionEnd = () => {
      this.root.classList.remove('mm-collapsing');
      this.root.classList.add('mm-collapse');
      this.root.style.height = '';
      this.root.removeEventListener('transitionend', handleHideTransitionEnd);
      this.isTransitioning = false;
    }

    this.root.addEventListener('transitionend', handleHideTransitionEnd);
    this.root.style.height = '0px';
  }
}

// export = MMCollapse;
export default MMCollapse;
