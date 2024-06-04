function App() {
  const navlinkItems = [
    { label: 'Главная', href: '/' },
    { label: 'О нас', href: '/about' },
    { label: 'Контакты', href: '/contacts' },
    // add more items here
  ];
  
  const content = (
      <ul className="nav">
        {navlinkItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
  );
  return(
    content
  );
}

export default App;
