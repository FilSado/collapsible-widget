export default class Collapsible {
  constructor({ container, buttonText = 'Collapse', content }) {
    this.container = container;
    this.buttonText = buttonText;
    this.content = content;

    this._render();
    this._attachEvents();
  }

  _render() {
    // Создаём кнопку
    this.button = document.createElement('button');
    this.button.textContent = this.buttonText;
    this.button.className = 'collapsible-button';

    // Создаём контейнер для контента
    this.contentWrapper = document.createElement('div');
    this.contentWrapper.className = 'collapsible-content';
    this.contentWrapper.style.maxHeight = '0px';
    this.contentWrapper.style.overflow = 'hidden';
    this.contentWrapper.style.transition = 'max-height 0.3s ease';

    if (typeof this.content === 'string') {
      this.contentWrapper.innerHTML = this.content;
    } else if (this.content instanceof HTMLElement) {
      this.contentWrapper.appendChild(this.content);
    }

    this.container.appendChild(this.button);
    this.container.appendChild(this.contentWrapper);

    // Состояние - свернуто
    this.isOpen = false;
  }

  _attachEvents() {
    this.button.addEventListener('click', () => this.toggle());
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.contentWrapper.style.maxHeight = this.contentWrapper.scrollHeight + 'px';
    this.isOpen = true;
    this.button.textContent = 'Collapse';
  }

  close() {
    this.contentWrapper.style.maxHeight = '0px';
    this.isOpen = false;
    this.button.textContent = 'Expand';
  }
}
