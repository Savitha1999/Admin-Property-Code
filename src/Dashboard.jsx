










import { useState } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from "./Navbar";
import LoginReport from "./LoginReport";
import AdminReport from "./AdminReport";
import Plan from "./Plan";
import Statistics from "./Statistics";
import AdminNotification from "./AdminNotification";
import AddCar from "./AddCar";
import AdminLog from "./AdminLog";
import AgentCar from "./AgentCar";
import AllCar from "./AllCar";
import ApprovedCar from "./ApprovedCar";
import Area from "./Places/Area";
import AssistPayLater from "./AssistPayLater";
import AssistPayU from "./AssistPayU";
import AssistSubscriber from "./AssistSubscriber";
import BaFreeBills from "./BaFreeBills";
import BaLoanLead from "./BaLoanLead";
import BuyerListInterestTriede from "./BuyerListInterestTriede";
import BuyerListInterest from "./BuyerListInteres";
import BuyersAssistant from "./BuyersAssistant";
import BuyersContacted from "./BuyersContacted";
import BuyersFollowUps from "./BuyersFollowUps";
import BuyersShortlized from "./BuyersShortlized";
import BuyersStatics from "./BuyersStatics";
import CallBackForm from "./CallBackForm";
import CarFollowUps from "./CarFollowUps";
import CarMake from "./CarMake";
import CarStatics from "./CarStatics";
import City from "./Places/City";
import CustomerCar from "./CustomerCar";
import DailyUsage from "./DailyUsage";
import DealerCar from "./DealerCar";
import Details from "./Details";
import District from "./Places/District";
import DownloadLeads from "./DownloadLeads";
import ExpireCar from "./ExpireCar";
import ExpiredAssistant from "./ExpiredAssistant";
import FreeBills from "./FreeBills";
import FreeCar from "./FreeCar";
import FreeUserLead from "./FreeUserLead";
import Help from "./Help";
import HelpLoanLead from "./HelpLoanLead";
import InsuranceLead from "./InsuranceLead";
import LastViewedCar from "./LastViewedCar";
import Limits from "./Limits";
import MatchedBuyer from "./MatchedBuyer";
import MobileViewLead from "./MobileViewLead";
import MyAccount from "./MyAccount";
import NewCarLead from "./NewCarLead";
import OfferesRaised from "./OfferesRaised";
import PaidBills from "./PaidBills";
import PaidCar from "./PaidCar";
import PayLater from "./PayLater";
import PaymentType from "./PaymentType";
import PayUMoney from "./PayUMoney";
import PendingCar from "./PendingCar";
import PhotoRequest from "./PhotoRequest";
import PreApprovedCar from "./PreApprovedCar";
import Profile from "./Profile";
import PucBanner from "./PucBanner";
import PucCar from "./PucCar";
import PucNumber from "./PucNumber";
import RecievedInterest from "./RecievedInterest";
import RemovedCar from "./RemovedCar";
import ReportedCar from "./ReportedCar";
import SearchCar from "./SearchCar";
import SearchedData from "./SearchedData";
import State from "./Places/State";
import Subscriber from "./Subscriber";
import TransferAssistant from "./TransferAssistant";
import TRansferFollowUps from "./TRansferFollowUps";
import TucBanner from "./TucBanner";
import UsageStatics from "./UsageStatics";
import UserRolls from "./UserRolls";
import UsersLog from "./UsersLog";
import Roll from "./Roll";
import CarModel from "./CarModel";
import UserList from "./Users/UserList";
import OfficeList from "./Office/OfficeList";
import BuyerPlan from "./BuyerPlans/BuyerPlan";
import PendingAssistant from "./PendingAssistant";
import BaPaidBill from "./BaPaidBill";
import AddPlan from './PricingPlan/AddPlan';
import EditProperty from './EditProperty';
import Detail from './Detail';
import AdminSetForm from './DataAddAdmin/AdminSetForm';
import InterestTables from './Detail/InterestTables';
import AddPropertyList from './AddPropertyList';
import FavoriteTable from './Detail/FavoriteTables';
import FavoriteTables from './Detail/FavoriteTables';
import NeedHelpLeadTable from './HelpLoanLead';
import ContactTables from './Detail/ContactTables';
import SoldOutTables from './Detail/SoldOutTables';
import ReportPropertyTables from './Detail/ReportPropertyTables';
import NeedHelpTables from './Detail/NeedHelpTables';
import GetBuyerAssistance from './GetBuyerAssistance';
const routes = [
  { path: "/loginreport", element: <LoginReport /> }, 
  { path: "/adminreport", element: <AdminReport /> },
  { path: "/plan", element: <AddPlan /> },
  { path: "/buyerplan", element: <BuyerPlan /> },
  { path: "/statistics", element: <Statistics /> },
  { path: "/admin-notification", element: <AdminNotification /> },
  { path: "/add-car", element: <AddCar /> },
  { path: "/adminlog", element: <AdminLog /> },
  { path: "/agent-car", element: <AgentCar /> },
  { path: "/all-car", element: <AllCar /> },
  { path: "/approved-car", element: <ApprovedCar /> },
  { path: "/assist-pay-later", element: <AssistPayLater /> },
  { path: "/assist-payu-money", element: <AssistPayU /> },
  { path: "/assist-subscriber", element: <AssistSubscriber /> },
  { path: "/ba-free-bills", element: <BaFreeBills /> },
  { path: "/ba-loan-lead", element: <BaLoanLead /> },
  { path: "/buyerlist-interest", element: <BuyerListInterest /> },
  { path: "/buyers-assistant", element: <BuyersAssistant /> },
  { path: "/buyers-contacted", element: <BuyersContacted /> },
  { path: "/buyers-follow-ups", element: <BuyersFollowUps /> },
  { path: "/buyers-shortlisted", element: <BuyersShortlized /> },
  { path: "/buyers-statics", element: <BuyersStatics /> },
  { path: "/callback-form", element: <CallBackForm /> },
  { path: "/car-follow-ups", element: <CarFollowUps /> },
  { path: "/car-make", element: <CarMake /> },
  { path: "/carstatics", element: <CarStatics /> },
  { path: "/city", element: <City /> },
  { path: "/customer-car", element: <CustomerCar /> },
  { path: "/daily-usage", element: <DailyUsage /> },
  { path: "/dealer-car", element: <DealerCar /> },
  { path: "/details", element: <Details /> },
  { path: "/district", element: <District /> },
  { path: "/downloadleads", element: <DownloadLeads /> },
  { path: "/expire-car", element: <ExpireCar /> },
  { path: "/expired-assistant", element: <ExpiredAssistant /> },
  { path: "/free-bills", element: <FreeBills /> },
  { path: "/free-car", element: <FreeCar /> },
  { path: "/free-user-lead", element: <FreeUserLead /> },
  { path: "/help", element: <Help /> },
  { path: "/help-loan-lead", element: <HelpLoanLead /> },
  { path: "/insurance-lead", element: <InsuranceLead /> },
  { path: "/last-viewed-car", element: <LastViewedCar /> },
  { path: "/limits", element: <Limits /> },
  { path: "/matched-buyer", element: <MatchedBuyer /> },
  { path: "/mobile-view-lead", element: <MobileViewLead /> },
  { path: "/my-account", element: <MyAccount /> },
  { path: "/new-car-lead", element: <NewCarLead /> },
  { path: "/offers-raised", element: <OfferesRaised /> },
  { path: "/paid-bills", element: <PaidBills /> },
  { path: "/paid-car", element: <PaidCar /> },
  { path: "/pay-later", element: <PayLater /> },
  { path: "/paymenttype", element: <PaymentType /> },
  { path: "/pay-u-money", element: <PayUMoney /> },
  { path: "/pending-car", element: <PendingCar /> },
  { path: "/photo-request", element: <PhotoRequest /> },
  { path: "/profile", element: <Profile /> },
  { path: "/puc-banner", element: <PucBanner /> },
  { path: "/puc-car", element: <PucCar /> },
  { path: "/puc-number", element: <PucNumber /> },
  { path: "/received-interest", element: <RecievedInterest /> },
  { path: "/removed-car", element: <RemovedCar /> },
  { path: "/reported-cars", element: <ReportedCar /> },
  { path: "/searchcar", element: <SearchCar /> },
  { path: "/searched-data", element: <SearchedData /> },
  { path: "/subscriber", element: <Subscriber /> },
  { path: "/transfer-assistant", element: <TransferAssistant /> },
  { path: "/transfer-follow-ups", element: <TRansferFollowUps /> },
  { path: "/tuc-banner", element: <TucBanner /> },
  { path: "/usage-statics", element: <UsageStatics /> },
  { path: "/user-rolls", element: <UserRolls /> },
  { path: "/users", element: <UserList /> },
  { path: "/user-log", element: <UsersLog /> },
  { path: "/office", element: <OfficeList /> },
  { path: "/rolls", element: <Roll /> },
  { path: "/car-model", element: <CarModel /> },
  { path: "/pending-assistant", element: <PendingAssistant /> },
  { path: "/buyers-list-interest-tried", element: <BuyerListInterestTriede /> },
  { path: "/ba-paid-bills", element: <BaPaidBill /> },
  { path: "/preapproved-car", element: <PreApprovedCar /> },
  { path: "/area", element: <Area /> },
  { path: "/state", element: <State /> },
  { path: "/edit-property", element: <EditProperty /> },
  { path: "/detail", element: <Detail /> },
  { path: "/set-property", element: <AdminSetForm /> },
  { path: "/interest-table", element: <InterestTables /> },
  { path: "/favorite-table", element: <FavoriteTables /> },
  { path: "/needhelp-table", element: <NeedHelpTables /> },
  { path: "/contact-table", element: <ContactTables /> },
  { path: "/soldout-table", element: <SoldOutTables /> },
  { path: "/report-property-table", element: <ReportPropertyTables /> },
  { path: "/property-list", element: <AddPropertyList /> },
  { path: "/get-buyer-assistance", element: <GetBuyerAssistance /> },





];

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (

    <div className="p-2" style={{ background: "#F0F2F5", }}>
      <div className="dashboard-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-content" style={{ background: "#F0F2F5" }}>
        <Navbar toggleSidebar={toggleSidebar} />
        <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

