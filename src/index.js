import './styles.css';
import Collapsible from './Collapsible';

const app = document.getElementById('app');

const content1 = `
  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
`;

const container1 = document.createElement('div');
app.appendChild(container1);

new Collapsible({
  container: container1,
  buttonText: 'Collapse',
  content: content1,
});

// Для демонстрации можно добавить ещё виджетов с разным содержимым
const container2 = document.createElement('div');
container2.style.marginTop = '20px';
app.appendChild(container2);

new Collapsible({
  container: container2,
  buttonText: 'Collapse',
  content: '<p>Ещё один collapsible виджет с другим текстом.</p>'
});
