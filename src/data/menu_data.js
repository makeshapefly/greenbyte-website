export const menu_data = [
  {
    id: 1,
    title: 'Home',
    link: 'home',
  },
  {
    id: 2,
    title: 'About',
    link: 'about',
  },
  {
    id: 3,
    title: 'NetZero',
    link: 'netZero',
  },
  {
    id: 4,
    hasDropdown:true,
    title: 'Projects',
    link: '/carbon-market',
    submenus: [
      { title: 'Carbon Markets' , link:'/carbon-market/'},
      { title: 'Retrofit' , link:'/retrofit/'},
      { title: 'Great Collaboration' , link:'/greatcollab/'},
    ]
  },
  {
    id: 5,
    title: 'Blog',
    link:'blog',
  },
  {
    id: 6,
    title: 'Contact Us',
    link: 'contact',
  }
]
// menu data 2
export const menu_data_2 = [
  {
    id: 1,
    hasDropdown: true,
    title: 'Home',
    link: 'home',
    submenus: [
      { title: 'Home One', link: '/' },
      { title: 'Home Two', link: '/home-2/' },
      { title: 'Home Three', link: '/home-3/' },
    ]
  },
  {
    id: 2,
    title: 'Choose',
    link: 'choose',
  },
  {
    id: 3,
    title: 'About',
    link: 'about',
  },
  {
    id: 4,
    title: 'Team',
    link: 'team',
  },
  {
    id: 5,
    title: 'Road Map',
    link: 'roadmap',
  },
  {
    id: 6,
    hasDropdown: true,
    title: 'Blog',
    link: '/blog',
    submenus: [
      { title: 'Blog', link: '/blog/' },
      { title: 'Blog Details', link: '/blog-details/' },
    ]
  },
]

// menu data 2
export const menu_data_3 = [
  {
    id: 1,
    hasDropdown: true,
    title: 'Home',
    link: 'home',
    submenus: [
      { title: 'Home One', link: '/' },
      { title: 'Home Two', link: '/home-2/' },
      { title: 'Home Three', link: '/home-3/' },
    ]
  },
  {
    id: 2,
    title: 'Collection',
    link: 'collection',
  },
  {
    id: 3,
    title: 'Choose',
    link: 'choose',
  },
  {
    id: 4,
    title: 'About',
    link: 'about',
  },
  {
    id: 5,
    title: 'Road Map',
    link: 'roadmap',
  },
  {
    id: 6,
    hasDropdown: true,
    title: 'Blog',
    link: '/blog',
    submenus: [
      { title: 'Blog', link: '/blog/' },
      { title: 'Blog Details', link: '/blog-details/' },
    ]
  },
]