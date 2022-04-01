import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalCarWashOutlinedIcon from '@mui/icons-material/LocalCarWashOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
      <div className="sidebar">
          <div className="top">
              <span className="logo"> RDNTech ADMIN</span>
          </div>
          <hr /> 
          <div className="center">
              <ul>
                  <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                      <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                  <li>
                      <PersonOutlineOutlinedIcon className="icon" />
                      <span>Users</span>
                  </li>
                  <li>
                      <StoreMallDirectoryOutlinedIcon className="icon" />
                      <span>Products</span>
                  </li>
                  <li>
                      <CreditCardOutlinedIcon className="icon" />
                      <span>Orders</span>
                  </li>
                  <li>
                      <LocalCarWashOutlinedIcon className="icon" />
                      <span>Delivery</span>
                  </li>
                  <p className="title">USEFUL</p>
                  <li>
                      <BarChartIcon className="icon" />
                      <span>Stats</span>
                  </li>
                  <li>
                      <NotificationsIcon className="icon" />
                      <span>Notifications</span>
                  </li>
                  <p className="title">SERVICE</p>
                  <li>
                      <SettingsSystemDaydreamIcon className="icon" />
                      <span>System Health</span>
                  </li>
                  <li>
                      <PsychologyOutlinedIcon className="icon" />
                      <span>Logs</span>
                  </li>
                  <li>
                      <SettingsApplicationsIcon className="icon" />
                      <span>Settings</span>
                  </li>
                  <p className="title">USER</p>
                  <li>
                      <AccountCircleIcon className="icon" />
                      <span>Profile</span>
                  </li>
                  <li>
                      <LogoutOutlinedIcon className="icon" />
                      <span>Logout</span>
                  </li>
              </ul>
          </div>
          <div className="bottom">
              
              <div className="colorOption"></div>
              <div className="colorOption"></div>
              
          </div>
      </div>
  )
}

export default Sidebar;