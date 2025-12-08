import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import BuyerLayout from '../components/layout/BuyerLayout';
import SupplierLayout from '../components/layout/SupplierLayout';
import AdminLayout from '../components/layout/AdminLayout';

const HomePage = lazy(() => import('../pages/home/page'));
const ProductsPage = lazy(() => import('../pages/products/page'));
const ProductDetailPage = lazy(() => import('../pages/product-detail/page'));
const SuppliersPage = lazy(() => import('../pages/suppliers/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

// Auth Pages
const LoginPage = lazy(() => import('../pages/auth/login/page'));
const RegisterPage = lazy(() => import('../pages/auth/register/page'));
const SupplierRegisterPage = lazy(() => import('../pages/auth/supplier-register/page'));
const ForgotPasswordPage = lazy(() => import('../pages/auth/forgot-password/page'));
const VerifyEmailPage = lazy(() => import('../pages/auth/verify-email/page'));
const AdminLoginPage = lazy(() => import('../pages/auth/admin-login/page'));

// Buyer Pages
const BuyerDashboardPage = lazy(() => import('../pages/buyer/dashboard/page'));
const BuyerProfilePage = lazy(() => import('../pages/buyer/profile/page'));
const CompanyProfilePage = lazy(() => import('../pages/buyer/company/page'));
const BuyerRFQPage = lazy(() => import('../pages/buyer/rfq/page'));
const BuyerOrdersPage = lazy(() => import('../pages/buyer/orders/page'));
const BuyerMessagesPage = lazy(() => import('../pages/buyer/messages/page'));
const InquiryListPage = lazy(() => import('../pages/buyer/inquiry-list/page'));

// Supplier Pages
const SupplierDashboardPage = lazy(() => import('../pages/supplier/dashboard/page'));
const SupplierProductsPage = lazy(() => import('../pages/supplier/products/page'));
const SupplierInquiriesPage = lazy(() => import('../pages/supplier/inquiries/page'));
const SupplierOrdersPage = lazy(() => import('../pages/supplier/orders/page'));
const SupplierMessagesPage = lazy(() => import('../pages/supplier/messages/page'));
const SupplierCompanyPage = lazy(() => import('../pages/supplier/company/page'));
const SupplierAnalyticsPage = lazy(() => import('../pages/supplier/analytics/page'));
const SupplierReviewsPage = lazy(() => import('../pages/supplier/reviews/page'));

// Admin Pages
const AdminDashboardPage = lazy(() => import('../pages/admin/dashboard/page'));
const AdminBuyersPage = lazy(() => import('../pages/admin/buyers/page'));
const AdminSuppliersPage = lazy(() => import('../pages/admin/suppliers/page'));
const AdminProductsPage = lazy(() => import('../pages/admin/products/page'));
const AdminCategoriesPage = lazy(() => import('../pages/admin/categories/page'));
const AdminOrdersPage = lazy(() => import('../pages/admin/orders/page'));
const AdminContentPage = lazy(() => import('../pages/admin/content/page'));
const AdminSupportPage = lazy(() => import('../pages/admin/support/page'));
const AdminDisputesPage = lazy(() => import('../pages/admin/disputes/page'));
const AdminAnalyticsPage = lazy(() => import('../pages/admin/analytics/page'));
const AdminSettingsPage = lazy(() => import('../pages/admin/settings/page'));

// Public Pages
const PricingPage = lazy(() => import('../pages/pricing/page'));
const RankingPage = lazy(() => import('../pages/ranking/page'));
const TopRankingPage = lazy(() => import('../pages/top-ranking/page'));
const ReadyToShipPage = lazy(() => import('../pages/ready-to-ship/page'));
const GlobalLogisticsPage = lazy(() => import('../pages/global-logistics/page'));
const BuyerCentralPage = lazy(() => import('../pages/buyer-central/page'));
const SupplierHubPage = lazy(() => import('../pages/supplier-hub/page'));
const RFQServicePage = lazy(() => import('../pages/rfq-service/page'));
const BuyersPage = lazy(() => import('../pages/buyers/page'));
const TradeShowsPage = lazy(() => import('../pages/trade-shows/page'));
const NewsPage = lazy(() => import('../pages/news/page'));
const TrustPage = lazy(() => import('../pages/trust/page'));
const HelpPage = lazy(() => import('../pages/help/page'));
const TermsPage = lazy(() => import('../pages/terms/page'));
const PrivacyPage = lazy(() => import('../pages/privacy/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const BecomeSupplierPage = lazy(() => import('../pages/become-supplier/page'));
const SupplierProfilePage = lazy(() => import('../pages/supplier-profile/page'));
const CategoriesPage = lazy(() => import('../pages/categories/page'));

// New Pages
const PressPage = lazy(() => import('../pages/press/page'));
const InsightsPage = lazy(() => import('../pages/insights/page'));
const PartnersPage = lazy(() => import('../pages/partners/page'));
const AcademyPage = lazy(() => import('../pages/academy/page'));
const CareersPage = lazy(() => import('../pages/careers/page'));
const InvestorsPage = lazy(() => import('../pages/investors/page'));
const TradeAssurancePage = lazy(() => import('../pages/trade-assurance/page'));
const ReportAbusePage = lazy(() => import('../pages/report/page'));
const DisputesPage = lazy(() => import('../pages/disputes/page'));
const LogisticsPage = lazy(() => import('../pages/logistics/page'));
const InspectionPage = lazy(() => import('../pages/inspection/page'));

const routes: RouteObject[] = [
  // Public Routes with MainLayout
  {
    path: '/',
    element: <MainLayout><HomePage /></MainLayout>,
  },
  {
    path: '/products',
    element: <MainLayout><ProductsPage /></MainLayout>,
  },
  {
    path: '/product/:id',
    element: <MainLayout><ProductDetailPage /></MainLayout>,
  },
  {
    path: '/suppliers',
    element: <MainLayout><SuppliersPage /></MainLayout>,
  },
  {
    path: '/supplier/:id',
    element: <MainLayout><SupplierProfilePage /></MainLayout>,
  },
  {
    path: '/categories',
    element: <MainLayout><CategoriesPage /></MainLayout>,
  },
  {
    path: '/pricing',
    element: <MainLayout><PricingPage /></MainLayout>,
  },
  {
    path: '/ranking',
    element: <MainLayout><RankingPage /></MainLayout>,
  },
  {
    path: '/top-ranking',
    element: <MainLayout><TopRankingPage /></MainLayout>,
  },
  {
    path: '/ready-to-ship',
    element: <MainLayout><ReadyToShipPage /></MainLayout>,
  },
  {
    path: '/global-logistics',
    element: <MainLayout><GlobalLogisticsPage /></MainLayout>,
  },
  {
    path: '/buyer-central',
    element: <MainLayout><BuyerCentralPage /></MainLayout>,
  },
  {
    path: '/supplier-hub',
    element: <MainLayout><SupplierHubPage /></MainLayout>,
  },
  {
    path: '/rfq-service',
    element: <MainLayout><RFQServicePage /></MainLayout>,
  },
  {
    path: '/buyers',
    element: <MainLayout><BuyersPage /></MainLayout>,
  },
  {
    path: '/trade-shows',
    element: <MainLayout><TradeShowsPage /></MainLayout>,
  },
  {
    path: '/news',
    element: <MainLayout><NewsPage /></MainLayout>,
  },
  {
    path: '/trust',
    element: <MainLayout><TrustPage /></MainLayout>,
  },
  {
    path: '/help',
    element: <MainLayout><HelpPage /></MainLayout>,
  },
  {
    path: '/faq',
    element: <MainLayout><HelpPage /></MainLayout>,
  },
  {
    path: '/terms',
    element: <MainLayout><TermsPage /></MainLayout>,
  },
  {
    path: '/privacy',
    element: <MainLayout><PrivacyPage /></MainLayout>,
  },
  {
    path: '/about',
    element: <MainLayout><AboutPage /></MainLayout>,
  },
  {
    path: '/contact',
    element: <MainLayout><ContactPage /></MainLayout>,
  },
  {
    path: '/become-supplier',
    element: <MainLayout><BecomeSupplierPage /></MainLayout>,
  },
  // New Routes
  {
    path: '/press',
    element: <MainLayout><PressPage /></MainLayout>,
  },
  {
    path: '/insights',
    element: <MainLayout><InsightsPage /></MainLayout>,
  },
  {
    path: '/partners',
    element: <MainLayout><PartnersPage /></MainLayout>,
  },
  {
    path: '/academy',
    element: <MainLayout><AcademyPage /></MainLayout>,
  },
  {
    path: '/careers',
    element: <MainLayout><CareersPage /></MainLayout>,
  },
  {
    path: '/investors',
    element: <MainLayout><InvestorsPage /></MainLayout>,
  },
  {
    path: '/trade-assurance',
    element: <MainLayout><TradeAssurancePage /></MainLayout>,
  },
  {
    path: '/report',
    element: <MainLayout><ReportAbusePage /></MainLayout>,
  },
  {
    path: '/disputes',
    element: <MainLayout><DisputesPage /></MainLayout>,
  },
  {
    path: '/logistics',
    element: <MainLayout><LogisticsPage /></MainLayout>,
  },
  {
    path: '/inspection',
    element: <MainLayout><InspectionPage /></MainLayout>,
  },
  // Auth Routes (no layout)
  {
    path: '/auth/login',
    element: <LoginPage />,
  },
  {
    path: '/auth/register',
    element: <RegisterPage />,
  },
  {
    path: '/auth/supplier-register',
    element: <SupplierRegisterPage />,
  },
  {
    path: '/auth/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/auth/verify-email',
    element: <VerifyEmailPage />,
  },
  {
    path: '/auth/admin-login',
    element: <AdminLoginPage />,
  },
  // Buyer Routes with BuyerLayout
  {
    path: '/buyer/dashboard',
    element: <BuyerLayout><BuyerDashboardPage /></BuyerLayout>,
  },
  {
    path: '/buyer/profile',
    element: <BuyerLayout><BuyerProfilePage /></BuyerLayout>,
  },
  {
    path: '/buyer/company',
    element: <BuyerLayout><CompanyProfilePage /></BuyerLayout>,
  },
  {
    path: '/buyer/rfq',
    element: <BuyerLayout><BuyerRFQPage /></BuyerLayout>,
  },
  {
    path: '/buyer/orders',
    element: <BuyerLayout><BuyerOrdersPage /></BuyerLayout>,
  },
  {
    path: '/buyer/messages',
    element: <BuyerLayout><BuyerMessagesPage /></BuyerLayout>,
  },
  {
    path: '/buyer/inquiry-list',
    element: <BuyerLayout><InquiryListPage /></BuyerLayout>,
  },
  // Supplier Routes with SupplierLayout
  {
    path: '/supplier/dashboard',
    element: <SupplierLayout><SupplierDashboardPage /></SupplierLayout>,
  },
  {
    path: '/supplier/products',
    element: <SupplierLayout><SupplierProductsPage /></SupplierLayout>,
  },
  {
    path: '/supplier/inquiries',
    element: <SupplierLayout><SupplierInquiriesPage /></SupplierLayout>,
  },
  {
    path: '/supplier/orders',
    element: <SupplierLayout><SupplierOrdersPage /></SupplierLayout>,
  },
  {
    path: '/supplier/messages',
    element: <SupplierLayout><SupplierMessagesPage /></SupplierLayout>,
  },
  {
    path: '/supplier/company',
    element: <SupplierLayout><SupplierCompanyPage /></SupplierLayout>,
  },
  {
    path: '/supplier/analytics',
    element: <SupplierLayout><SupplierAnalyticsPage /></SupplierLayout>,
  },
  {
    path: '/supplier/reviews',
    element: <SupplierLayout><SupplierReviewsPage /></SupplierLayout>,
  },
  // Admin Routes with AdminLayout
  {
    path: '/admin/dashboard',
    element: <AdminLayout><AdminDashboardPage /></AdminLayout>,
  },
  {
    path: '/admin/buyers',
    element: <AdminLayout><AdminBuyersPage /></AdminLayout>,
  },
  {
    path: '/admin/suppliers',
    element: <AdminLayout><AdminSuppliersPage /></AdminLayout>,
  },
  {
    path: '/admin/products',
    element: <AdminLayout><AdminProductsPage /></AdminLayout>,
  },
  {
    path: '/admin/categories',
    element: <AdminLayout><AdminCategoriesPage /></AdminLayout>,
  },
  {
    path: '/admin/orders',
    element: <AdminLayout><AdminOrdersPage /></AdminLayout>,
  },
  {
    path: '/admin/content',
    element: <AdminLayout><AdminContentPage /></AdminLayout>,
  },
  {
    path: '/admin/support',
    element: <AdminLayout><AdminSupportPage /></AdminLayout>,
  },
  {
    path: '/admin/disputes',
    element: <AdminLayout><AdminDisputesPage /></AdminLayout>,
  },
  {
    path: '/admin/analytics',
    element: <AdminLayout><AdminAnalyticsPage /></AdminLayout>,
  },
  {
    path: '/admin/settings',
    element: <AdminLayout><AdminSettingsPage /></AdminLayout>,
  },
  {
    path: '*',
    element: <MainLayout><NotFoundPage /></MainLayout>,
  },
];

export default routes;
