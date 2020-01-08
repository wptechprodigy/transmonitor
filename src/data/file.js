import overview from '../assets/overview.svg';
import walletAllpayment from '../assets/wallet-allpayment.svg';
import walletReconpayment from '../assets/wallet-reconpayment.svg';
import walletUnreconpayment from '../assets/wallet-unreconpayment.svg';
import manualSettlements from '../assets/manual-settlements.svg';

const file = {
  navItems: {
    logoTitle: 'Transmonitor',
    navLinks: [
      {
        name: 'Support',
        path: '/support'
      },
      {
        name: 'FAQ',
        path: '/faq'
      }
    ]
  },
  sideBarItems: {
    mainCategory: {
      name: 'Main',
      links: [
        {
          icon: overview,
          linkName: 'Overview',
          path: '/',
          active: 'true'
        }
      ]
    },
    paymentCategory: {
      name: 'Payment',
      links: [
        {
          icon: walletAllpayment,
          linkName: 'All Payments',
          path: '/'
        },
        {
          icon: walletReconpayment,
          linkName: 'Reconcilled Payments',
          path: '/reconcilled'
        },
        {
          icon: walletUnreconpayment,
          linkName: 'Un-Reconcilled Payments',
          path: '/unreconcilled'
        },
        {
          icon: manualSettlements,
          linkName: 'Manual Settlements',
          path: '/manual-settlements'
        },
      ]
    },
    OrdersCategory: {
      name: 'Orders',
      links: [
        {
          icon: '',
          linkName: 'All Orders',
          path: '/'
        },
        {
          icon: '',
          linkName: 'Pending Orders',
          path: '/pending-orders'
        },
        {
          icon: '',
          linkName: 'Reconcilled Orders',
          path: '/reconcilled-orders'
        },
        {
          icon: '',
          linkName: 'Merchant Profile',
          path: '/merchant-profile'
        },
      ]
    }
  }
}

export default file;
