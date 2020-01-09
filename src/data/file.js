import overview from '../assets/overview.svg';
import walletAllpayment from '../assets/wallet-allpayment.svg';
import walletReconpayment from '../assets/wallet-reconpayment.svg';
import walletUnreconpayment from '../assets/wallet-unreconpayment.svg';
import manualSettlements from '../assets/manual-settlements.svg';
import allOrders from '../assets/all-orders.svg';
import pendingOrders from '../assets/pending-orders.svg';
import reconcilledOrders from '../assets/reconcilled-orders.svg';
import merchantProfile from '../assets/merchant-profile.svg';


const file = {
  navItems: {
    logoTitle: 'TransMonitor',
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
          path: '/all-payments'
        },
        {
          icon: walletReconpayment,
          linkName: 'Reconcilled Payments',
          path: '/reconcilled-payments'
        },
        {
          icon: walletUnreconpayment,
          linkName: 'Un-Reconcilled Payments',
          path: '/unreconcilled-payments'
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
          icon: allOrders,
          linkName: 'All Orders',
          path: '/all-orders'
        },
        {
          icon: pendingOrders,
          linkName: 'Pending Orders',
          path: '/pending-orders'
        },
        {
          icon: reconcilledOrders,
          linkName: 'Reconcilled Orders',
          path: '/reconcilled-orders'
        },
        {
          icon: merchantProfile,
          linkName: 'Merchant Profile',
          path: '/merchant-profile'
        },
      ]
    }
  },
  transactionSummary: {
    daily: [
      {
        label: 'Daily Transaction Volume',
        value: '2,342'
      },
      {
        label: 'Daily Transaction Value',
        value: 'N4,000,000'
      }
    ],
    total: [
      {
        label: 'Total Transaction Volume',
        value: '452,000'
      },
      {
        label: 'Total Transaction Value',
        value: 'N4,000,000'
      }
    ]
  }
}

export default file;
