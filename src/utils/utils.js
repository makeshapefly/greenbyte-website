export function tg_theme_toggler() {
  const toggle_class = document.querySelector('.modeSwitch')
  toggle_class.addEventListener('change',()=> {
    toggleTheme();
  })

  // set toggle theme scheme
  function tg_set_scheme(tg_theme) {
      localStorage.setItem('tg_theme_scheme', tg_theme);
      document.documentElement.setAttribute("tg-theme", tg_theme);
  }

  // toggle theme scheme
  function toggleTheme() {
      if (localStorage.getItem('tg_theme_scheme') === 'dark') {
          tg_set_scheme('light');
      } else {
          tg_set_scheme('dark');
      }
  }

  // set the first theme scheme
  function tg_init_theme() {
      if (localStorage.getItem('tg_theme_scheme') === 'dark') {
          tg_set_scheme('dark');
          document.querySelector('.modeSwitch').checked = true;
      } else {
          tg_set_scheme('light');
          document.querySelector('.modeSwitch').checked = false;
      }
  }
  tg_init_theme();
}