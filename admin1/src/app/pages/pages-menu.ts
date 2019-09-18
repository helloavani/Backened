import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/newhome',
    home: true,
  },
  {
    title: 'ADMINISTRATION',
    group: true,
  },
  
  {
    title: 'Users',
    icon: 'ion-person-stalker',
    children: [
      {
        title: 'Add User',
        link: '/pages/users/add-user',
      },
      {
        title: 'View Users',
        link: '/pages/users/view-users',
      },
      {
        title: 'View Vendors',
        link: '/pages/users/view-vendors',
      },
    ],
  },
  
    {
    title: 'Products',
    icon: 'fa fa-shopping-cart',
    children: [
      {
        title: 'Add Products',
        link: '/pages/products/add-product',
      },
      {
        title: 'View Products',
        link: '/pages/products/view-products',
      },
    ],
  },
   {
    title: 'Brands',
    icon: 'fa fa-wpexplorer',
    children: [
      {
        title: 'Add Brands',
        link: '/pages/brands/add-brand',
      },
      {
        title: 'View Brands',
        link: '/pages/brands/view-brands',
      },
    ],
  },
  {
    title: 'Categories',
    icon: 'fa fa-sitemap',
    children: [
      {
        title: 'Add Category',
        link: '/pages/categories/add-category',
      },
      {
        title: 'View Categories',
        link: '/pages/categories/view-categories',
      },
    ],
  },
    {
    title: 'Orders',
    icon: 'fa fa-sitemap',
    children: [
      {
        title: 'Place Order',
        link: '/pages/orders/add-order',
      },
      {
        title: 'View Orders',
        link: '/pages/orders/view-orders',
      },
    ],
  },

];
